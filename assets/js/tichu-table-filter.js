// Add global styles when script loads
const style = document.createElement('style');
style.textContent = `
    .tichu-filter-container {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 16px;
        align-items: baseline;
    }
    .tichu-filter-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }
    .tichu-filter-label {
        font-weight: 500;
        font-size: 14px;
    }
    .tichu-filter-input,
    .tichu-filter-select {
        padding: 2px 6px;
        border: 1px solid #ddd;
        border-radius: 4px;
        width: 60px;
        font-size: 14px;
    }
    .tichu-stats-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 8px;
    }
    .tichu-stats-table th,
    .tichu-stats-table td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    .tichu-stats-table th {
        background-color: #f5f5f5;
    }
`;
document.head.appendChild(style);

// Main function to create filterable table from markdown
function createFilterableTable(markdownTable, containerId) {
    // Create container if it doesn't exist
    let container = document.getElementById(containerId);
    if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        document.currentScript.parentElement.appendChild(container);
    }

    // Convert and initialize
    const tableHTML = convertMarkdownTableToHTML(markdownTable);
    container.innerHTML = tableHTML;
    const tableElement = container.querySelector('.tichu-stats-table');
    createTichuTableFilter(tableElement);
}

function createTichuTableFilter(tableElement) {
    const filterDiv = document.createElement('div');
    
    filterDiv.innerHTML = `
        <div class="tichu-filter-container">
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Anzahl Asse:</span>
                <input type="number" id="aces-filter-${tableElement.id}" min="0" max="4" class="tichu-filter-input">
            </div>
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Dragon:</span>
                <select id="dragon-filter-${tableElement.id}" class="tichu-filter-select">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Phoenix:</span>
                <select id="phoenix-filter-${tableElement.id}" class="tichu-filter-select">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Dog:</span>
                <select id="dog-filter-${tableElement.id}" class="tichu-filter-select">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Mahjong:</span>
                <select id="mahjong-filter-${tableElement.id}" class="tichu-filter-select">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
        </div>
    `;
    
    // Insert filter controls before table
    tableElement.parentNode.insertBefore(filterDiv, tableElement);
    
    function matchesFilter(cell, filterValue, filterType) {
        if (filterType === 'number') {
            return filterValue === '' || parseInt(cell.textContent) === parseInt(filterValue);
        } else {
            if (filterValue === 'all') return true;
            const hasValue = cell.textContent.trim() !== '-';
            return filterValue === 'yes' ? hasValue : !hasValue;
        }
    }
    
    function filterTable() {
        const acesValue = document.getElementById(`aces-filter-${tableElement.id}`).value;
        const dragonValue = document.getElementById(`dragon-filter-${tableElement.id}`).value;
        const phoenixValue = document.getElementById(`phoenix-filter-${tableElement.id}`).value;
        const dogValue = document.getElementById(`dog-filter-${tableElement.id}`).value;
        const mahjongValue = document.getElementById(`mahjong-filter-${tableElement.id}`).value;
        
        const rows = tableElement.getElementsByTagName('tr');
        
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.getElementsByTagName('td');
            
            if (cells.length === 0) continue;
            
            const matches = 
                matchesFilter(cells[0], acesValue, 'number') &&
                matchesFilter(cells[1], dragonValue, 'select') &&
                matchesFilter(cells[2], phoenixValue, 'select') &&
                matchesFilter(cells[3], dogValue, 'select') &&
                matchesFilter(cells[4], mahjongValue, 'select');
            
            row.style.display = matches ? '' : 'none';
        }
    }
    
    // Add event listeners
    document.getElementById(`aces-filter-${tableElement.id}`).addEventListener('input', filterTable);
    document.getElementById(`dragon-filter-${tableElement.id}`).addEventListener('change', filterTable);
    document.getElementById(`phoenix-filter-${tableElement.id}`).addEventListener('change', filterTable);
    document.getElementById(`dog-filter-${tableElement.id}`).addEventListener('change', filterTable);
    document.getElementById(`mahjong-filter-${tableElement.id}`).addEventListener('change', filterTable);
}

function convertMarkdownTableToHTML(markdownTable) {
    const rows = markdownTable.trim().split('\n');
    const headerRow = rows[0];
    const headers = headerRow.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
    
    const tableId = 'tichu-table-' + Math.random().toString(36).substr(2, 9);
    
    let html = `<table id="${tableId}" class="tichu-stats-table">`;
    
    // Function to process cell content
    function processCellContent(content) {
        // First, handle escaped asterisks
        content = content.replace(/\\\*/g, '&#42;');
        
        // Then handle bold text
        content = content.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        
        // Finally, restore any escaped asterisks back to regular asterisks
        content = content.replace(/&#42;/g, '*');
        
        return content;
    }
    
    // Add header
    html += '<thead><tr>';
    headers.forEach(header => {
        html += `<th>${processCellContent(header)}</th>`;
    });
    html += '</tr></thead>';
    
    // Add body
    html += '<tbody>';
    for (let i = 2; i < rows.length; i++) {
        const row = rows[i];
        if (!row.trim()) continue;
        
        const cells = row.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
        html += '<tr>';
        cells.forEach(cell => {
            html += `<td>${processCellContent(cell)}</td>`;
        });
        html += '</tr>';
    }
    html += '</tbody></table>';
    
    return html;
}
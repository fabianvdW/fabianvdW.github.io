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

// Function to create a single global filter for all tables
function createGlobalTichuFilter(targetElement) {
    const filterDiv = document.createElement('div');
    const uniqueId = 'global-tichu-filter';
    
    filterDiv.innerHTML = `
        <div class="tichu-filter-container">
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Anzahl Asse:</span>
                <input type="number" id="aces-filter-${uniqueId}" min="0" max="4" class="tichu-filter-input">
            </div>
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Dragon:</span>
                <select id="dragon-filter-${uniqueId}" class="tichu-filter-select">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Phoenix:</span>
                <select id="phoenix-filter-${uniqueId}" class="tichu-filter-select">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Dog:</span>
                <select id="dog-filter-${uniqueId}" class="tichu-filter-select">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Mahjong:</span>
                <select id="mahjong-filter-${uniqueId}" class="tichu-filter-select">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
        </div>
    `;
    
    targetElement.appendChild(filterDiv);
    
    function matchesFilter(cell, filterValue, filterType) {
        if (filterType === 'number') {
            return filterValue === '' || parseInt(cell.textContent) === parseInt(filterValue);
        } else {
            if (filterValue === 'all') return true;
            const hasValue = cell.textContent.trim() !== '-';
            return filterValue === 'yes' ? hasValue : !hasValue;
        }
    }
    
    function filterAllTables() {
        const acesValue = document.getElementById(`aces-filter-${uniqueId}`).value;
        const dragonValue = document.getElementById(`dragon-filter-${uniqueId}`).value;
        const phoenixValue = document.getElementById(`phoenix-filter-${uniqueId}`).value;
        const dogValue = document.getElementById(`dog-filter-${uniqueId}`).value;
        const mahjongValue = document.getElementById(`mahjong-filter-${uniqueId}`).value;
        
        const allTables = document.querySelectorAll('.tichu-stats-table');
        
        allTables.forEach(table => {
            const rows = table.getElementsByTagName('tr');
            
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
        });
    }
    
    // Add event listeners
    document.getElementById(`aces-filter-${uniqueId}`).addEventListener('input', filterAllTables);
    document.getElementById(`dragon-filter-${uniqueId}`).addEventListener('change', filterAllTables);
    document.getElementById(`phoenix-filter-${uniqueId}`).addEventListener('change', filterAllTables);
    document.getElementById(`dog-filter-${uniqueId}`).addEventListener('change', filterAllTables);
    document.getElementById(`mahjong-filter-${uniqueId}`).addEventListener('change', filterAllTables);
}

// Main function to create filterable table from markdown
function createFilterableTable(markdownTable, containerId) {
    let container = document.getElementById(containerId);
    if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        document.currentScript.parentElement.appendChild(container);
    }

    const tableHTML = convertMarkdownTableToHTML(markdownTable);
    container.innerHTML = tableHTML;
    const tableElement = container.querySelector('.tichu-stats-table');
    createTichuTableFilter(tableElement);
}

function createTichuTableFilter(tableElement) {
    const uniqueId = 'tichu-' + Math.random().toString(36).substr(2, 9);
    tableElement.setAttribute('data-tichu-id', uniqueId);
    
    const filterDiv = document.createElement('div');
    
    filterDiv.innerHTML = `
        <div class="tichu-filter-container">
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Anzahl Asse:</span>
                <input type="number" id="aces-filter-${uniqueId}" min="0" max="4" class="tichu-filter-input">
            </div>
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Dragon:</span>
                <select id="dragon-filter-${uniqueId}" class="tichu-filter-select">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Phoenix:</span>
                <select id="phoenix-filter-${uniqueId}" class="tichu-filter-select">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Dog:</span>
                <select id="dog-filter-${uniqueId}" class="tichu-filter-select">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="tichu-filter-item">
                <span class="tichu-filter-label">Mahjong:</span>
                <select id="mahjong-filter-${uniqueId}" class="tichu-filter-select">
                    <option value="all">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
        </div>
    `;
    
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
        const acesValue = document.getElementById(`aces-filter-${uniqueId}`).value;
        const dragonValue = document.getElementById(`dragon-filter-${uniqueId}`).value;
        const phoenixValue = document.getElementById(`phoenix-filter-${uniqueId}`).value;
        const dogValue = document.getElementById(`dog-filter-${uniqueId}`).value;
        const mahjongValue = document.getElementById(`mahjong-filter-${uniqueId}`).value;
        
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
    
    document.getElementById(`aces-filter-${uniqueId}`).addEventListener('input', filterTable);
    document.getElementById(`dragon-filter-${uniqueId}`).addEventListener('change', filterTable);
    document.getElementById(`phoenix-filter-${uniqueId}`).addEventListener('change', filterTable);
    document.getElementById(`dog-filter-${uniqueId}`).addEventListener('change', filterTable);
    document.getElementById(`mahjong-filter-${uniqueId}`).addEventListener('change', filterTable);
}

function convertMarkdownTableToHTML(markdownTable) {
    const rows = markdownTable.trim().split('\n');
    const headerRow = rows[0];
    const headers = headerRow.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
    
    let html = '<table class="tichu-stats-table">';
    
    // Function to process cell content
    function processCellContent(content) {
        content = content.replace(/\\\*/g, '&#42;');
        content = content.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        content = content.replace(/&#42;/g, '*');
        return content;
    }
    
    html += '<thead><tr>';
    headers.forEach(header => {
        html += `<th>${processCellContent(header)}</th>`;
    });
    html += '</tr></thead>';
    
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
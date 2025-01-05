function createPValueSelector(targetElement) {
    // Create array of values from -400 to 50 with step 5
    const values = Array.from({ length: 91 }, (_, i) => -400 + i * 5);
    
    // Create the container with styles
    const style = document.createElement('style');
    style.textContent = `
        .p-value-container {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            position: fixed;
            top: 10px;
            right: 20px;
            background: white;
            padding: 8px 12px;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            z-index: 1000;
        }
        .p-value-select {
            padding: 4px 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
            width: 100px;
        }
        .p-value-label {
            font-size: 14px;
            font-weight: 500;
        }
    `;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.className = 'p-value-container';

    // Create the label
    const label = document.createElement('label');
    label.className = 'p-value-label';
    label.textContent = 'Springe zu p=';
    container.appendChild(label);

    // Create the select element
    const select = document.createElement('select');
    select.className = 'p-value-select';

    // Add an initial empty option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Auswählen...';
    select.appendChild(defaultOption);

    // Add all p-values as options
    values.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });

    container.appendChild(select);
    targetElement.appendChild(container);

    // Function to find and scroll to p-value
    function scrollToPValue(value) {
        if (!value) return;

        const searchText = `p=${value}`;
        const textNodes = [];
        
        // Function to recursively find text nodes
        function findTextNodes(node) {
            if (node.nodeType === 3) { // Text node
                textNodes.push(node);
            } else {
                for (let child of node.childNodes) {
                    findTextNodes(child);
                }
            }
        }
        
        findTextNodes(document.body);
        
        // Find first occurrence of p=value
        let found = false;
        for (let node of textNodes) {
            const index = node.textContent.indexOf(searchText);
            if (index !== -1) {
                // Create a range to select the text
                const range = document.createRange();
                range.setStart(node, index);
                range.setEnd(node, index + searchText.length);
                
                // Scroll the text into view
                range.startContainer.parentElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                found = true;
                break;
            }
        }

        // Reset select after searching
        if (!found) {
            console.log(`Value ${searchText} not found in document`);
            select.value = '';
        }
    }

    // Add event listener
    select.addEventListener('change', (e) => {
        scrollToPValue(e.target.value);
    });
}
function solve() {
    let searchButtonElement = document.getElementById('searchBtn');
 
    let rowsElements = document.querySelectorAll('tbody tr');
 
    searchButtonElement.addEventListener('click', () => Search())
 
    function Search() {
 
        let searchWord = document.getElementById('searchField').value.toLowerCase().trim();
 
        if (!searchWord) {
            return;
        }
 
        for (let i = 0; i < rowsElements.length; i++) {
 
            let currentRowElements = rowsElements[i].querySelectorAll('td');
            rowsElements[i].removeAttribute('class');
 
            for (let j = 0; j < currentRowElements.length; j++) {
 
                if (currentRowElements[j].textContent.toLowerCase().includes(searchWord)) {
                    rowsElements[i].className = 'select';
                    break;
                }
            }
            
        }

    
        document.getElementById('searchField').value="";

        
     
          
    
    }
}
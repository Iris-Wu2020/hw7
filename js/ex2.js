/* homework7 Exercise 2 JavaScript code
*/
console.log("Wu's Output from Exercise 2");
// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];

  

const inputField = document.getElementById("country");
const arr = countryList;

inputField.addEventListener("keydown", e => {
    const newChar = e.key;
    const currentInput =  inputField.value;
    let val = currentInput;
    if (newChar !== "Backspace") {
        val += newChar;
    } else {
        val = val.substr(0, val.length - 1);
    }
    
    
    const suggestions = document.getElementById("suggestions");
    
    while (suggestions.firstChild) {
        suggestions.removeChild(suggestions.firstChild);
    }

    
    for (i = 0; i < arr.length; i++) {
      
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        
        const divNode = document.createElement("div");
        
        divNode.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        divNode.innerHTML += arr[i].substr(val.length);
                
        suggestions.appendChild(divNode);
      }
    }
});
  
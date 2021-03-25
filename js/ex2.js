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
const currentInput = inputField.value;
let val = currentInput;

inputField.addEventListener("keydown", e => {
  const newChar = e.key;
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";


  if (newChar !== "Backspace") {
    val += newChar;
  } else {
    val = val.substr(0, val.length - 1);
  }

  const countryArray = countryList.filter(country => country.toLowerCase().startsWith(val.toLowerCase()));
  //console.log(countryArray);
  countryArray.forEach(country => {
    const divNode = document.createElement("div");
    divNode.textContent = country;
    divNode.classList = "suggestion";
    divNode.addEventListener("click", eCountry =>{
      document.getElementById("country").value = eCountry.target.textContent;
    })
    suggestions.appendChild(divNode);
  });
});


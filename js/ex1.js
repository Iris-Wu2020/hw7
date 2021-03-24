/* homework7 Exercise 1 JavaScript code
*/
console.log("Wu's Output from Exercise 1");

// Character list. Each house has a name and a code
const houses = [
    {
        code: "ST",
        name: "Stark"
    },
    {
        code: "LA",
        name: "Lannister"
    },
    {
        code: "BA",
        name: "Baratheon"
    },
    {
        code: "TA",
        name: "Targaryen"
    }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return []; // Empty array
    }
};

const dropDown = document.getElementById("house");
window.addEventListener("load", e => {
    houses.forEach(element => {
        const optionNode = document.createElement("option");
        optionNode.innerHTML = element.name;
        optionNode.value = element.code;
        dropDown.appendChild(optionNode);
    })

})



dropDown.addEventListener("change", e => {
    const ulNode = document.getElementById("characters");
    const charactersList = getCharacters(e.target.value);
    ulNode.innerHTML = "";
    charactersList.forEach(element => {
        const liNode = document.createElement("li");
        const chaText = document.createTextNode(element);
        liNode.appendChild(chaText);
        ulNode.appendChild(liNode);
    })
});



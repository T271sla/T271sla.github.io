function toggleColorID() {
    var edElementID = document.getElementById("ed");
    if (edElementID.classList.contains("color-changed")) {
        edElementID.classList.remove("color-changed");
    } else {
        edElementID.classList.add("color-changed");
    }
}

var edElementID = document.getElementById("ed");
edElementID.addEventListener("click", toggleColorID);

function toggleColor() {
    var hobElement = document.querySelector("#hob"); // Use querySelector to select the "hob" element by its ID
    if (hobElement.classList.contains("color-changed")) {
        hobElement.classList.remove("color-changed");
    } else {
        hobElement.classList.add("color-changed");
    }
}

var hobElement = document.querySelector("#hob");
hobElement.addEventListener("click", toggleColor);

const image = document.getElementById("rock-image");
const addButton = document.getElementById("add-button");
const removeButton = document.getElementById("remove-button");
const enlargeButton = document.getElementById("enlarge-button");
const reduceButton = document.getElementById("reduce-button");

addButton.addEventListener("click", () => {
    image.style.display = "block";
});

removeButton.addEventListener("click", () => {
    image.style.display = "none";
});

enlargeButton.addEventListener("click", () => {
    const currentWidth = parseInt(image.width);
    image.width = currentWidth * 1.2;
    image.height = currentWidth * 1.2 * (527 / 790);
});

reduceButton.addEventListener("click", () => {
    const currentWidth = parseInt(image.width);
    image.width = currentWidth * 0.8;
    image.height = currentWidth * 0.8 * (527 / 790);
});
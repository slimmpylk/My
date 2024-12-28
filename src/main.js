"use strict";
// Dynamic text with explosion effect
const texts = ["Programmer", "Ultra Runner", "Ethical Hacker"];
let index = 0;
// Get dynamic text container
const dynamicText = document.getElementById("dynamicText");
if (dynamicText) {
    setInterval(() => {
        // Create explosion element
        const explosion = document.createElement("div");
        explosion.className = "explosion";
        explosion.textContent = texts[index];
        // Add explosion effect to the DOM
        dynamicText.textContent = ""; // Clear current text
        dynamicText.appendChild(explosion);
        // Update text after explosion
        setTimeout(() => {
            dynamicText.textContent = texts[index];
        }, 500); // Match explosion animation duration
        // Move to the next text
        index = (index + 1) % texts.length;
    }, 3000); // Change every 3 seconds
}
else {
    console.error("Dynamic text element not found.");
}

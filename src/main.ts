const texts: string[] = ["Embedded Device Programmer", "Ultra Runner", "Ethical Hacker"];
let index: number = 0;

const dynamicText = document.getElementById("dynamicText");

if (dynamicText) {
    const changeText = () => {
        // Add the "flash-out" class for the outgoing text
        dynamicText.classList.add("flash-out");

        // Wait for the "flash-out" animation to finish
        setTimeout(() => {
            dynamicText.textContent = texts[index]; // Update the text
            index = (index + 1) % texts.length;

            // Replace "flash-out" with "flash-in"
            dynamicText.classList.remove("flash-out");
            dynamicText.classList.add("flash-in");

            // Remove the "flash-in" class after the animation completes
            setTimeout(() => {
                dynamicText.classList.remove("flash-in");
            }, 500); // Match the duration of the "flash-in" animation
        }, 500); // Match the duration of the "flash-out" animation
    };

    // Call the changeText function every 2 seconds
    setInterval(changeText, 2000);
} else {
    console.error("Dynamic text element not found.");
}



// Function to animate skill bars
function animateSkills() {
    const progressContainers = document.querySelectorAll(".progress-container");

    progressContainers.forEach((container) => {
        const progressBar = container.querySelector(".progress-bar") as HTMLElement;
        const skillLevel = parseInt(container.getAttribute("data-skill") || "0", 10);

        // Set width dynamically with animation
        if (progressBar) {
            progressBar.style.width = `${skillLevel}%`;
        }
    });
}

// Run animation when DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    animateSkills();
});


const texts: string[] = ["Embedded device programmer", "Ultra Runner", "Ethical Hacker"];
let index: number = 0;

const dynamicText = document.getElementById("dynamicText");

if (dynamicText) {
    setInterval(() => {
        dynamicText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }, 2000);
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


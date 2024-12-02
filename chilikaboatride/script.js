const taglines = [
    "Discover the Serenity of Chilika Lake",
    "Set Sail into Nature’s Wonderland",
    "Your Journey Awaits at Chilika",
    "Explore the Hidden Beauty of Chilika",
    "Ride the Waves, Unwind in Nature",
    "Escape to the Magic of Chilika Waters",
    "Where Adventure Meets Tranquility",
    "Immerse Yourself in Chilika’s Wonders",
    "Breathe. Explore. Sail Chilika",
    "Reconnect with Nature on Chilika’s Waters"
];

let currentTaglineIndex = 0;
let currentText = "";
let charIndex = 0;
const taglineElement = document.getElementById('tagline');

function typeTagline() {
    // If the entire tagline is typed, wait for a while and move to the next tagline
    if (charIndex === taglines[currentTaglineIndex].length) {
        setTimeout(() => {
            currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
            charIndex = 0;
            currentText = "";
            typeTagline(); // Restart typing the next tagline
        }, 2000); // Pause before typing the next tagline
    } else {
        currentText += taglines[currentTaglineIndex].charAt(charIndex);
        taglineElement.textContent = currentText;
        charIndex++;
        setTimeout(typeTagline, 100); // Typing speed (100ms per character)
    }
}

// Initial typing animation
typeTagline();

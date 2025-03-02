const colors = [
    "#FF6B6B",  // Red
    "#4ECDC4",  // Teal
    "#45B7D1",  // Blue
    "#96CEB4",  // Green
    "#FFEEAD",  // Yellow
    "#D4A5A5",  // Pink
    "#A39171"   // Brown
];

let currentIndex = 0;
const themeBtn = document.getElementById("theme-btn");
const body = document.body;

function changeTheme() {
    // Apply current color
    body.style.backgroundColor = colors[currentIndex];
    
    // Update button text
    themeBtn.textContent = `Theme ${currentIndex + 1}`;
    
    // Increment index (reset when reaching end)
    currentIndex = (currentIndex + 1) % colors.length;
}

// Initial setup
body.style.backgroundColor = colors[0];
themeBtn.textContent = "Theme 1";

// Add click event listener
themeBtn.addEventListener("click", changeTheme);
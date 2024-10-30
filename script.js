const correctPassword = "mybhangaram";

function checkPassword() {
    const enteredPassword = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");

    if (enteredPassword === correctPassword) {
        // Hide password screen and show flipbook content
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("flipbook-content").style.display = "block";
    } else {
        // Show error message
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
}

// Flipbook Navigation JavaScript
let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

// Initialize the first page as active
showPage(currentPage);

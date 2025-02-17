document.addEventListener("DOMContentLoaded", function () {
    const symbols = document.querySelector(".symbols");
    const triggerHeight = window.innerHeight; // First page height

    window.addEventListener("scroll", function () {
        if (window.scrollY > triggerHeight) {
            symbols.classList.add("fixed-symbols"); // Stick to top
        } else {
            symbols.classList.remove("fixed-symbols"); // Return to normal
        }
    });
});
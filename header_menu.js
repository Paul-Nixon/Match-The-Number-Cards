const toggleButton = document.querySelector(".fa-bars");
const headerMenu = document.querySelector(".header-menu")
const overlay = document.querySelector(".overlay")

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active-fa-bars");
    
    if (toggleButton.classList.contains("active-fa-bars"))
    {
        // Make the overlay and header menu appear.
        overlay.classList.add("fade-in");
        headerMenu.classList.add("fade-in");

        // Remove the "fade-out" class from the overlay and header menu.
        overlay.classList.remove("fade-out");
        headerMenu.classList.remove("fade-out");
    }
    else
    {
        // Make the overlay and header menu disappear.
        overlay.classList.add("fade-out");
        headerMenu.classList.add("fade-out");

        // Remove the "fade-out" class from the overlay and header menu.
        overlay.classList.remove("fade-in");
        headerMenu.classList.remove("fade-in");
    }
})
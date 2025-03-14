// This file contains JavaScript code for tab switching functionality and dynamic content loading.

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const pages = document.querySelectorAll(".page");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const targetPage = this.getAttribute("data-target");

            tabs.forEach(t => t.classList.remove("active"));
            pages.forEach(p => p.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(targetPage).classList.add("active");
        });
    });
});
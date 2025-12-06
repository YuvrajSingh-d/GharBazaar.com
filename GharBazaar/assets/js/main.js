function showPropertyCount() {
    alert("Total Available Properties: 12");
}

const menuBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });
}

const fadeItems = document.querySelectorAll(".fade-in");

function fadeInOnScroll() {
    fadeItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < window.innerHeight - 100) {
            item.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

const allButtons = document.querySelectorAll("button");

allButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("btn-clicked");

        setTimeout(() => {
            btn.classList.remove("btn-clicked");
        }, 200);
    });
});

console.log("Main JS Loaded Successfully");

let siteName = "GharBazaar";
let totalProperties = 12;
let isUserLoggedIn = false;

console.log("Website Name:", siteName);
console.log("Total Properties:", totalProperties);
console.log("User Logged In?", isUserLoggedIn);

let username = "Yuvraj";
let userAge = 19;
let isStudent = true;

console.log(username, userAge, isStudent);

let popularLocations = ["GK I", "Saket", "Gurgaon", "South Ex"];

let sampleProperty = {
    name: "Luxury Penthouse",
    price: 45000000,
    location: "Greater Kailash",
};

console.log(popularLocations);
console.log(sampleProperty);

let a = 5;
let b = 3;
console.log("Total:", a + b);
console.log("Difference:", a - b);

console.log("Is 10 > 3?", 10 > 3);
console.log("Is 5 == '5'?", 5 == "5");

function showPropertyCount() {
    console.log("Function Called: Showing Property Count");
    alert("Total Available Properties: " + totalProperties);
}

let menuBtn = document.getElementById("menuToggle");
let mobileMenu = document.getElementById("mobileMenu");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        console.log("Menu Button Clicked");
        mobileMenu.classList.toggle("show");
    });
}

let searchButtons = document.querySelectorAll("button");

searchButtons.forEach(btn => {
    btn.addEventListener("mouseover", function () {
        console.log("Button Hovered:", btn.innerText);
    });
});

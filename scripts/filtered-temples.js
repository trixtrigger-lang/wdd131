// Temple Array
const temples = [
    {
        templeName: "London England",
        location: "London, England",
        dedicated: "1958, September, 7-9",
        area: 42652,
        imageUrl: "images/londonenglandtemple.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila Philipines",
        dedicated: "1984, September, 4-15",
        area: 26683,
        imageUrl: "images/manilaphillipinestemple.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl: "images/parisfrancetemple.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 12",
        area: 41010,
        imageUrl: "images/romeitalytemple.jpg"
    },
    {
        templeName: "Saltlake Utah",
        location: "Saltlake, Utah, United States",
        dedicated: "1893, April, 24",
        area: 382207,
        imageUrl: "images/saltlaketemple.jpg"
    },
    {
        templeName: "Sydney Australia",
        location: "Sydney, Australia",
        dedicated: "1984, September, 23",
        area: 30067,
        imageUrl: "images/sydneyaustraliatemple.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 29",
        area: 53997,
        imageUrl: "images/tokyojapantemple.jpg"
    },
    {
        templeName: "Nairobi Kenya",
        location: "Nairobi, Kenya",
        dedicated: "2023, May, 21",
        area: 19800,
        imageUrl: "images/nairobikenyatemple.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "images/accraghanatemple.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl: "images/parisfrancetemple.jpg"
    }
];

const gallery = document.querySelector(".gallery");
const navLinks = document.querySelectorAll("nav a");

// Create temple cards
function displayTemples(templeList) {
    gallery.innerHTML = "";

    templeList.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
    `;

        gallery.appendChild(card);
    });
}

// Filter Logic
function filterTemples(filter) {
    switch (filter) {
        case "old":
            displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
            break;
        case "new":
            displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000));
            break;
        case "large":
            displayTemples(temples.filter(t => t.area > 90000));
            break;
        case "small":
            displayTemples(temples.filter(t => t.area < 10000));
            break;
        default:
            displayTemples(temples);
    }
}

// Nav Click Events
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        filterTemples(link.dataset.filter);
    });
});

// Footer
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;

// Hamburger
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuBtn.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

// Initial Load
displayTemples(temples);

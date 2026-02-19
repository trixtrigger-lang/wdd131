const foods = [
    {
        name: "Nyama Choma",
        category: "grilled",
        description: "Roasted meat served with kachumbari.",
        image: "images/nyamachoma.jpg",
        alt: "Grilled nyama choma served on a plate"
    },
    {
        name: "Mutura",
        category: "grilled",
        description: "Kenyan-style sausage grilled over charcoal.",
        image: "images/mutura.jpg",
        alt: "Freshly grilled mutura on a charcoal grill"
    },
    {
        name: "Bhajia",
        category: "fried",
        description: "Deep-fried potato slices coated in spiced batter.",
        image: "images/bhajiamamaoliech.jpg",
        alt: "Crispy bhajia served with dipping sauce"
    },
    {
        name: "Mandazi",
        category: "snack",
        description: "Sweet fried dough popular as a tea snack.",
        image: "images/mandazichai.jpg",
        alt: "Golden brown mandazi on a serving plate"
    }
];

function displayFoods(foodList) {
    const container = document.querySelector("#food-container");
    if (!container) return;

    container.innerHTML = "";

    foodList.forEach(food => {
        container.innerHTML += `
      <div class="card">
        <img src="${food.image}" alt="${food.alt}" loading="lazy">
        <h3>${food.name}</h3>
        <p>${food.description}</p>
      </div>
    `;
    });
}


function filterFoods(category) {
    if (category === "all") {
        displayFoods(foods);
    } else {
        const filteredFoods = foods.filter(food => food.category === category);
        displayFoods(filteredFoods);
    }
}


function setFeaturedFood() {
    const featured = document.querySelector("#featured-food");
    if (!featured) return;

    const randomIndex = Math.floor(Math.random() * foods.length);
    const food = foods[randomIndex];

    featured.innerHTML = `
    <div class="card">
      <img src="${food.image}" alt="${food.alt}" loading="lazy">
      <h3>${food.name}</h3>
      <p>${food.description}</p>
    </div>
  `;
}


function handleForm() {
    const form = document.querySelector("#contact-form");
    if (!form) return;

    form.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const favoriteInput = document.querySelector("input[name='food']:checked");

        if (!favoriteInput) {
            alert("Please select your favorite street food.");
            return;
        }

        const favorite = favoriteInput.value;

        const userData = {
            name,
            email,
            favorite
        };

        localStorage.setItem("subscriber", JSON.stringify(userData));

        document.querySelector("#form-message").innerHTML =
            `Thank you ${name}! Your favorite street food is ${favorite}. We will send updates to ${email}.`;

        form.reset();
    });
}

function trackVisits() {
    const visitDisplay = document.querySelector("#visit-count");
    if (!visitDisplay) return;

    let visits = localStorage.getItem("visits");

    if (visits === null) {
        visits = 1;
    } else {
        visits = Number(visits) + 1;
    }

    localStorage.setItem("visits", visits);

    visitDisplay.textContent = `You have visited this site ${visits} times.`;
}


/* --------- INITIALIZATION --------- */

document.addEventListener("DOMContentLoaded", () => {

    // Display foods if foods page
    if (document.querySelector("#food-container")) {
        displayFoods(foods);

        const buttons = document.querySelectorAll(".filters button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const category = button.dataset.category;
                filterFoods(category);
            });
        });
    }

    // Featured food on home page
    setFeaturedFood();

    // Contact form handling
    handleForm();

    // Visit counter (optional)
    trackVisits();

});

const foods = [
    {
        name: "Nyama Choma",
        category: "grilled",
        description: "Roasted meat served with kachumbari."
    },
    {
        name: "Mutura",
        category: "grilled",
        description: "Kenyan-style sausage grilled over charcoal."
    },
    {
        name: "Bhajia",
        category: "fried",
        description: "Deep-fried potato slices coated in spiced batter."
    },
    {
        name: "Mandazi",
        category: "snack",
        description: "Sweet fried dough popular as a tea snack."
    }
];

function displayFoods(foodList) {
    const container = document.querySelector("#food-container");
    if (!container) return;

    container.innerHTML = "";

    foodList.forEach(food => {
        container.innerHTML += `
      <div class="card">
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
        const filtered = foods.filter(food => food.category === category);
        displayFoods(filtered);
    }
}

function setFeaturedFood() {
    const featured = document.querySelector("#featured-food");
    if (!featured) return;

    const randomIndex = Math.floor(Math.random() * foods.length);
    const food = foods[randomIndex];

    featured.innerHTML = `
    <h3>${food.name}</h3>
    <p>${food.description}</p>
  `;
}

function handleForm() {
    const form = document.querySelector("#contact-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const favorite = document.querySelector("input[name='food']:checked").value;

        const userData = {
            name,
            email,
            favorite
        };

        localStorage.setItem("subscriber", JSON.stringify(userData));

        document.querySelector("#form-message").innerHTML =
            `Thank you ${name}! You love ${favorite}.`;

        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayFoods(foods);
    setFeaturedFood();
    handleForm();

    const buttons = document.querySelectorAll(".filters button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            filterFoods(category);
        });
    });
});

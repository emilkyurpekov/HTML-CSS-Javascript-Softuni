const baseUrl = "http://localhost:3030/jsonstore/tasks/";
let currentMealId = "";

const food = document.getElementById("food");
const time = document.getElementById("time");
const calories = document.getElementById("calories");

const meals = document.getElementById("list");
 
const addMealBtn = document.getElementById("add-meal");
addMealBtn.addEventListener("click", addMeal);
 
const editMealBtn = document.getElementById("edit-meal");
editMealBtn.addEventListener("click", editMeal);
 
const loadMealsBtn = document.getElementById("load-meals");
loadMealsBtn.addEventListener("click", loadAllMeals);
 
async function loadAllMeals() {
    meals.innerHTML = "";
 
    const history = await fetch(baseUrl)
    const data = await history.json();
    const meals = Object.values(data);
 
    for (const meal of meals) {
        const mealElement = renderMeals(meal);
        meals.appendChild(mealElement);
    }
    deactivateBtn(editMealBtn);
}
 
function renderMeals(meal) {
    const containerElement = document.createElement("div");
    containerElement.classList.add("meal");
    containerElement.setAttribute("meal-id", meal._id);
 
    const foodEl = document.createElement("h2");
    foodEl.textContent = meal.food;
 
    const timeElement = document.createElement("h3");
    timeElement.textContent = meal.time;
 
    const caloriesElement = document.createElement("h3");
    caloriesElement.textContent = meal.calories;
 
    const divButtonsElement = document.createElement("div");
    divButtonsElement.setAttribute("id", "meal-buttons");
 
    const changeMeal = document.createElement("button");
    changeMeal.classList.add("change-meal");
    changeMeal.textContent = "Change";
    changeMeal.addEventListener("click", () => {
        food.value = meal.food;
        time.value = meal.time;
        calories.value = meal.calories;
        currentm = containerElement.getAttribute("meal-id");
 
        deactivateBtn(addMealBtn);
        activateBtn(editMealBtn);
        meals.removeChild(containerElement);
    })
 
    const delEl = document.createElement("button");
    delEl.classList.add("delete-meal");
    delEl.textContent = "Delete";
    delEl.addEventListener("click", async () => {
        currentm = containerElement.getAttribute("meal-id")
        await fetch(`${baseUrl}${currentm}`, {
            method: "DELETE"
        });
        await loadAllMeals();
    })
 
    divButtonsElement.appendChild(changeMeal)
    divButtonsElement.appendChild(delEl)
 
    containerElement.appendChild(foodEl)
    containerElement.appendChild(timeElement)
    containerElement.appendChild(caloriesElement)
    containerElement.appendChild(divButtonsElement)
 
    return containerElement;
 
}
 
async function addMeal() {
    if (!validInput()) {
        return;
    }
    const addMealBody = {
        food: food.value,
        calories: calories.value,
        time: time.value
    }
    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(addMealBody)
    })
    clearForm();
    await loadAllMeals();
 
}
 
async function editMeal() {
 
    if (!validInput()) {
        return;
    }
 
    const editedMealBody = {
        food: food.value,
        time: time.value,
        calories: calories.value,
        "_id": currentm
 
    }
    await fetch(`${baseUrl}${currentm}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(editedMealBody)
    });
    deactivateBtn(editedMealBody);
    activateBtn(addMealBtn);
    clearForm();
    await loadAllMeals();
 
}
 
function deactivateBtn(btn) {
    btn.disabled = "true";
}
 
function activateBtn(btn) {
    btn.disabled = "";
}
 
function validInput() {
    return food.value !== "" &&
        time.value !== "" &&
        calories.value !== "";
}
 
 
function clearForm() {
    food.value = ""
    calories.value = ""
    time.value = ""
}
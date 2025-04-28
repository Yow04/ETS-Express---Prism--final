// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const myRecipesBtn = document.getElementById('myRecipesBtn');
const addRecipeBtn = document.getElementById('addRecipeBtn');
const logoutBtn = document.getElementById('logoutBtn');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const myRecipesSection = document.getElementById('myRecipesSection');
const addRecipeForm = document.getElementById('addRecipeForm');

const loginFormElement = document.getElementById('loginFormElement');
const registerFormElement = document.getElementById('registerFormElement');
const addRecipeFormElement = document.getElementById('addRecipeFormElement');

// State
let apiKey = localStorage.getItem('apiKey');
let isAuthenticated = !!apiKey;

// Initialize UI based on authentication state
function initializeUI() {
    if (isAuthenticated) {
        loginBtn.classList.add('hidden');
        registerBtn.classList.add('hidden');
        myRecipesBtn.classList.remove('hidden');
        addRecipeBtn.classList.remove('hidden');
        logoutBtn.classList.remove('hidden');
        loginForm.classList.add('hidden');
        registerForm.classList.add('hidden');
        myRecipesSection.classList.remove('hidden');
        loadMyRecipes();
    } else {
        loginBtn.classList.remove('hidden');
        registerBtn.classList.remove('hidden');
        myRecipesBtn.classList.add('hidden');
        addRecipeBtn.classList.add('hidden');
        logoutBtn.classList.add('hidden');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        myRecipesSection.classList.add('hidden');
        addRecipeForm.classList.add('hidden');
    }
}

// Event Listeners
loginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    myRecipesSection.classList.add('hidden');
    addRecipeForm.classList.add('hidden');
});

registerBtn.addEventListener('click', () => {
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    myRecipesSection.classList.add('hidden');
    addRecipeForm.classList.add('hidden');
});

myRecipesBtn.addEventListener('click', () => {
    myRecipesSection.classList.remove('hidden');
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    addRecipeForm.classList.add('hidden');
    loadMyRecipes();
});

addRecipeBtn.addEventListener('click', () => {
    addRecipeForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    myRecipesSection.classList.add('hidden');
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('apiKey');
    apiKey = null;
    isAuthenticated = false;
    initializeUI();
});

// Form Submissions
loginFormElement.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            // Store API key in localStorage
            localStorage.setItem('apiKey', data.apiKey);
            apiKey = data.apiKey;
            isAuthenticated = true;
            
            // Show success message with API key
            alert(`Login successful! Your API key is: ${data.apiKey}\nPlease save this key as it will be needed for authenticated requests.`);
            
            initializeUI();
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login');
    }
});

registerFormElement.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert('Registration successful! Please login to get your API key.');
            loginBtn.click(); // Switch to login form
        } else {
            alert(data.error || 'Registration failed');
        }
    } catch (error) {
        console.error('Registration error:', error);
        alert('An error occurred during registration');
    }
});

addRecipeFormElement.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('recipeTitle').value;
    const description = document.getElementById('recipeDescription').value;
    const ingredients = document.getElementById('recipeIngredients').value.split('\n');
    const instructions = document.getElementById('recipeInstructions').value;

    try {
        const response = await fetch('/api/recipes/custom', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
            body: JSON.stringify({
                title,
                description,
                ingredients,
                instructions,
            }),
        });

        if (response.ok) {
            alert('Recipe added successfully!');
            addRecipeFormElement.reset();
            myRecipesBtn.click();
        } else {
            const data = await response.json();
            alert(data.message || 'Failed to add recipe');
        }
    } catch (error) {
        console.error('Add recipe error:', error);
        alert('An error occurred while adding the recipe');
    }
});

// Load My Recipes
async function loadMyRecipes() {
    try {
        const response = await fetch('/api/recipes/custom', {
            headers: {
                'x-api-key': apiKey,
            },
        });

        if (response.ok) {
            const recipes = await response.json();
            displayRecipes(recipes);
        } else {
            const data = await response.json();
            alert(data.message || 'Failed to load recipes');
        }
    } catch (error) {
        console.error('Load recipes error:', error);
        alert('An error occurred while loading recipes');
    }
}

// Display Recipes
function displayRecipes(recipes) {
    const recipesList = document.getElementById('recipesList');
    recipesList.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <div class="recipe-actions">
                <button onclick="editRecipe('${recipe.id}')">Edit</button>
                <button class="delete-btn" onclick="deleteRecipe('${recipe.id}')">Delete</button>
            </div>
        `;
        recipesList.appendChild(recipeCard);
    });
}

// Delete Recipe
async function deleteRecipe(recipeId) {
    if (!confirm('Are you sure you want to delete this recipe?')) return;

    try {
        const response = await fetch(`/api/recipes/custom/${recipeId}`, {
            method: 'DELETE',
            headers: {
                'x-api-key': apiKey,
            },
        });

        if (response.ok) {
            loadMyRecipes();
        } else {
            const data = await response.json();
            alert(data.message || 'Failed to delete recipe');
        }
    } catch (error) {
        console.error('Delete recipe error:', error);
        alert('An error occurred while deleting the recipe');
    }
}

// Edit Recipe
async function editRecipe(recipeId) {
    try {
        const response = await fetch(`/api/recipes/custom/${recipeId}`, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        if (response.ok) {
            const recipe = await response.json();
            document.getElementById('recipeTitle').value = recipe.title;
            document.getElementById('recipeDescription').value = recipe.description;
            document.getElementById('recipeIngredients').value = recipe.ingredients.join('\n');
            document.getElementById('recipeInstructions').value = recipe.instructions;
            
            addRecipeForm.classList.remove('hidden');
            myRecipesSection.classList.add('hidden');

            // Update form submission to handle edit
            addRecipeFormElement.onsubmit = async (e) => {
                e.preventDefault();
                const title = document.getElementById('recipeTitle').value;
                const description = document.getElementById('recipeDescription').value;
                const ingredients = document.getElementById('recipeIngredients').value.split('\n');
                const instructions = document.getElementById('recipeInstructions').value;

                try {
                    const updateResponse = await fetch(`/api/recipes/custom/${recipeId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-api-key': apiKey,
                        },
                        body: JSON.stringify({
                            title,
                            description,
                            ingredients,
                            instructions,
                        }),
                    });

                    if (updateResponse.ok) {
                        alert('Recipe updated successfully!');
                        addRecipeFormElement.reset();
                        myRecipesBtn.click();
                    } else {
                        const data = await updateResponse.json();
                        alert(data.message || 'Failed to update recipe');
                    }
                } catch (error) {
                    console.error('Update recipe error:', error);
                    alert('An error occurred while updating the recipe');
                }
            };
        } else {
            const data = await response.json();
            alert(data.message || 'Failed to load recipe');
        }
    } catch (error) {
        console.error('Load recipe error:', error);
        alert('An error occurred while loading the recipe');
    }
} 
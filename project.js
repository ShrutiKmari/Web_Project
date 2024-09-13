// Sample restaurant data (you can add more)
const restaurants = [
    { name: "Pearl Seafood Grill", cuisine: "Seafood", location: "KIIT Road, Bhubaneswar" },
    { name: "Pearl Fine Dining", cuisine: "International", location: "Infocity, Bhubaneswar" },
    { name: "Pearl Garden", cuisine: "Vegetarian", location: "Nexus Esplanade" }
];

// Display the search results
function searchRestaurants() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const restaurantList = document.getElementById('restaurant-list');
    
    restaurantList.innerHTML = ''; // Clear previous results

    const filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchInput)
    );

    if (filteredRestaurants.length === 0) {
        restaurantList.innerHTML = '<p>No restaurants found. Try a different search.</p>';
    } else {
        filteredRestaurants.forEach(restaurant => {
            const div = document.createElement('div');
            div.classList.add('restaurant-item');
            div.innerHTML = `
                <h3>${restaurant.name}</h3>
                <p>Cuisine: ${restaurant.cuisine}</p>
                <p>Location: ${restaurant.location}</p>
                <button onclick="openReservationModal()">Reserve</button>
            `;
            restaurantList.appendChild(div);
        });
    }
}

// Open the reservation modal
function openReservationModal() {
    document.getElementById('reservation-modal').style.display = 'flex';
}

// Close the reservation modal
function closeModal() {
    document.getElementById('reservation-modal').style.display = 'none';
}

// Handle form submission
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    alert('Your reservation is confirmed!');
    closeModal();
});

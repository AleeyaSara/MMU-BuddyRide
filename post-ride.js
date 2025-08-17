const carSelect = document.getElementById('car');
const seatsInput = document.getElementById('availableSeats');

// Example: seat count based on car
const carSeats = {
  "Sedan": 4,
  "SUV": 6,
  "Van": 10
};

carSelect.addEventListener('change', () => {
  const selectedCar = carSelect.value;
  seatsInput.value = carSeats[selectedCar] || 0;
});

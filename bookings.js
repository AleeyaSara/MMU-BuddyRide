let currentUser = null;

// Track auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = user; // store the logged-in user
  } else {
    currentUser = null;
  }
});

// Book ride when button is clicked
document.getElementById("bookRideBtn").addEventListener("click", async () => {
  if (!rideData) {
    alert("Ride data is not loaded yet. Please wait.");
    return;
  }

  if (!currentUser) {
    alert("Please log in first!");
    return;
  }

  try {
    await addDoc(collection(db, "bookings"), {
      userId: currentUser.uid,
      rideId: rideId,
      destination: rideData.destination,
      date: rideData.date,
      time: rideData.time,
      assemblyPlace: rideData.assemblyPlace,
      mood: rideData.mood,
      gender: rideData.preferredGender || "Mixed",
      carDetails: rideData.carDetails,
      seatsBooked: 1,
      createdAt: new Date()
    });

    alert("Booking successful!");
    window.location.href = "passenger.html"; // redirect to dashboard
  } catch (err) {
    console.error("Booking error:", err);
    alert("Booking failed! Check console for details.");
  }
});

document.getElementById("tossButton").addEventListener("click", function () {
    const teams = [
        document.getElementById("teamA").value,
        document.getElementById("teamB").value
    ];

    if (teams.includes("")) {
        document.getElementById("tossResult").textContent = "Select both teams first!";
        return;
    }

    const winner = teams[Math.floor(Math.random() * teams.length)];
    document.getElementById("tossResult").textContent = winner + " wins the toss!";
});

// Map Selection Logic
const mapSelections = document.querySelectorAll(".map-select");

function updateMapOptions() {
    // Get all selected maps
    const selectedMaps = Array.from(mapSelections).map(select => select.value).filter(value => value);

    // Update each dropdown
    mapSelections.forEach(select => {
        const currentValue = select.value;
        Array.from(select.options).forEach(option => {
            if (option.value !== "" && selectedMaps.includes(option.value) && option.value !== currentValue) {
                option.style.display = "none"; // Hide selected maps
            } else {
                option.style.display = "block"; // Show unselected maps
            }
        });
    });
}

mapSelections.forEach(select => {
    select.addEventListener("change", function () {
        const column = this.closest(".column"); // Get parent column
        const mapImageDiv = column.querySelector(".map-image"); // Get the div for the image
        const selectedMap = this.value;

        if (selectedMap) {
            mapImageDiv.style.backgroundImage = `url('images/${selectedMap}.jpg')`; // Set background image
            mapImageDiv.style.display = "block"; // Show image

            // If the column is for bans, make the image black & white
            if (column.classList.contains("ban")) {
                mapImageDiv.style.filter = "grayscale(100%)"; // Black & White effect
                mapImageDiv.style.opacity = "0.6"; // Optional: Reduce opacity
            } else {
                // ✅ Pick column - Make image vibrant
                mapImageDiv.style.filter = "saturate(150%) contrast(110%) brightness(120%)";
                mapImageDiv.style.opacity = "1";
            }
        } else {
            mapImageDiv.style.display = "none"; // Hide if no selection
        }

        updateMapOptions(); // Update dropdown options dynamically
    });
});

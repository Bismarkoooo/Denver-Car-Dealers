const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

const vehicleToggle = document.getElementById("vehicleToggle");
const vehiclePanel = document.getElementById("vehiclePanel");

vehicleToggle.addEventListener("click", () => {
  vehiclePanel.classList.toggle("show");
});

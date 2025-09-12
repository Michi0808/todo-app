document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const sideBar = document.getElementById("sidebar");

  toggleButton.addEventListener("click", function () {
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  });
});

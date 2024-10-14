function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector(".main-content");

  // Toggle the open class for the sidebar
  sidebar.classList.toggle("open");

  // Toggle the shift class for the main content
  mainContent.classList.toggle("shift");
}
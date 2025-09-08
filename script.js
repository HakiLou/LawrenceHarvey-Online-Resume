// Show/hide sections functionality
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section-content');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Show the selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // Update active nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Find and activate the clicked nav link
  event.target.classList.add('active');
}

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year').textContent = new Date().getFullYear();
});
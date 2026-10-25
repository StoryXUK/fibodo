// Function to load content dynamically, with optional callback
function loadContent(elementId, file, callback) {
  const element = document.getElementById(elementId);
  if (!element) return;

  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error loading ${file}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((html) => {
      element.innerHTML = html;
      if (typeof callback === "function") {
        callback(); // Run the callback after content is injected
      }
    })
    .catch((error) => {
      console.error(`Error fetching ${file}:`, error);
    });
}

// Function to highlight the correct nav item based on current page
function highlightActiveNavItem() {
  let path = window.location.pathname;

  // Normalize path: add index.html to directory root
  if (path.endsWith("/")) {
    path += "index.html";
  }

  // Extract just the file name
  const currentPage = path.split("/").pop() || "index.html";

  // Select all nav links
  const navLinks = document.querySelectorAll(".nav-link");

  // First, remove any existing 'active' classes
  navLinks.forEach(link => {
    link.classList.remove("active");
    const navItem = link.closest(".nav-item");
    if (navItem) {
      navItem.classList.remove("active");
    }
  });

  // Then, add 'active' to the matching link/nav-item
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    const hrefFilename = href.split("/").pop();

    if (hrefFilename === currentPage) {
      link.classList.add("active");
      const navItem = link.closest(".nav-item");
      if (navItem) {
        navItem.classList.add("active");
      }
    }
  });
}

// Run once the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Load navigation and highlight correct nav item after it's inserted
  loadContent("navbar", "nav.html", highlightActiveNavItem);

  loadContent("pricing", "pricing.html"); // Load the pricing
  loadContent("core-features", "core-features.html"); // Load the features
  loadContent("additional-features", "additional-features.html"); // Load the features
});

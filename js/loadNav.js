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
      if (element) element.innerHTML = html;
      if (typeof callback === "function") {
        callback(); // Run the callback after content is injected
      }
    })
    .catch((error) => {
      console.error(`Error fetching ${file}:`, error);
    });
}

function normalizePageKey(filename) {
  if (!filename || filename === "home.html" || filename === "index.html") {
    return "index";
  }
  return filename.replace(/\.html$/i, "").toLowerCase();
}

// Function to highlight the correct nav item based on current page
function highlightActiveNavItem() {
  let path = window.location.pathname;

  // Normalize path: directory root resolves to index
  if (path.endsWith("/")) {
    path += "index.html";
  }

  const currentPage = path.split("/").pop() || "index.html";
  const currentKey = normalizePageKey(currentPage);

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    link.classList.remove("nav-link--active");
    const navItem = link.closest(".nav-item");
    if (navItem) {
      navItem.classList.remove("active");
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("#")) return;

    const hrefFilename = href.split("/").pop().split("#")[0] || "index.html";
    const hrefKey = normalizePageKey(hrefFilename);

    if (hrefKey === currentKey) {
      link.classList.add("active");
      link.classList.add("nav-link--active");
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
  // Load footer
  loadContent("footer", "footer.html");
  // Optional: load pricing/features only if placeholders exist on page
  if (document.getElementById("pricing")) loadContent("pricing", "pricing.html");
  if (document.getElementById("core-features")) loadContent("core-features", "core-features.html");
  if (document.getElementById("additional-features")) loadContent("additional-features", "additional-features.html");
});
// Create intersection observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation classes when element comes into view
        entry.target.classList.add(
          "animate__animated",
          ...entry.target.dataset.animate.split(" ")
        );
        // Also remove the initial opacity-0
        entry.target.classList.remove("opacity-0");
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  },
  {
    threshold: 0.1, // Trigger when at least 10% of element is visible
  }
);

// Start observing elements with data-animate attribute
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with data-animate
  const animatedElements = document.querySelectorAll("[data-animate]");

  animatedElements.forEach((element) => {
    // Add opacity-0 class instead of inline style
    element.classList.add("opacity-0");
    observer.observe(element);
  });
});

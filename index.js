// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add animation class when element is in viewport
function addAnimationOnScroll() {
  const boxes = document.querySelectorAll(".features .box");
  boxes.forEach((box) => {
    if (isInViewport(box)) {
      box.classList.add("animate");
    }
  });
}

// Initial check on page load
addAnimationOnScroll();

// Listen for scroll events to check for animations
window.addEventListener("scroll", addAnimationOnScroll);

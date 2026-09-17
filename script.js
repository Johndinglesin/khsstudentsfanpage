document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === page) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll(".card").forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, 60 * (index + 1));
  });
});
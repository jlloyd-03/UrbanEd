document.addEventListener("DOMContentLoaded", function() {
    // Select all articles
    const articles = document.querySelectorAll(".article-schools");

    articles.forEach(article => {
        // Get the clickable part (city title)
        const title = article.querySelector(".art-title");
        // Get the schools section
        const schoolsSection = article.querySelector(".schools");

        if (title && schoolsSection) {
            title.addEventListener("click", function() {
                schoolsSection.classList.toggle("hidden");
            });
        }
    });
});

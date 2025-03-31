document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "pub_72898e3e21016f5144813f5d76f91fbec702d";
  const categories = [
    "top",
    "technology",
    "business",
    "sports",
    "entertainment",
  ];
  const newsContainer = document.querySelector(".news-container");
  const searchInput = document.querySelector("#searchInput");

  function fetchNews(category) {
    fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        newsContainer.innerHTML = "";

        data.results.forEach((article) => {
          let articleDiv = document.createElement("div");
          articleDiv.classList.add("news-article");

          let description = article.description || "No description available.";

          articleDiv.innerHTML = `
                        <img src="${
                          article.image_url || "placeholder.jpg"
                        }" alt="News Image">
                        <h3>${article.title}</h3>
                        <p class="article-description">${description}</p>
                        <a href="${article.link}" target="_blank">Read more</a>
                    `;
          newsContainer.appendChild(articleDiv);
        });
      })
      .catch((error) => console.log("Error fetching news:", error));
  }

  fetchNews("top"); // Load top news by default

  document.querySelectorAll(".category-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const category = this.getAttribute("data-category");
      fetchNews(category);
    });
  });

  // Mobile Navigation Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Search Functionality
  searchInput.addEventListener("input", function () {
    let query = searchInput.value.toLowerCase();
    document.querySelectorAll(".news-article").forEach((article) => {
      let title = article.querySelector("h3").innerText.toLowerCase();
      let description = article
        .querySelector(".article-description")
        .innerText.toLowerCase();
      if (title.includes(query) || description.includes(query)) {
        article.style.display = "flex";
      } else {
        article.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "pub_72898e3e21016f5144813f5d76f91fbec702d";

  function fetchCategoryNews(category) {
    const contentDiv = document.getElementById(category);
    contentDiv.innerHTML = "Loading news...";

    fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          contentDiv.innerHTML = "";
          data.results.forEach((article) => {
            const articleDiv = document.createElement("div");
            articleDiv.classList.add("news-card");
            articleDiv.innerHTML = `
                            <img src="${
                              article.image_url || "placeholder.jpg"
                            }" alt="News Image">
                            <h3>${article.title}</h3>
                            <p>${
                              article.description || "No description available."
                            }</p>
                            <a href="${
                              article.link
                            }" target="_blank">Read more</a>
                        `;
            contentDiv.appendChild(articleDiv);
          });
        } else {
          contentDiv.innerHTML = "No news available.";
        }
      })
      .catch((error) => {
        contentDiv.innerHTML = "Failed to load news.";
        console.error("Error fetching news:", error);
      });
  }

  window.toggleCategory = function (category) {
    const contentDiv = document.getElementById(category);
    contentDiv.classList.toggle("hidden");

    if (
      !contentDiv.classList.contains("hidden") &&
      contentDiv.innerHTML.includes("Loading")
    ) {
      fetchCategoryNews(category);
    }
  };
});
document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "pub_72898e3e21016f5144813f5d76f91fbec702d";
  const newsContainer = document.querySelector(".news-container");

  function fetchLatestNews() {
    fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&category=top`)
      .then((response) => response.json())
      .then((data) => {
        newsContainer.innerHTML = "";
        data.results.forEach((article) => {
          let articleDiv = document.createElement("div");
          articleDiv.classList.add("news-card");
          articleDiv.innerHTML = `
                        <img src="${
                          article.image_url || "placeholder.jpg"
                        }" alt="News Image">
                        <h3>${article.title}</h3>
                        <p>${
                          article.description || "No description available."
                        }</p>
                        <a href="${article.link}" target="_blank">Read more</a>
                    `;
          newsContainer.appendChild(articleDiv);
        });
      })
      .catch((error) => console.log("Error fetching latest news:", error));
  }

  fetchLatestNews(); // Load latest news on page load
});
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      formMessage.textContent = "Your message has been sent successfully!";
      formMessage.style.color = "green";
      contactForm.reset();
    } else {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "pub_72898e3e21016f5144813f5d76f91fbec702d";
    const galleryContainer = document.getElementById("gallery-container");

    function fetchArticleImages() {
        fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&image=1`)
            .then(response => response.json())
            .then(data => {
                galleryContainer.innerHTML = ""; // Clear previous content
                data.results.forEach(article => {
                    if (article.image_url) { // Only display articles with images
                        let galleryItem = document.createElement("div");
                        galleryItem.classList.add("gallery-item");
                        galleryItem.innerHTML = `
                            <img src="${article.image_url}" alt="Article Image">
                            <p>${article.title}</p>
                        `;
                        galleryContainer.appendChild(galleryItem);
                    }
                });
            })
            .catch(error => {
                galleryContainer.innerHTML = "<p>Failed to load images. Try again later.</p>";
                console.error("Error fetching news images:", error);
            });
    }

    fetchArticleImages();
});

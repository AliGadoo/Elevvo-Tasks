const allPosts = [
  {
    id: 1,
    category: "tech",
    title: "The Future of AI in Web Development",
    description:
      "How machine learning and smart tools are changing how we build sites.",
    date: "2025-10-15",
    image: "https://picsum.photos/seed/tech1/600/338",
  },
  {
    id: 2,
    category: "tech",
    title: "Why I Switched to Vim",
    description:
      "A deep dive into the productivity boost and learning curve of the legendary text editor.",
    date: "2025-09-28",
    image: "https://picsum.photos/seed/tech2/600/338",
  },
  {
    id: 3,
    category: "tech",
    title: "Understanding CSS Grid vs. Flexbox",
    description:
      "When to use which layout model for the best front-end performance.",
    date: "2025-09-10",
    image: "https://picsum.photos/seed/tech3/600/338",
  },
  {
    id: 4,
    category: "tech",
    title: "My First Experience with Rust",
    description:
      "Initial challenges and impressions of coding in this high-performance systems language.",
    date: "2025-08-25",
    image: "https://picsum.photos/seed/tech4/600/338",
  },
  {
    id: 5,
    category: "tech",
    title: "Serverless Functions Explained",
    description:
      "A beginner's guide to FaaS and how it helps applications scale easily.",
    date: "2025-08-01",
    image: "https://picsum.photos/seed/tech5/600/338",
  },
  {
    id: 12,
    category: "tech",
    title: "Intro to React Hooks",
    description:
      "How to use State and Effect hooks to simplify your functional components.",
    date: "2025-07-10",
    image: "https://picsum.photos/seed/tech6/600/338",
  },

  {
    id: 6,
    category: "travel",
    title: "Backpacking Through Southeast Asia",
    description:
      "Budget tips and must-see destinations from my three-month journey.",
    date: "2025-10-05",
    image: "https://picsum.photos/seed/travel1/600/338",
  },
  {
    id: 7,
    category: "travel",
    title: "The Hidden Gems of Iceland",
    description:
      "Finding the most breathtaking, secluded spots beyond the Blue Lagoon.",
    date: "2025-09-19",
    image: "https://picsum.photos/seed/travel2/600/338",
  },
  {
    id: 8,
    category: "travel",
    title: "One Week in Tokyo Itinerary",
    description:
      "A perfect 7-day plan to experience the best of modern and traditional Tokyo.",
    date: "2025-08-12",
    image: "https://picsum.photos/seed/travel3/600/338",
  },
  {
    id: 13,
    category: "travel",
    title: "Budget Flying Hacks",
    description:
      "Tips and tricks to score the cheapest airfare without sacrificing comfort.",
    date: "2025-06-01",
    image: "https://picsum.photos/seed/travel4/600/338",
  },

  {
    id: 9,
    category: "food",
    title: "Mastering the Art of Sourdough",
    description:
      "My step-by-step process for a perfect, tangy, and crusty loaf every time.",
    date: "2025-10-01",
    image: "https://picsum.photos/seed/food1/600/338",
  },
  {
    id: 10,
    category: "food",
    title: "Quick & Healthy Weeknight Meals",
    description:
      "Five recipes that take less than 30 minutes but are packed with flavor.",
    date: "2025-09-05",
    image: "https://picsum.photos/seed/food2/600/338",
  },
  {
    id: 11,
    category: "food",
    title: "Coffee Brewing Methods: A Comparison",
    description:
      "French Press vs. Pour-over vs. Espresso for the ultimate morning cup.",
    date: "2025-07-20",
    image: "https://picsum.photos/seed/food3/600/338",
  },
];

const POSTS_PER_PAGE = 6;
let currentPage = 1;
let currentCategory = "all";
let currentSearchTerm = "";

const postsContainer = document.getElementById("posts-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageInfoSpan = document.getElementById("page-info");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchBar = document.getElementById("searchbar");

function createPostCardHTML(post) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `
        <article class="post-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col">
            <div class="post-image-container overflow-hidden rounded-t-xl">
                <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <h3 class="post-title text-xl font-bold text-emerald-700 mb-3">${post.title}</h3>
                <p class="post-description text-gray-600 mb-4 flex-grow">${post.description}</p>
                <div class="post-meta pt-4 border-t border-gray-100 flex justify-between items-center text-sm">
                    <span class="post-date text-gray-500">${formattedDate}</span>
                    <span class="post-category bg-secondary text-gray-900 px-3 py-1 rounded-full font-semibold uppercase text-xs">${post.category}</span>
                </div>
            </div>
        </article>
    `;
}

function renderPosts() {
  let workingPosts =
    currentCategory === "all"
      ? allPosts
      : allPosts.filter((post) => post.category === currentCategory);

  if (currentSearchTerm) {
    const term = currentSearchTerm.toLowerCase();
    workingPosts = workingPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.description.toLowerCase().includes(term)
    );
  }

  workingPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalPosts = workingPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  } else if (totalPages === 0) {
    currentPage = 1;
  }

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const postsToDisplay = workingPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  if (postsToDisplay.length === 0) {
    postsContainer.innerHTML =
      '<p class="text-center text-xl text-emerald-600 py-12 col-span-full">Nothing found! Try a different category or search term.</p>';
  } else {
    postsContainer.innerHTML = postsToDisplay.map(createPostCardHTML).join("");
  }

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages || totalPages === 0;
  pageInfoSpan.textContent = `Page ${
    totalPages === 0 ? 0 : currentPage
  } of ${totalPages}`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.getAttribute("data-category");
    currentPage = 1;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.classList.add("inactive");
    });
    button.classList.remove("inactive");
    button.classList.add("active");

    renderPosts();
  });
});

searchBar.addEventListener("input", () => {
  currentSearchTerm = searchBar.value.trim();
  currentPage = 1;
  renderPosts();
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPosts();
    document.querySelector("main").scrollIntoView({ behavior: "smooth" });
  }
});

nextBtn.addEventListener("click", () => {
  const totalPosts = (
    currentCategory === "all"
      ? allPosts
      : allPosts.filter((p) => p.category === currentCategory)
  ).filter((p) =>
    currentSearchTerm
      ? p.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(currentSearchTerm.toLowerCase())
      : true
  ).length;

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  if (currentPage < totalPages) {
    currentPage++;
    renderPosts();
    document.querySelector("main").scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener("DOMContentLoaded", renderPosts);

const toggle_btn = document.getElementById("toggle_btn");
const sidebar = document.getElementById("sidebar");
const allLinks = document.getElementsByClassName("links");

toggle_btn.onclick = () => {
  sidebar.classList.toggle("extended_sidebar");
  for (const link of allLinks) {
    link.classList.toggle("expanded_links");
  }
};

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && e.target !== toggle_btn) {
    sidebar.classList.remove("extended_sidebar");
    for (const link of allLinks) {
      link.classList.remove("expanded_links");
    }
  }
});

const toggle_btn = document.getElementById("toggle_btn");
const sidebar = document.getElementById("sidebar");
const allLinks = document.getElementsByClassName("links");

toggle_btn.onclick = () => {
  sidebar.classList.toggle("extended_sidebar");
  for (const link of allLinks) {
    link.classList.toggle("expanded_links");
  }
};

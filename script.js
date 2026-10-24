// Edit this file to add or update resources and paid product links.
const resources = [
  {id:"python",title:"Python Beginner Cheat Sheet",description:"A quick reference for variables, data types, conditions, loops and functions.",category:"Coding",type:"PDF",size:"Starter guide",icon:"Py",iconClass:"icon-violet",file:"assets/downloads/python-starter-cheatsheet.txt"},
  {id:"dsa",title:"DSA Interview Prep Checklist",description:"A structured checklist to organize your data structures and algorithms practice.",category:"Career",type:"PDF",size:"Practice checklist",icon:"DS",iconClass:"icon-blue",file:"assets/downloads/dsa-interview-checklist.txt"},
  {id:"resume",title:"Tech Resume Checklist",description:"Review your resume for clarity, relevant projects, skills and measurable outcomes.",category:"Career",type:"PDF",size:"Career toolkit",icon:"CV",iconClass:"icon-pink",file:"assets/downloads/tech-resume-checklist.txt"},
  {id:"project",title:"Tech Project Report Outline",description:"A clear outline for documenting a student project from problem statement to conclusion.",category:"College",type:"TXT",size:"Project starter",icon:"PR",iconClass:"icon-green",file:"assets/downloads/project-report-outline.txt"},
  {id:"git",title:"Git & GitHub Quick Start",description:"Learn the basic workflow: repositories, commits, branches and pushing changes.",category:"Coding",type:"TXT",size:"Quick reference",icon:"GH",iconClass:"icon-violet",file:"assets/downloads/git-github-quickstart.txt"},
  {id:"placement",title:"Placement Preparation Planner",description:"Break interview preparation into manageable weekly focus areas.",category:"College",type:"TXT",size:"Planning tool",icon:"GO",iconClass:"icon-blue",file:"assets/downloads/placement-prep-planner.txt"}
];

// Replace these placeholder values with the actual checkout URLs from your store.
// Keep the URLs blank until your products are created and tested.
const storeLinks = {
  resume: "",
  ppt: "",
  planner: ""
};

const resourceGrid = document.querySelector("#resourceGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#resourceSearch");
let activeFilter = "All";

function renderResources() {
  const query = searchInput.value.trim().toLowerCase();
  const matches = resources.filter(item => {
    const matchesCategory = activeFilter === "All" || item.category === activeFilter;
    const text = `${item.title} ${item.description} ${item.category}`.toLowerCase();
    return matchesCategory && text.includes(query);
  });

  resourceGrid.innerHTML = matches.map(item => `
    <article class="resource-card">
      <div class="resource-card-top">
        <span class="resource-icon ${item.iconClass}">${item.icon}</span>
        <span class="free-tag">FREE RESOURCE</span>
      </div>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description)}</p>
      <div class="resource-meta">
        <span>${escapeHTML(item.category)} · ${escapeHTML(item.size)}</span>
        <a href="${item.file}" download>Download ↓</a>
      </div>
    </article>
  `).join("");

  emptyState.hidden = matches.length > 0;
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
}

searchInput.addEventListener("input", renderResources);
document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderResources();
  });
});

document.querySelectorAll(".buy-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const product = link.dataset.product;
    const url = storeLinks[product];
    if (url && /^https:\/\//i.test(url)) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("This product is a demo listing. Add its real checkout URL in script.js after creating the product in your digital storefront.");
    }
  });
});

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.querySelector("#newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector("#newsletterMessage").textContent =
    "Demo only: connect an email marketing service before collecting subscriptions. No email has been saved.";
});
document.querySelector("#year").textContent = new Date().getFullYear();
renderResources();

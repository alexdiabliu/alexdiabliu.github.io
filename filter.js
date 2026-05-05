const filterMenuEl = document.getElementById("dynamic-filter-menu");
const projectGridEl = document.getElementById("project-grid");
const searchInputEl = document.getElementById("project-search");
const activeFilterBarEl = document.getElementById("active-filter-bar");

function initPortfolioFilters() {
    const hasGlobalLexicalProjectsData = typeof projectsData !== "undefined" && Array.isArray(projectsData);
    const hasProjectsData = typeof window.projectsData !== "undefined" && Array.isArray(window.projectsData);
    const hasAnyProjectsData = hasGlobalLexicalProjectsData || hasProjectsData;
    if (!filterMenuEl || !projectGridEl || !searchInputEl || !hasAnyProjectsData) {
        return false;
    }

    const sourceProjects = hasGlobalLexicalProjectsData ? projectsData : window.projectsData;
    const sourceFilters = typeof projectFilters !== "undefined" && Array.isArray(projectFilters)
        ? projectFilters
        : (Array.isArray(window.projectFilters) ? window.projectFilters : []);

    const languageOptions = ["TypeScript", "Python", "Rust", "JavaScript", "C++"];
    const frameworkOptions = ["Arduino", "React", "Raspberry Pi", "Tailwind CSS", "Django"];
    const domainOptions = ["IoT", "Web Dev", "Machine Learning", "Robotics", "Biomedical", "Marketing", "Biology", "Engineering", "Software"];

    const globalFilters = [...new Set(["All", ...sourceFilters, ...languageOptions, ...frameworkOptions, ...domainOptions])];
    let activeFilter = "All";
    let activeSearch = "";

    const normalize = (value) => value.toLowerCase().trim();

    function createFilterButton(label) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "filter-chip";
        btn.dataset.target = label;
        btn.textContent = label;
        btn.addEventListener("click", () => {
            activeFilter = label;
            renderFilters();
            applyProjectFilters();
        });
        return btn;
    }

    function renderFilters() {
        filterMenuEl.innerHTML = "";
        globalFilters.forEach((filterLabel) => {
            const button = createFilterButton(filterLabel);
            if (filterLabel === activeFilter) {
                button.classList.add("current");
            }
            filterMenuEl.appendChild(button);
        });
    }

    function buildTagPills(project) {
        const tags = [...(project.categories || []), ...(project.tags || [])];
        return [...new Set(tags)]
            .map((tag) => `<button type="button" class="project-tag" data-filter-tag="${tag}">${tag}</button>`)
            .join("");
    }

    function createProjectCard(project) {
        const card = document.createElement("article");
        const layoutClass = project.layout ? `layout-${project.layout}` : "layout-compact";
        card.className = `project-card ${layoutClass}`;
        card.dataset.search = normalize([project.title, project.description, ...(project.categories || []), ...(project.tags || [])].join(" "));
        card.dataset.tags = normalize([...(project.categories || []), ...(project.tags || [])].join("|"));
        card.innerHTML = `
            <a class="project-link" href="${project.href}">
                <div class="project-media">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">${buildTagPills(project)}</div>
                </div>
            </a>
        `;
        return card;
    }

    function renderProjects() {
        projectGridEl.innerHTML = "";
        sourceProjects.forEach((project) => {
            projectGridEl.appendChild(createProjectCard(project));
        });
    }

    function matchesFilter(card) {
        if (activeFilter === "All") {
            return true;
        }
        return card.dataset.tags.includes(normalize(activeFilter));
    }

    function matchesSearch(card) {
        if (!activeSearch) {
            return true;
        }
        return card.dataset.search.includes(activeSearch);
    }

    function updateActiveFilterBar() {
        const info = [];
        if (activeFilter !== "All") {
            info.push(`Filter: ${activeFilter}`);
        }
        if (activeSearch) {
            info.push(`Search: "${activeSearch}"`);
        }
        activeFilterBarEl.textContent = info.length ? info.join(" | ") : "Showing all projects";
    }

    function applyProjectFilters() {
        const cards = projectGridEl.querySelectorAll(".project-card");
        cards.forEach((card) => {
            const visible = matchesFilter(card) && matchesSearch(card);
            card.classList.toggle("active", visible);
            card.classList.toggle("delete", !visible);
        });
        updateActiveFilterBar();
    }

    searchInputEl.addEventListener("input", (event) => {
        activeSearch = normalize(event.target.value || "");
        applyProjectFilters();
    });

    projectGridEl.addEventListener("click", (event) => {
        const tagButton = event.target.closest(".project-tag");
        if (!tagButton) {
            return;
        }
        event.preventDefault();
        activeFilter = tagButton.dataset.filterTag;
        renderFilters();
        applyProjectFilters();
    });

    renderFilters();
    renderProjects();
    applyProjectFilters();

    return true;
}

if (!initPortfolioFilters()) {
    window.addEventListener("load", initPortfolioFilters, { once: true });
}
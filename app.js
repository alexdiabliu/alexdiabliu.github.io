
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

if (menu && menuLinks) {
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
}


const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');



if (open && modal_container && close) {
    open.addEventListener('click', () => {
        modal_container.classList.add('show');
    });

    close.addEventListener('click', () => {
        modal_container.classList.remove('show');
    });
}

const open2 = document.getElementById('open2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');

if (open2 && modal_container2 && close2) {
    open2.addEventListener('click', () => {
        modal_container2.classList.add('show');
    });

    close2.addEventListener('click', () => {
        modal_container2.classList.remove('show');
    });
}

const open3 = document.getElementById('open3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('close3');

if (open3 && modal_container3 && close3) {
    open3.addEventListener('click', () => {
        modal_container3.classList.add('show');
    });

    close3.addEventListener('click', () => {
        modal_container3.classList.remove('show');
    });
}

const detailPages = new Set([
    "vestomy.html",
    "hips.html",
    "thermosleeve.html",
    "onewheel.html",
    "mentis.html",
    "linkclicks.html",
    "werrv.html",
    "synuclein.html",
    "glaucoma.html",
    "aleph.html",
    "deltahacks.html",
    "behaivior.html",
    "consulting.html",
    "spatialmapping.html",
    "smarthomeassistant.html",
    "gpuperfmetrics.html",
    "automaticcar.html",
    "invoicemaker.html",
    "movementclassifier.html"
]);

const currentPage = window.location.pathname.split("/").pop().toLowerCase();
if (detailPages.has(currentPage) && !document.querySelector(".project-back-wrap")) {
    const footer = document.querySelector(".footer__container");
    if (footer) {
        const backWrap = document.createElement("div");
        backWrap.className = "project-back-wrap";
        backWrap.innerHTML = '<a class="project-back-link" href="portfolio.html"><i class="fa-solid fa-arrow-left"></i> Back to Projects</a>';
        footer.parentNode.insertBefore(backWrap, footer);
    }
}
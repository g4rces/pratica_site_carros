let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");

let items = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");
let number = indicator.querySelector(".number");
let list = container.querySelector(".list");
let active = 0;
let firsPosition = 0;
let lastPosition = items.length -1;

prevButton.onclick = () => {
    alert("funciona prev");
}

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active'); // Sem espaço entre .item e .active
    let dotOld = indicator.querySelector('ul li.active');
    itemOld.classList.remove('active');
    dotOld.classList.remove('active');
    active  = active + 1 > lastPosition ? 0 : active + 1;
    items[active].classList.add('active');
    dots[active].classList.add('active');
    number.innerHTML = active + 1;
    list.style.setProperty("--calculation", 1);
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active'); // Sem espaço entre .item e .active
    itemOld.classList.remove('active');
    let dotOld = indicator.querySelector('ul li.active');
    dotOld.classList.remove('active');
    active  = active - 1 < firsPosition ? lastPosition : active - 1;
    items[active].classList.add('active');
    dots[active].classList.add('active');
    number.innerHTML = active - 1;
    list.style.setProperty("--calculation", -1);
}
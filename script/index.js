const btn=document.querySelector(".btn");
const content=document.querySelector(".main-menu");

btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("btn")) {
        btn.textContent="Показать все";
    } else {
        btn.textContent="Скрыть";
    }

    content.classList.toggle("main-menu--open");
}

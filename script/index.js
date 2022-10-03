const btn=document.querySelector(".btn");
const content=document.querySelector(".main-menu");

btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("btn")) {
        btn.textContent="Скрыть";
    } else {
        btn.textContent="Показать все";
    }

    content.classList.toggle("main-menu--open");
}

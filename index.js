const btnEL = document.querySelector(".btn");
btnEL.addEventListener("mouseover", (Event) => {
    const x = (Event.pageX  - btnEL.offsetleft);
    const y = (Event.pageY  - btnEL.offsetleft);

    btnEL.style.setproperty("--xPos", x + "px");
}


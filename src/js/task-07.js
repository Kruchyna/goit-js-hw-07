const slider = document.getElementById("font-size-control");

slider.addEventListener('input' , (event) => {
    const size = event.target.value;
     text.style.fontSize = size + "px";
});
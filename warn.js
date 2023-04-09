const warningContainer = document.getElementById("warning-container");

warningContainer.addEventListener("mousemove", (event) => {
    const x = event.clientX - warningContainer.offsetLeft;
    const y = event.clientY - warningContainer.offsetTop;
    const deg = Math.atan2(y, x) * (180 / Math.PI);
    warningContainer.style.transform = `rotate(${deg}deg)`;
});

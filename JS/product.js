const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const shotsInput = document.getElementById("shots");

decrementBtn.addEventListener("click", () => {
    const currentValue = parseInt(shotsInput.value);
    if (currentValue > 1) {
        shotsInput.value = currentValue - 1;
    }
});

incrementBtn.addEventListener("click", () => {
    const currentValue = parseInt(shotsInput.value);
    shotsInput.value = currentValue + 1;
});

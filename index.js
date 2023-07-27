const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let interval;
  return (seconds) => {
    if (interval) return;
    interval = setInterval(() => {
      seconds--;
      let hrs = Math.floor(seconds / 3600);
      let mins = Math.floor((seconds - hrs * 3600) / 60);
      let secs = seconds % 60;

      hrs < 10 ? (hrs = "0" + hrs) : hrs;
      mins < 10 ? (mins = "0" + mins) : mins;
      secs < 10 ? (secs = "0" + secs) : secs;

      timerEl.innerText = `${hrs}:${mins}:${secs}`;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  let inputValue = e.target.value;
  e.target.value = inputValue.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});

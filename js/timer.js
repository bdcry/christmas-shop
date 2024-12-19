export const startTimer = () => {
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  let intervalId;

  const countDownToNewYear = () => {
    const today = new Date();
    const newYear = new Date(`1 January ${today.getFullYear() + 1} 00:00:00`);
    const timeDifference = newYear - today;

    if (timeDifference <= 0) {
      clearInterval(intervalId);
      alert('Happy New Year!');
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
  };

  intervalId = setInterval(countDownToNewYear, 1000);
};

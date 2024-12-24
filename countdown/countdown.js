const shouldAnimate = true;

let previousValues = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null
};

function createCountdownElement(id, label) {
    const container = document.createElement('div');
    const heading = document.createElement('h2');
    heading.textContent = label;
    const digitContainer = document.createElement('div');
    digitContainer.id = id;
    const digit1 = document.createElement('span');
    digit1.className = 'digit1';
    const digit2 = document.createElement('span');
    digit2.className = 'digit2';
    digitContainer.appendChild(digit1);
    digitContainer.appendChild(digit2);
    container.appendChild(heading);
    container.appendChild(digitContainer);
    return container;
}

function initializeCountdown() {
    const countdownContainer = document.getElementById('countdown');
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'countdown/countdown.css';
    document.head.appendChild(link);

    countdownContainer.appendChild(createCountdownElement('days', 'Days'));
    countdownContainer.appendChild(createCountdownElement('hours', 'Hours'));
    countdownContainer.appendChild(createCountdownElement('minutes', 'Minutes'));
    countdownContainer.appendChild(createCountdownElement('seconds', 'Seconds'));
}

function countdown(targetDate) {
    const now = new Date();
    let remainingSeconds = Math.floor((targetDate - now) / 1000);

    if (remainingSeconds <= 0) {
        updateElement("days", 0, "block");
        updateElement("hours", 0, "block");
        updateElement("minutes", 0, "block");
        updateElement("seconds", 0, "block");
        document.querySelector('h1').textContent = "Merry Christmas !!!";
        return;
    }

    const days = Math.floor(remainingSeconds / (60 * 60 * 24));
    remainingSeconds %= (60 * 60 * 24);

    const hours = Math.floor(remainingSeconds / (60 * 60));
    remainingSeconds %= (60 * 60);

    const minutes = Math.floor(remainingSeconds / 60);
    remainingSeconds %= 60;

    const seconds = remainingSeconds;

    updateElement("days", days, "animate", "block");
    updateElement("hours", hours, "animate", "block");
    updateElement("minutes", minutes, "animate", "block");
    updateElement("seconds", seconds, "animate", "block");

    previousValues.days = days;
    previousValues.hours = hours;
    previousValues.minutes = minutes;
    previousValues.seconds = seconds;
}

function updateElement(id, value, animationClass, blockClass) {
    const element = document.getElementById(id);
    const digit1 = Math.floor(value / 10);
    const digit2 = value % 10;

    const digit1Element = element.querySelector(".digit1");
    const digit2Element = element.querySelector(".digit2");

    const previousValue = previousValues[id];
    const previousDigit1 = Math.floor(previousValue / 10);
    const previousDigit2 = previousValue % 10;

    const shouldAnimateDigit1 = previousDigit1 !== digit1;
    const shouldAnimateDigit2 = previousDigit2 !== digit2;

    digit1Element.textContent = digit1;
    digit2Element.textContent = digit2;

    digit1Element.setAttribute('data-previous-digit', previousDigit1);
    digit2Element.setAttribute('data-previous-digit', previousDigit2);

    digit1Element.classList.remove(blockClass);
    digit2Element.classList.remove(blockClass);

    if (shouldAnimateDigit1) {
        void digit1Element.offsetHeight;
        digit1Element.classList.add(blockClass);
        digit1Element.classList.add(animationClass);
    }

    if (shouldAnimateDigit2) {
        void digit2Element.offsetHeight;
        digit2Element.classList.add(blockClass);
        digit2Element.classList.add(animationClass);
    }
}

const targetDate = new Date('December 25, 2024 00:00:00');
initializeCountdown();
countdown(targetDate);

setInterval(() => countdown(targetDate), 1000);
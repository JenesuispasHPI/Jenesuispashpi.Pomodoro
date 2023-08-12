 const timeElement = document.getElementById('time');
        const startBtn = document.getElementById("startBtn");
        const repeatBtn = document.getElementById("repeatBtn");
        const messageElement = document.getElementById('message');
        let minutes = 0;
        let seconds = 0;

function updateTimer() {
    timeElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function showMessage(message) {
    messageElement.textContent = message;
}

function startTimer() {
    startBtn.disabled = true;
    const interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes % 5 === 0) {
                showMessage(getRewardMessage(minutes));
            }
        }
        updateTimer();
        if (minutes === 25) {
            clearInterval(interval);
            showMessage('Vous avez travaillé 25 minutes. Félicitations, vous êtes l\'arbre qui ne ploie pas devant la tâche à abattre !');
        }
    }, 1000);
}


        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
            const secs = (seconds % 60).toString().padStart(2, "0");
            return `${mins}:${secs}`;
        }

function getRewardMessage(minutes) {
    switch (minutes) {
        case 5:
            return 'Vous pouvez y arriver';
        case 10:
            return 'C’est en plantant une graine qu’on sème le succès';
        case 15:
            return 'Vous gérez la fougère !';
        case 20:
            return 'Vous n’en pouvez plus, mais le roseau ne rompt pas face à la tempête';
    }
}


        repeatBtn.addEventListener("click", function () {
            clearInterval(interval);
            time = 0;
            timer.textContent = formatTime(time);
        });

        startBtn.addEventListener("click", function () {
            clearInterval(interval);
            time = 0;
            timer.textContent = formatTime(time);

            interval = setInterval(function () {
                time++;
                timer.textContent = formatTime(time);
                if (time === 5 * 60) {
                    timer.textContent += " - Vous pouvez y arriver !";
                } else if (time === 10 * 60) {
                    timer.textContent += " - C'est en plantant une graine qu'on sème le succès !";
                } else if (time === 15 * 60) {
                    timer.textContent += " - Vous gérez la fougère !";
                } else if (time === 20 * 60) {
                    timer.textContent += " - Vous n'en pouvez plus, mais le roseau de rompt pas face à la tempête !";
                } else if (time === 25 * 60) {
                    timer.textContent += " - Vous avez travaillé 25 minutes. Félicitations, vous êtes l'arbre qui ne ploie pas devant la tâche à abattre !";
                    clearInterval(interval);
                }
            }, 1000);
        });

const timer = document.getElementById("timer");
        const startBtn = document.getElementById("startBtn");
        const repeatBtn = document.getElementById("repeatBtn");
        let time = 0;
        let interval;

        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
            const secs = (seconds % 60).toString().padStart(2, "0");
            return `${mins}:${secs}`;
        }

        startBtn.addEventListener("click", function () {
            clearInterval(interval);
            time = 0;
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

        repeatBtn.addEventListener("click", function () {
            clearInterval(interval);
            time = 0;
            timer.textContent = formatTime(time);
        });

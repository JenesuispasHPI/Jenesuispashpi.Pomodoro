const timeElement = document.getElementById('time');
        const startBtn = document.getElementById('startBtn');
        const repeatBtn = document.getElementById('repeatBtn');
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
            repeatBtn.disabled = true;
            messageElement.textContent = '';
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
                    repeatBtn.disabled = false;
                }
            }, 1000);
        }

        function getRewardMessage(minutes) {
            switch (minutes) {
                case 2:
                    return 'De toute semence naît une racine !';
                case 5:
                    return 'Vous pouvez y arriver !';
                case 7:
                    return 'On dirait bien que ça pousse !';
                case 10:
                    return 'C’est en plantant une graine qu’on sème le succès !';
                case 15:
                    return 'Vous gérez la fougère !';
                case 20:
                    return 'Vous n’en pouvez plus, mais le roseau ne rompt pas face à la tempête !';
            }
        }

        startBtn.addEventListener('click', startTimer);

        repeatBtn.addEventListener('click', function () {
            minutes = 0;
            seconds = 0;
            updateTimer();
            messageElement.textContent = '';
            startBtn.disabled = false;
        });

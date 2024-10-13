let balance = 20; 

        function updateBalance(amount) {
            balance += amount; 
            document.getElementById('balance').innerText = balance; 
        }

        function showResult(message, status) {
            const resultDiv = document.getElementById('result');
            const gameContainer = document.getElementById('game-container');
            resultDiv.innerHTML = message;

            
            resultDiv.classList.remove('win', 'lose', 'tie', 'show');
            gameContainer.style.backgroundColor = '#fff';

            
            resultDiv.classList.add(status, 'show');

            if (status === 'win') {
                gameContainer.style.backgroundColor = '#2ecc71';
            } else if (status === 'lose') {
                gameContainer.style.backgroundColor = '#e74c3c'; 
            }

            setTimeout(() => {
                resultDiv.classList.remove('show');
                gameContainer.style.backgroundColor = '#fff'; 
            }, 4000);
        }

        function submitMove(userChoice) {
            if (balance < 10) {
                showResult("You don't have enough points to play!", 'lose');
                return;
            }

            let randomnumber = Math.floor(Math.random() * 3);
            let computerChoice = ['stone', 'paper', 'scissors'][randomnumber];
            let resultMessage = '';
            let pointsChange = -10;
            let status = '';

            if (userChoice === computerChoice) {
                resultMessage = 'It\'s a tie!';
                pointsChange = 0;
                status = 'tie';
            } else if (
                (userChoice === 'stone' && computerChoice === 'scissors') ||
                (userChoice === 'paper' && computerChoice === 'stone') ||
                (userChoice === 'scissors' && computerChoice === 'paper')
            ) {
                resultMessage = 'You win!';
                pointsChange = 10;
                status = 'win';
            } else {
                resultMessage = 'You lose!';
                status = 'lose';
            }

            updateBalance(pointsChange);
            showResult(`User chose: ${userChoice}<br>Computer chose: ${computerChoice}<br>Result: ${resultMessage}<br>Remaining balance: ${balance} points`, status);
        }

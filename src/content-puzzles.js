// Busca el div con la clase específica
let puzzleBoard = document.querySelector('.puzzle__board.main-board');

// Crea una nueva barra de progreso y un contador de tiempo
let progressBar = document.createElement('div');
let timer = document.createElement('div');

// Establece las clases de Ionic para la barra de progreso y el contador de tiempo
progressBar.classList.add('progress-bar', 'infinite');
timer.classList.add('timer');

// Agrega la barra de progreso y el contador de tiempo al div encontrado
puzzleBoard.appendChild(progressBar);
puzzleBoard.appendChild(timer);

// Crea una variable para almacenar el tiempo transcurrido
let elapsedTime = 0;

// Crea un intervalo para actualizar el contador de tiempo cada segundo
setInterval(() => {
    elapsedTime++;
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;

    // Establece el formato de minutos y segundos en el contador de tiempo
    timer.innerHTML = `${minutes}:${seconds}`;

    // Verifica si el tiempo transcurrido es menor o igual a 3 minutos
    if (elapsedTime <= 180) {
        timer.style.color = 'green';
    }
    // Verifica si el tiempo transcurrido es mayor a 3 minutos y menor o igual a 5 minutos
    else if (elapsedTime > 180 && elapsedTime <= 300) {
        timer.style.color = 'orange';
    }
    // Verifica si el tiempo transcurrido es mayor a 5 minutos
    else {
        timer.style.color = 'red';
    }
}, 1000);
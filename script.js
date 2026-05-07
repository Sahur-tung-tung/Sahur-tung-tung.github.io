const textElement = document.getElementById('text');
const text = textElement.textContent;
textElement.innerHTML = ''; // Limpa o texto original

// Divide o texto em letras
const letters = text.split('');

letters.forEach((letter, index) => {
    const span = document.createElement('span');
    
    // Tratamento para espaços
    span.textContent = letter === ' ' ? '\u00A0' : letter;
    
    // Define o atraso baseado no índice da letra
    span.style.animationDelay = `${index * 0.1}s`;
    
    textElement.appendChild(span);
});




 function tocarAudio() {
            // 3. Seleciona o elemento de áudio e dá play
            var audio = document.getElementById("meuAudio");
            audio.play();
        }


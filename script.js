function procesarPregunta() {
    const userInput = document.getElementById('user-input').value;
    const responseDiv = document.getElementById('response');
    
    // Aquí iría la lógica para interactuar con tu IA
    responseDiv.innerHTML = `Respuesta a "${userInput}": <em>(Respuesta simulada de la IA)</em>`;
}

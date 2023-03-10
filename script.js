function calculateIMC(event) {
    event.preventDefault();
    let userName = document.getElementById('name').value;
    let userWeight = Number(document.getElementById('weight').value.replace(',', '.'));
    let userHeight = Number(document.getElementById('height').value.replace(',', '.'));
    let imcResultInput = document.getElementById('imc-result');
    let imcResult = userWeight / (userHeight ** 2);
    let message = `Olá, ${userName}. O seu IMC é de ${imcResult.toFixed(2)}`;

    let isValidNumbers = Number.isFinite(userHeight) && Number.isFinite(userWeight);

    if (!isValidNumbers) return alert('Digite valores válidos para peso e altura');

    imcResultInput.innerHTML = message;

    
}

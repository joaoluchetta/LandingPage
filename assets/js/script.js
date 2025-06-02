// Carregamento da foto direto do instagram
const script = document.createElement('script');
script.async = true;
script.src = "//www.instagram.com/embed.js";
document.body.appendChild(script);

// Validação dos campos do formulário
function validateForm() {
    const name = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    // Validação simples de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !lastName || !email || !message) {
        if (!name) {firstNameError.textContent = "Por favor, preencha o campo de nome.";}
        else {firstNameError.textContent = "";}

        if (!lastName) {lastNameError.textContent = "Por favor, preencha o campo de sobrenome.";}
        else {lastNameError.textContent = "";}

        if (!email) {
            emailError.textContent = "Por favor, preencha o campo de email.";} 
        else if (!emailPattern.test(email)) {
            emailError.textContent = "Por favor, insira um email válido.";}
        else {emailError.textContent = "";}

        if (!message) {
            messageError.textContent = "Por favor, preencha o campo de mensagem.";}
        else {messageError.textContent = "";}

        return false; // Retorna falso se algum campo estiver vazio ou inválido
    }
    else {
        firstNameError.textContent = "";
        lastNameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
    }

    return true;
}

// Envio do formulário
function submitForm(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    if (validateForm()) {
        const name = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        var blob = new Blob([`Nome: ${name}\nSobrenome: ${lastName}\nEmail: ${email}\nMensagem: ${message}`], { type: 'text/plain: charset=utf-8' });

        saveAs(blob, 'formulario.txt'); // Salva o conteúdo do formulário em um arquivo .txt
        alert('Formulário enviado com sucesso!');
        document.getElementById('contact-form').reset(); // Limpa o formulário após o envio
    }
}
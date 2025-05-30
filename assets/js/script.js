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

    if (!name) {
        firstNameError.textContent = "Por favor, preencha o campo de nome.";
        return false;
    } else if (!lastName) {
        lastNameError.textContent = "Por favor, preencha o campo de sobrenome.";
        return false;
    } else if (!email) {
        emailError.textContent = "Por favor, preencha o campo de email.";
        return false;
    } else if (!message) {
        messageError.textContent = "Por favor, preencha o campo de mensagem.";
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Por favor, insira um email válido.";
        return false;
    } else {
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
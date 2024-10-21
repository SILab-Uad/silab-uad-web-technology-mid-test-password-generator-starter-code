// TODO: Implement the password generation logic based on user input
const getRandomChar = (charset) => {
    const randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
};

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let availableChars = '';
    let password = '';

    // TODO: Create a variable for the character set based on selected options
    if (options.includeUppercase) availableChars += uppercase;
    if (options.includeLowercase) availableChars += lowercase;
    if (options.includeNumbers) availableChars += numbers;
    if (options.includeSpecialChars) availableChars += specialChars;

    if (!availableChars.length) {
        return "Pilih minimal satu kriteria!";
    }

    // TODO: Generate the password based on the selected criteria
    for (let i = 0; i < length; i++) {
        password += getRandomChar(availableChars);
    }

    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);

    if (isNaN(length) || length < 8 || length > 128) {
        alert("Panjang password harus antara 8 hingga 128 karakter.");
        return;
    }

    const options = {
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked,
    };
    
    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').value = password;
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const password = document.getElementById('passwordOutput').value;
    if (password) {
        copyToClipboard(password);
    } else {
        alert('Tidak ada password untuk disalin.');
    }
});

// BONUS: Implement the copy to clipboard functionality
const copyToClipboard = (text) => {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Password disalin ke clipboard!');
};

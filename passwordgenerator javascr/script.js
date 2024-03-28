document.addEventListener('DOMContentLoaded', function() {
    const passwordDisplay = document.getElementById(`password-display`);
    const generateBtn = document.getElementById(`generate-btn`);
    const lengthInput = document.getElementById(`password-length`);
    const uppercaseInput = document.getElementById(`uppercase`);
    const lowercaseInput = document.getElementById(`lowercase`);
    const numbersInput = document.getElementById(`numbers`);
    const symbolsInput = document.getElementById(`symbols`);
    const lengthOutput = document.getElementById(`length-output`);

    generateBtn.addEventListener("click", generatePassword);
    lengthInput.addEventListener("input", updateLengthOutput);

    function generatePassword() {
        const length = lengthInput.value;
        const includeUppercase = uppercaseInput.checked;
        const includeLowercase = lowercaseInput.checked;
        const includeNumbers = numbersInput.checked;
        const includeSymbols = symbolsInput.checked;

        const uppercaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
        const lowercaseChars = `abcdefghijklmnopqrstuvwxyz`;
        const numberChars = `0123456789`;
        const symbolChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

        let allChars = ``;
        if (includeUppercase) allChars += uppercaseChars;
        if (includeLowercase) allChars += lowercaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSymbols) allChars += symbolChars;

        let password = ``;
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }

        passwordDisplay.textContent = password;
    }

    function updateLengthOutput() {
        lengthOutput.textContent = lengthInput.value;
    }
});

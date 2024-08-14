document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const resultText = document.getElementById('resultText');
    const resultSection = document.getElementById('resultSection');
    const warning = document.getElementById('warning');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');

    encryptBtn.addEventListener('click', encrypt);
    decryptBtn.addEventListener('click', decrypt);

    function showWarning() {
        warning.style.display = 'block';
    }

    function hideWarning() {
        warning.style.display = 'none';
    }

    function isValidInput(text) {
        const regex = /^[a-z\s]+$/;
        return regex.test(text);
    }

    function encrypt() {
        const input = inputText.value;
        if (!isValidInput(input)) {
            showWarning();
            return;
        }
        hideWarning();
        const encryptedText = input
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        resultText.value = encryptedText;
        resultSection.style.display = 'block';
    }

    function decrypt() {
        const input = inputText.value;
        if (!isValidInput(input)) {
            showWarning();
            return;
        }
        hideWarning();
        const decryptedText = input
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        resultText.value = decryptedText;
        resultSection.style.display = 'block';
    }
});

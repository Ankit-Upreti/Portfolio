document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Welcome to my world!", "Designing Digital Masterpieces!", "Designing Tomorrow's Web!"];
    const typedTextElement = document.getElementById("typed-text");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = texts[textIndex];
        if (!isDeleting && charIndex < currentText.length) {
            // Typing
            typedTextElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Adjust typing speed
        } else if (isDeleting && charIndex > 0) {
            // Deleting
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeText, 50); // Adjust deleting speed
        } else if (charIndex === currentText.length) {
            // Pause before deleting
            setTimeout(() => isDeleting = true, 1000);
            setTimeout(typeText, 1000);
        } else if (charIndex === 0) {
            // Move to next text and restart typing
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Loop back to the first text after the last one
            setTimeout(typeText, 500);
        }
    }

    typeText();
});

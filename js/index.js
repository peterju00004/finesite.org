document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll('.shifting-text');
    
    textElements.forEach(textElement => {
        let textContent = textElement.textContent.replace(/\s+/g, '');

        const shiftText = () => {
            textContent = textContent.slice(2) + textContent.slice(0, 2);
            textElement.textContent = textContent;
            const randomInterval = Math.floor(Math.random() * 3000) + 1000;
            setTimeout(shiftText, randomInterval);
        }
    
        shiftText();
    })
});
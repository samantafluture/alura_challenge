export const changeColor = () => {

    const colorInput = document.querySelector('[data-form-color]');
    const codeCard = document.querySelector('[data-card-code]');

    colorInput.addEventListener('change', (e) => {
        let color = e.target.value; 
        codeCard.style.backgroundColor = color; 
    });
    
};

changeColor();
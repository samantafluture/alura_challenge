export const changeColor = () => {

    const colorInput = document.querySelector('[data-form-color]');
    // const colorChange = document.getElementsByClassName('input--color');
    const codeCard = document.querySelector('[data-card-code]');

    document.addEventListener('change', (e) => {
        if (e.target.hasAttribute('data-form-color')) {
            let color = e.target.value; 
            codeCard.style.backgroundColor = color; 
        } 
    });
    
};

changeColor();
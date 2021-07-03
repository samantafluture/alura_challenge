export const changeColor = () => {

    const colorInput = document.querySelector('[data-form-color]');
<<<<<<< HEAD
    // const colorChange = document.getElementsByClassName('input--color');
    const codeCard = document.querySelector('[data-card-code]');

    document.addEventListener('change', (e) => {
        if (e.target.hasAttribute('data-form-color')) {
            let color = e.target.value; 
            codeCard.style.backgroundColor = color; 
        } 
=======
    const codeCard = document.querySelector('[data-card-code]');

    colorInput.addEventListener('change', (e) => {
        let color = e.target.value; 
        codeCard.style.backgroundColor = color; 
>>>>>>> 82f4e06fc1f6b979b568710fa3676bb4037967e9
    });
    
};

changeColor();
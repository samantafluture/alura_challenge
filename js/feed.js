/* Declarations */

const heartBtns = document.querySelectorAll(".icon--heart");

/* Show liked heart button on click */
/* Show number of likes on click */

function liked(){    
    heartBtns.forEach(heartBtn => {
        heartBtn.addEventListener('click', (e) => {
            heartBtn.classList.add("icon--heart-liked");
            e.target.nextElementSibling.value++;
        });
    });
};

/* Render */

liked();
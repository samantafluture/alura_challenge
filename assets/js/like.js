const btns = document.querySelectorAll('.icon--heart');
let likes = [];
let count = 0;

btns.forEach(btn => {
    btn.addEventListener('click', function(e){

        e.target.nextElementSibling.value++;
        e.target.classList.add('icon--heart-liked');

        const like = {
            id: Date.now(),
            counter: count += 1 
        };

        likes.push(like);

        // localStorage.setItem('likes', JSON.stringify(likes));
        //  localStorage.getItem('likes', JSON.parse(likes));


    });
});    

// localStorage.getItem('likes', JSON.parse(likes));
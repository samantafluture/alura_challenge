/* Social actions */

(function() {

    // Create the event handler on the document ready event, as we know then that the DOM document that was initially loaded will be rendered about now.
    document.addEventListener('DOMContentLoaded', function() {
        
        const heartBtns = document.querySelectorAll(".icon--heart");
        const commentBtns = document.querySelectorAll(".icon--comment");

        const commentForm = document.querySelectorAll('.form--comment');
        const commentInput = document.querySelectorAll('.input--comment')
        const commentBtn = document.querySelectorAll('.button--comment');
        const commentBox = document.querySelectorAll('.comment-box');
        let comments = [];

        /* Show liked heart button on click */
        /* Show number of likes on click */
        heartBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                btn.classList.add("icon--heart-liked"); // add style (red heart)
                e.target.nextElementSibling.value++; // increment number of likes
            });
        });

        /* Show comment form and comment box */
        commentBtns.forEach(function(btn, x) {

            // Bind the click handler
            btn.addEventListener('click', function(e) {
               // e.target.nextElementSibling.value++; // increment number of comments
                e.target.parentNode.parentNode.nextElementSibling.innerHTML = `
                        <form method="get" class="form form--comment" action="#comment-box">
                            <textarea class="input input--comment"placeholder="Digite seu comentário"></textarea>
                            <button type="submit" class="button button--outlined button--comment">Comentar</button>
                        </form>
                        <hr class="separator">
                        <h2 class="comment-box__title title--sb">Comentários</h2>
                        <ul class="comment-box" id="comment-box">
                            <li class="comment-box__item item">
                                <span class="comment-box__icon icon"></span>
                                <p>Este é um comentário teste!</p>
                            <li>
                        </ul>
                        <div class="comment-box__close"></div>`;          
                e.target.parentNode.parentNode.nextElementSibling.removeAttribute('id', 'hidden')                
            });
        });

        /* Hide comment form and comment box */
        document.body.addEventListener('click', function(e){
            if (e.target.className == 'comment-box__close'){
               //console.log("achei!");
               e.target.parentNode.setAttribute('id', 'hidden');
            };
        });

         /* Submit comment */
        document.body.addEventListener('submit', function(e){
            console.log("comentei");
                
            let comment = e.target.children[0];
            console.log(comment.value);

            if (comment.value !== '') {

                const cmt = {
                    content: comment.value,
                    counter: 0 
                };
                
                comments.push(cmt);
                console.log(cmt);
                console.log(comments);
                comment.value = '';

                comments.forEach(function(cmt) {
                    cmt.counter =+ 1;

                    e.target.parentNode.children[3].innerHTML = 
                        `<li class="comment-box__item item">
                            <span class="comment-box__icon icon"></span>
                            <p>${cmt.content}</p>
                        <li>`;
                    

                    e.target.parentNode.parentNode.children[1].children[0].innerHTML = 
                        `<span class="icon icon--comment"></span>
                        <p>${cmt.counter}</p>`;
                });        
            };
        

        });

        
      

    });
  })();

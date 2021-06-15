/* Social actions */

(function() {

    // Create the event handler on the document ready event, as we know then that the DOM document that was initially loaded will be rendered about now.
    document.addEventListener('DOMContentLoaded', function() {
        
        const heartBtns = document.querySelectorAll(".icon--heart");
        const commentBtns = document.querySelectorAll(".icon--comment");

        let likes = [];
        let comments = [];

        /* Show liked heart button on click */
        /* Show number of likes on click */
        heartBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                btn.classList.add("icon--heart-liked"); // add style (red heart)
                e.target.nextElementSibling.value++; // increment number of likes

                localStorage.setItem('likes', JSON.stringify(likes));
            });
        });

        /* Show comment form and comment box */
        commentBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
               // e.target.nextElementSibling.value++; // increment number of comments
                e.target.parentNode.parentNode.nextElementSibling.innerHTML = `
                        <form method="get" class="form form--comment" action="#comment-box">
                            <textarea class="input input--comment"placeholder="Digite seu comentário"></textarea>
                            <button type="submit" class="button button--outlined button--comment">Comentar</button>
                        </form>
                        <hr class="separator">
                        <h2 class="comment-box__title title--sb">Comentários</h2>
                        <ul class="comment-box" id="comment-box" id="coment-box">
                        </ul>
                        <div class="comment-box__close"></div>`;          
                e.target.parentNode.parentNode.nextElementSibling.removeAttribute('id', 'hidden') ;               
            });
        });

        /* Hide comment form and comment box */
        document.body.addEventListener('click', function(e){
            if (e.target.className == 'comment-box__close'){
                e.target.parentNode.setAttribute('id', 'hidden');
            };
        });

         /* Submit comment and increment number of comments */
        document.body.addEventListener('submit', function(e){

            let comment = e.target.children[0];

            if (comment.value !== '') {

                const cmt = {
                    content: comment.value,
                    counter: 0 
                };
                
                comments.push(cmt);
                console.log(cmt);
                console.log(comments);
                comment.value = '';

                const li = document.createElement('li');
                li.classList.add('comment-box__item', 'item');

                li.innerHTML = `<span class="comment-box__icon icon"></span>
                                        <p>${cmt.content}</p>`;
                    
                e.target.parentNode.children[3].append(li);
                e.target.parentNode.parentNode.children[1].children[0].children[1].value++;

            };    

        });

    });
  })();

export const createProject = (() => {

    const form = document.querySelector('[data-form]');
    const feed = document.querySelector('[data-projects]');

    const codeInput = document.querySelector('[data-form-code]');
    const titleInput = document.querySelector('[data-form-title]');
    const descriptionInput = document.querySelector('[data-form-description]');
    const languageInput = document.querySelector('[data-form-language]');
    const colorInput = document.querySelector('[data-form-color]');

    let posts = [];

    if(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            addPost(codeInput.innerText, titleInput.value, descriptionInput.value, languageInput.value, colorInput.value); 
            redirect();
        }); 
    };

    function addPost() {
        if (codeInput.innerText !== '') {
            const post = {
                id: Date.now(),
                code: codeInput.innerText,
                name: titleInput.value,
                desc: descriptionInput.value,
                language: languageInput.value,
                color: colorInput.value,
            };
        
            posts.unshift(post);
            addToLocalStorage(posts); // 
            clear();
        };
    };

    function clear() {
        codeInput.innerText = '';
        titleInput.value = '';
        descriptionInput.value = '';
        languageInput.value = 'javascript';
        colorInput.value = '#6BD1FF';
    };

    function redirect() {
        window.location.href="feed.html";
    };

    function renderPosts(posts) {
        if(feed) {
            feed.innerHTML = '';
<<<<<<< HEAD
=======
        
>>>>>>> 82f4e06fc1f6b979b568710fa3676bb4037967e9
            posts.forEach(function(post) {  
                const div = document.createElement('div');
                div.classList.add('post', 'container');
                div.setAttribute('data-key', post.id);
                div.innerHTML = `
                <div class="post__wrapper"> 
                    <div class="post__code code-card" style="background-color:${post.color};">
                        <div class="code-card__buttons"></div>
                        <pre><code class="code-card__input hljs ${post.language} post__code-input" contenteditable="false">${post.code}</code></pre>
                    </div> 
                    <div class="post__card">
                        <article class="card__content">
                            <h2 class="card__title title">${post.name}</h2>
                            <p class="card__text">${post.desc}</p>
<<<<<<< HEAD
                            <p class="card__language">${post.language}</p>
=======
>>>>>>> 82f4e06fc1f6b979b568710fa3676bb4037967e9
                        </article>
                        <ul class="card__social list">
                            <li class="item item--social">
                                <span class="icon icon--comment"></span>
                                <input class="input input--counter" type="number" value="0" disabled>
                            </li>
                            <li class="item item--social">
                                <span class="icon icon--heart"></span>
                                <input class="input input--counter" type="number" value="0" disabled>
                            </li>
                            <li class="item item--social">
                                <span class="icon icon--remove" data-btn-remove></span>
                            </li>
                            <li class="item user">
                                <div class="user__wrapper">
                                    <span class="icon icon--user"></span>
                                    <p>@Samanta</p>
                                </div>
                            </li>
                        </ul>
                        <div class="card__comment list">
                        </div>
                    </div>
                    </div>`;
                feed.append(div);
            });
        };
    };

    function addToLocalStorage(posts) {
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts(posts);
    };

    function getFromLocalStorage() {
        const reference = localStorage.getItem('posts');
        if (reference) {
            posts = JSON.parse(reference);
            renderPosts(posts);
            return posts;
        };
    };
    
    getFromLocalStorage();
    
    document.addEventListener('click', function(event) {
        if (event.target.hasAttribute('data-btn-remove')) {
            removePost(event.target.parentElement.getAttribute('data-key'));
        };
    });

    function removePost(id) {
        posts.splice(id, 1);
        addToLocalStorage(posts);
        hljs.highlightAll();
    };

})();

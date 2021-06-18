/* Save data from the project and show on feed */

// select everything

// select the form
const form = document.querySelector('.form');
// select the inputs
const codeInput = document.querySelector('code');
const nameInput = document.querySelector('.input--title');
const descInput = document.querySelector('.input--description');
const langInput = document.querySelector('.input--language');
const colorInput = document.querySelector('.input--color');
const feed = document.querySelector('.feed');

// array which stores every post
let posts = [];

// add an eventListener on form, and listen for submit event
if(form) {
    form.addEventListener('submit', function(event) {
        // prevent the page from reloading when submitting the form
        event.preventDefault();
        
        // call addPost function with input box current value
        addPost(codeInput.innerText, nameInput.value, descInput.value, langInput.value, colorInput.value); 

        // call redirect
        redirect();

    }); 
};


// function to add post
function addPost() {
    // if item is not empty
    if (codeInput.innerText !== '') {
        // make a post object, which has code, name, desc, lang and color properties
        const post = {
            code: codeInput.innerText,
            name: nameInput.value,
            desc: descInput.value,
            language: langInput.value,
            color: colorInput.value,
        };

    // then add it to todos array and clear fields
    // posts.push(post);
    posts.unshift(post);
    addToLocalStorage(posts); // 
    clear();
    };
  };

// finally clear the input box value
function clear() {
    codeInput.innerText = '';
    nameInput.value = '';
    descInput.value = '';
    langInput.value = 'javascript';
    colorInput.value = '#6BD1FF';
  //  document.getElementById('bgColor').style.backgroundColor = "#6BD1FF";
};

// redirect user to the feed
function redirect() {
    window.location.href="feed.html";
};

// function to render given posts to screen
function renderPosts(posts) {
    // clear everything inside <div> with class=feed
    if(feed) {

        feed.innerHTML = '';
    
        // run through each item inside todos
        posts.forEach(function(post) {  

            const div = document.createElement('div');
            div.classList.add('post', 'container');
            
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

            // finally add the <section> to the feed
            feed.append(div);
        });
    };
};

// function to add todos to local storage
function addToLocalStorage(posts) {
    // conver the array to string then store it.
    localStorage.setItem('posts', JSON.stringify(posts));
    // render them to screen
    renderPosts(posts);
  };


// function helps to get everything from local storage
function getFromLocalStorage() {
    const reference = localStorage.getItem('posts');
    // if reference exists
    if (reference) {
      // converts back to array and store it in todos array
      posts = JSON.parse(reference);
      renderPosts(posts);
    };
  };
  
  // initially get everything from localStorage
  getFromLocalStorage();


/* Declarations */

const w = window.innerWidth;
const menu = document.querySelector(".menu");

/* Change menu if window size is desktop */

function changeMenu(){
    if (w >= 1024) { 
        menu.classList.add("site__menu", "menu--sidebar");
        menu.innerHTML = 
            `<ul class="list">
                <h2 for="" class="title--sb form__title">Menu</h2>
                    <a href="index.html">
                        <li class="item item--menu">
                            <span class="icon icon--editor"></span>
                            <p>Editor de código</p>
                        </li>
                    </a>
                    <a href="feed.html">
                        <li class="item item--menu">
                            <span class="icon icon--users"></span>
                            <p>Comunidade</p>
                        </li>
                    </a>
                </ul>`;
    };
};

/* Render */

changeMenu();

/* Check for resizing the window */

window.addEventListener("resize", () => {
    let newWidth = window.innerWidth;
    if (newWidth >= 1024) {
        location.reload().changeMenu();
    }
});
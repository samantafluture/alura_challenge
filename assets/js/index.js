/* Change background color from .code-card via HTML color picker */

function changeColor(){
    document.getElementById("colorChoice").addEventListener('change', (e) => {
        let color = e.target.value;
        console.log(color);     
        document.getElementById("bgColor").style.backgroundColor = color; 
    });
};

changeColor();

/* Preview code with Highlight.js */

const codeArea = document.querySelector(".code-card");
const language = document.querySelector(".input--language");
const button = document.querySelector(".editor__btn");

function changeLanguage() {
    const code = codeArea.querySelector("code");
    codeArea.innerHTML = 
        `<code class="editor__code code-card__input hljs ${language.value}" contenteditable="true" aria-label="Editor de código" style="white-space:pre-wrap;"></code>`;
    codeArea.firstChild.innerText = code.innerText;
};

language.addEventListener('change', () => {
    changeLanguage();
});

button.addEventListener('click', () => {
    const code = codeArea.querySelector("code");
    hljs.highlightBlock(code);
});

export const changeLanguage = () => {

    const languageInput = document.querySelector('[data-form-language');
    const codeCard = document.querySelector('[data-card-code]');
    const btnHighlight = document.querySelector('[data-card-btn]');

    languageInput.addEventListener('change', () => {
        const code = codeCard.querySelector("code");

        codeCard.innerHTML = 
        `<code class="editor__code code-card__input hljs ${language.value}" contenteditable="true" aria-label="Editor de código" style="white-space:pre-wrap;"></code>`;

        codeCard.firstChild.innerText = code.innerText;
    });
    
    btnHighlight.addEventListener('click', () => {
        const code = codeCard.querySelector("code");
        hljs.highlightBlock(code);
    });

};

changeLanguage();
    

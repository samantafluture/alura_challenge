export const exportProject = (() => {

    const fileName = document.querySelector('[data-export="name"]');
    const fileFormat = document.querySelector('[data-export="format"]');
    const select = document.querySelector('[data-export="format"]');
    const screenshot = document.querySelector('[data-export="screenshot"]');
    const btn = document.querySelector('[data-btn="export"]');

    btn.addEventListener('click', function(e){
        e.preventDefault();

        let file = (fileName.value || 'aluradev') + '.' + fileFormat.value;

        if(fileFormat.value == 'png') {
            let downloadPNG = () => {
                html2canvas(screenshot).then(canvas => {
                    let link = document.createElement('a');
                    link.download = file;
                    link.href = canvas.toDataURL()
                    link.click();
                    link.delete;
                    });
                };
            downloadPNG();
        };

        if(fileFormat.value == 'jpg') {
            let downloadJPG = () => {
                html2canvas(screenshot).then(canvas => {
                    let link = document.createElement('a');
                    link.download = file;
                    link.href = canvas.toDataURL()
                    link.click();
                    link.delete; 
                });
            };
            downloadJPG();
        };

        fileName.value = '';

    });

    function getSelectedOption(select) {
        var opt;
        for ( var i = 0, len = select.options.length; i < len; i++ ) {
            opt = select.options[i];
            if ( opt.selected === true ) {
                break;
            };
        };
        return opt;
    };

    btn.onclick = function () {
        var opt = getSelectedOption(select);
        console.log(opt.value);
    };

})();
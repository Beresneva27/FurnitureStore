const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');
//console.log(infoBtns);

//Click on buttons with prompts
for (let btn of infoBtns) {
    //console.log(btn);
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        this.parentNode.querySelectorAll('.info-hint').classList.toggle('none')
    });
}

//Close Click Tips
document.addEventListener('click', function closeHints () {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
});

//Disable click event bubbling
for (let hint of infoHints) {
    hint.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}


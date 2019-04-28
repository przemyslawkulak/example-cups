function cupClick(evt){
    let level = Number(this.getAttribute('level'));
    level += 19;
    if (level <= 100){
        this.style.backgroundPosition = '0 ' + level + '%';
        this.setAttribute('level', level);
    } else{
        this.style.cursor = 'not-allowed';
    }
}

let cups = document.querySelectorAll('.cup');
cups.forEach( cup => {
cup.addEventListener('click', cupClick)

})

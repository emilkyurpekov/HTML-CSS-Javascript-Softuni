function lockedProfile() {
    let bttns = Array.from(document.getElementsByTagName('button'));
    bttns.forEach((button) =>{
        button.addEventListener('click', moreInfo);
    });
    function moreInfo(event){
        let btn = event.target;
        let profile = btn.parentElement;
        let children = Array.from(profile.children);
        let unlocked = children[4];
        let info = children[9];
        if(!unlocked.checked){
            return;
        }
        if(btn.textContent = 'Show More'){
            info.style.display = 'block'
            btn.textContent = 'Hide it';
        }
    }
}
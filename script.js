
let landingPages = [];
let login = [];
let projectSection = document.getElementById("project-section");


    

function show(type) {
    for (let i = 0 ; i < projectSection.children.length ; i++) {
        child = projectSection.children[i];
        if(type == 'page') {
            if(child.className.includes('landing-page')) {
                child.style.display = 'flex';
            } else {child.style.display = 'none';}
        } else if (type == 'login') {
            if(child.className.includes('login')) {
                child.style.display = 'flex';
            } else {child.style.display = 'none';}
        } else {
            child.style.display = 'flex';
        }
    }
}
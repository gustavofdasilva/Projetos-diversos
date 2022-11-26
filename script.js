
let landingPages = [];
let login = [];
let projectSection = document.getElementById("project-section");

    

function show(type) {
    for (let i = 0 ; i < projectSection.children.length ; i++) {
        child = projectSection.children[i];
        if(type == 'page') {
            document.getElementById('page').style.background = "rgb(100,10,100)";
                document.getElementById('login').style.background = "none";
                document.getElementById('all').style.background = "none";
            if(child.className.includes('landing-page')) {
                child.style.display = 'flex';
            } else {child.style.display = 'none';}
        } else if (type == 'login') {
            document.getElementById('login').style.background = "rgb(100,10,100)";
                document.getElementById('page').style.background = "none";
                document.getElementById('all').style.background = "none";
            projectSection.children[i];
            if(child.className.includes('login')) {
                child.style.display = 'flex';
            } else {child.style.display = 'none';}
        } else {
            document.getElementById('all').style.background = "rgb(100,10,100)";
                document.getElementById('page').style.background = "none";
                document.getElementById('login').style.background = "none";
            projectSection.children[i];
            child.style.display = 'flex';
        }
    }
}
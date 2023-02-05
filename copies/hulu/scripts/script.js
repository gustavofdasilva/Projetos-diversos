let LiveSports = document.getElementById("live-sports");
let BNews = document.getElementById("breaking-news");
let BigEvent = document.getElementById("biggest-events");
let line = document.getElementById("line");
let title = document.querySelector("div.slides>section>h2");
let p = document.querySelector("div.slides>section>p");
let logo1 = document.getElementById("lo1");
let logo2 = document.getElementById("lo2");
let logo3 = document.getElementById("lo3");
let logo4 = document.getElementById("lo4");
let slides = document.getElementById("slides");
let dropdown = document.querySelectorAll("footer ul");
let buttonDropdown = document.querySelectorAll("footer button");
let imgDropdown = document.querySelectorAll("footer button img");


line.style.setProperty("left",LiveSports.getBoundingClientRect().left+"px");
line.style.setProperty("width", LiveSports.getBoundingClientRect().right - LiveSports.getBoundingClientRect().left + "px");


function changeSlide(id) {
    if(id == "live-sports") {
        line.style.setProperty("left",LiveSports.getBoundingClientRect().left+"px");
        line.style.setProperty("width", LiveSports.getBoundingClientRect().right - LiveSports.getBoundingClientRect().left + "px");
        title.innerHTML = (`Live Sports`);
        p.innerHTML = 
        (`Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.
        `)
        slides.style.setProperty('background',"#00000056 url(./images/Backgrounds/live-sports.jfif");

        setBackground(slides,"#00000056","url(./images/Backgrounds/live-sports.jfif)","100%","auto");
    
        setBackground(logo1,"#FFFFFF","url(./images/logos/live-sports/CBS.png)","contain","10%");
        setBackground(logo2,"#FFFFFF","url(./images/logos/live-sports/ESPN.png)","contain","10%");
        setBackground(logo3,"#FFFFFF","url(./images/logos/live-sports/Fox.svg)","contain","10%");
        setBackground(logo4,"#FFFFFF","url(./images/logos/live-sports/NFL.png)","contain","10%");
        LiveSports.style.setProperty("color", "#ffffff");
        BNews.style.setProperty("color", "#ffffff80");
        BigEvent.style.setProperty("color", "#ffffff80");
    } else if(id == "breaking-news") {
        line.style.setProperty("left","0")
        line.style.setProperty("left",BNews.getBoundingClientRect().left+"px");
        line.style.setProperty("width",BNews.getBoundingClientRect().right - BNews.getBoundingClientRect().left + "px")
        title.innerHTML = (`Breaking News`)
        p.innerHTML = 
        (`Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.
        `)
        slides.style.setProperty('background',"#00000056 url(./images/Backgrounds/breaking-news.jfif");

        setBackground(slides,"#00000056","url(./images/Backgrounds/breaking-news.jfif)","100%","auto");

        setBackground(logo1,"#FFFFFF","url(./images/logos/breaking-news/abc.png)","contain","10%");
        setBackground(logo2,"#FFFFFF","url(./images/logos/breaking-news/CNN.svg)","contain","10%");
        setBackground(logo3,"#FFFFFF","url(./images/logos/breaking-news/msnbc.png)","contain","10%");
        setBackground(logo4,"#FFFFFF","url(./images/logos/breaking-news/foxnews.svg)","contain","10%");

        LiveSports.style.setProperty("color", "#ffffff80");
        BNews.style.setProperty("color", "#ffffff");
        BigEvent.style.setProperty("color", "#ffffff80");
    } else{
        line.style.setProperty("left",BigEvent.getBoundingClientRect().left+"px");
        line.style.setProperty("width", BigEvent.getBoundingClientRect().right - BigEvent.getBoundingClientRect().left + "px")
        title.innerHTML = (`Biggest Events`)
        p.innerHTML = 
        (`Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.
        `)
        
        setBackground(slides,"#00000056","url(./images/Backgrounds/biggest-events.jfif)","100%","auto");
        
        setBackground(logo1,"#FFFFFF","url(./images/logos/biggest-events/1.png)","contain","10%");
        setBackground(logo2,"#FFFFFF","url(./images/logos/biggest-events/golden.png)","contain","10%");
        setBackground(logo3,"#FFFFFF","url(./images/logos/biggest-events/grammy.png)","contain","10%");
        setBackground(logo4,"#FFFFFF","url(./images/logos/biggest-events/oscars.png)","contain","10%");

        LiveSports.style.setProperty("color", "#ffffff80");
        BNews.style.setProperty("color", "#ffffff80");
        BigEvent.style.setProperty("color", "#ffffff");
    }
}

function setBackground(element, color, url, size, position) {
    element.style.setProperty("background",url+","+color);
    element.style.setProperty("background-size",size);
    element.style.setProperty("background-position",position);
    element.style.setProperty("background-repeat","no-repeat");
}

function footerDropMenu(type) {
    /*for (let i = 0 ; i < dropdown.length ; i++) {
        dropdown[i].style.setProperty("display","none");
    }*/
    if(type == "browse") {
        for (let i = 0 ; i < dropdown.length ; i++) {
            if(dropdown[i].className == "browse" && dropdown[i].style.display == "block") {
                dropdown[i].style.setProperty("display","none");
                for (let i = 0 ; i < imgDropdown.length ; i++) {
                    if(imgDropdown[i].className == "browse") {
                        imgDropdown[i].style.setProperty("transform","rotate(0deg)")
                    }
                }
            } else if (dropdown[i].className == "browse") {
                dropdown[i].style.setProperty("display","block");
                for (let i = 0 ; i < imgDropdown.length ; i++) {
                    if(imgDropdown[i].className == "browse") {
                        imgDropdown[i].style.setProperty("transform","rotate(180deg)")
                    }
                }
            }
        }
    }

    if(type == "help") {
        for (let i = 0 ; i < dropdown.length ; i++) {
            if(dropdown[i].className == "help" && dropdown[i].style.display == "block") {
                dropdown[i].style.setProperty("display","none");
                for (let i = 0 ; i < imgDropdown.length ; i++) {
                    if(imgDropdown[i].className == "help") {
                        imgDropdown[i].style.setProperty("transform","rotate(0deg)")
                    }
                }
            } else if (dropdown[i].className == "help") {
                dropdown[i].style.setProperty("display","block");
                for (let i = 0 ; i < imgDropdown.length ; i++) {
                    if(imgDropdown[i].className == "help") {
                        imgDropdown[i].style.setProperty("transform","rotate(180deg)")
                    }
                }
            }
        }
    }

    if(type == "aboutus") {
        for (let i = 0 ; i < dropdown.length ; i++) {
            if(dropdown[i].className == "aboutus" && dropdown[i].style.display == "block") {
                dropdown[i].style.setProperty("display","none");
                for (let i = 0 ; i < imgDropdown.length ; i++) {
                    if(imgDropdown[i].className == "aboutus") {
                        imgDropdown[i].style.setProperty("transform","rotate(0deg)")
                    }
                }
            } else if (dropdown[i].className == "aboutus") {
                dropdown[i].style.setProperty("display","block");
                for (let i = 0 ; i < imgDropdown.length ; i++) {
                    if(imgDropdown[i].className == "aboutus") {
                        imgDropdown[i].style.setProperty("transform","rotate(180deg)")
                    }
                }
            }
        }
    }
}
let LiveSports = document.getElementById("live-sports");
let BNews = document.getElementById("breaking-news");
let BigEvent = document.getElementById("biggest-events");
let line = document.getElementById("line");
let title = document.querySelector("div.slides>section>h2");
let p = document.querySelector("div.slides>section>p");
let bgImage = document.querySelector("div.slides>img");
let logo1 = document.getElementById("lo1");
let logo2 = document.getElementById("lo2");
let logo3 = document.getElementById("lo3");
let logo4 = document.getElementById("lo4");

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
        bgImage.src = "images/Backgrounds/live-sports.jfif"
        logo1.style.background = "url(./images/logos/live-sports/CBS.png) no-repeat";
        logo2.style.background = "url(./images/logos/live-sports/ESPN.png) no-repeat";
        logo3.style.background = "url(./images/logos/live-sports/Fox.svg) no-repeat";
        logo4.style.background = "url(./images/logos/live-sports/NFL.png) no-repeat";

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
        bgImage.src = "images/Backgrounds/breaking-news.jfif"
        logo1.style.background = "url(./images/logos/breaking-news/abc.png) no-repeat";
        logo2.style.background = "url(./images/logos/breaking-news/CNN.svg) no-repeat";
        logo3.style.background = "url(./images/logos/breaking-news/msnbc.png) no-repeat";
        logo4.style.background = "url(./images/logos/breaking-news/foxnews.svg) no-repeat";

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
        bgImage.src = "images/Backgrounds/biggest-events.jfif"
        logo1.style.background = "url(./images/logos/biggest-events/1.png) no-repeat";
        logo2.style.background = "url(./images/logos/biggest-events/golden.png) no-repeat";
        logo3.style.background = "url(./images/logos/biggest-events/grammy.png) no-repeat";
        logo4.style.background = "url(./images/logos/biggest-events/oscars.png) no-repeat";

        LiveSports.style.setProperty("color", "#ffffff80");
        BNews.style.setProperty("color", "#ffffff80");
        BigEvent.style.setProperty("color", "#ffffff");
    }
}
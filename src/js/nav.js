window.addEventListener("scroll", function () {
    var scrollingElement = (function () {
        return document.scrollingElement || document.documentElement;
    })();
    var scrollPosition = scrollingElement.scrollTop;
    var navElement = document.getElementsByTagName("nav")[0];
    var imgElement = document.getElementById("velo-mini");
    var imgMobileElement = document.getElementById("velo-mobile-mini");
    var mobileNav = document.getElementById("mobile-nav");
    var hamburgerLines = document.querySelectorAll("#hamburger-container > path");
    console.log(hamburgerLines);
    // console.log(scrollPosition);
    if (scrollPosition > 72) {
        imgElement.setAttribute("class", "img-fixed h-16 w-24 pl-8 py-4");
        imgMobileElement.setAttribute("class", "img-fixed h-16 w-24 pl-8 py-4");
        navElement.setAttribute("class", "nav-fixed");
        mobileNav.setAttribute("class", "block lg:hidden p-4 mb-16 hamburger-fixed overflow-x-hidden");
        hamburgerLines.forEach((path) => {
            path.setAttribute("stroke", "#000");
        })
    }
    else {
        imgElement.setAttribute("class", "img-static h-16 w-24 pl-8 py-4");
        imgMobileElement.setAttribute("class", "img-static h-16 w-24 pl-8 py-4");
        navElement.setAttribute("class", "nav-static");
        mobileNav.setAttribute("class", "block lg:hidden p-4 mb-16 hamburger-static overflow-x-hidden");
        hamburgerLines.forEach((path) => {
            path.setAttribute("stroke", "#FFF");
        })
    }
});

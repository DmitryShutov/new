window.onload = function () {
    var hamburger = document.querySelector('.lineWrap');
    var navigation = document.querySelector('.nav');
    hamburger.addEventListener('click', function () {
       navigation.classList.toggle("openMenu");
       hamburger.classList.toggle("closeButton");     
    });
    
    
}
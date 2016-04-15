window.onload = function () {
    var hamburger = document.querySelector('.lineWrap');
    var navigation = document.querySelector('.nav');
    var form = document.querySelector('.slider_form')
    hamburger.addEventListener('click', function () {
       navigation.classList.toggle("openMenu");
       hamburger.classList.toggle("closeButton");
       form.classList.toggle("push_form");  
    });
    
    
}
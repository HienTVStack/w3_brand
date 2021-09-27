
var iconMenu = document.getElementById('iconMenu');
var menu = document.getElementById('menu');
menu.style.maxHeight = "0px";
function showMenu(){
    //document.getElementById('menu').style.display = 'block';
    if(menu.style.maxHeight == "0px"){
        menu.style.display = "block";
        menu.style.maxHeight = "300px"; 
        menu.style.height = "250px";       
    }
    else {
        menu.style.maxHeight = "0px";
        menu.style.display = "none";
    }
}

var buyBtns = document.querySelectorAll('.js__buy-tickers');
var model = document.querySelector('.js-model');
var closeBtn = document.querySelector('.js-model-close');
var modelContainer = document.querySelector('.js-model-container');

function showBuyTickers(){
    model.classList.add('open');
}
function hideBuyTickers(){
    model.classList.remove('open');
}

for (var buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickers);
}

closeBtn.addEventListener('click', hideBuyTickers);
model.addEventListener('click', hideBuyTickers);
modelContainer.addEventListener('click', function(event){
    event.stopPropagation();
})


var menuLinks = document.querySelectorAll('li.heading_item a.heading_link[href*="#');
// console.log(menuLinks);
for(var i = 0; i < menuLinks.length; i++) {
    var menuLink = menuLinks[i];

    menuLink.onclick = function() {
        menu.style.height = "0px";
    }
}
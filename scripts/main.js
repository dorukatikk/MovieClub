//hamburger butonu hamburger değerinde saklanır
const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav')
//hamburger butonuna basıldığında is active olmasını sağladık
//bu sayede butona basıldığında animasyon devreye girecek
hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
}
)
//hamburger butonu hamburger değerinde saklanır
const hamburger = document.querySelector('.hamburger');
//hamburger butonuna basıldığında is active olmasını sağladık
//bu sayede butona basıldığında animasyon devreye girecek
hamburger.addEventListener('click', function (){
this.classList.toggle('is-active');
}
)
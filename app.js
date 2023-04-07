function Menu(e){
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}



//THE BELOW CODE IS FOR THE CAROUSEL

currentSlideID = 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;

function next(){
    if(currentSlideID < totalSlides) {
        currentSlideID++;
        showSlide();

    }

}

function prev(){
    if(currentSlideID > 1){
        currentSlideID--;
        showSlide();
    }

}

function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++){
        const element = slides[index];
        if(currentSlideID===index+1){
            element.classList.remove('hidden')
        }else{
            element.classList.add('hidden')
        }
    }

}
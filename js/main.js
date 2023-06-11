



const allStars = document.querySelectorAll('.companies__rating-item');

allStars.forEach((star, i) =>{
  star.onclick = function () {
  
    let current_star_level = i + 1
   
    allStars.forEach((star, j) =>{
    if (current_star_level >= j + 1) {
      star.innerHTML = ` <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.5679L3.59161 13.5676L4.13122 8.75704L0.867076 5.18237L5.60896 4.20902L8 0L10.391 4.20902L15.1329 5.18237L11.8688 8.75704L12.4084 13.5676L8 11.5679Z" fill="#FFB60D"/>
      </svg>`
    }else{
      star.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.5679L3.59161 13.5676L4.13122 8.75704L0.867076 5.18237L5.60896 4.20902L8 0L10.391 4.20902L15.1329 5.18237L11.8688 8.75704L12.4084 13.5676L8 11.5679Z" fill="#FFD36F"/>
      </svg>
      `
    }
    })
  }
})



const formButton = document.querySelector('.companies__form-btn')
console.log(formButton)
const passOne = document.getElementById('fpass')
const passTwo = document.getElementById('fpass2')
console.log(passOne)
const formEmail = document.getElementById('fmail');
const formInputs = document.querySelectorAll('.js-input')

formButton.addEventListener('click', () => {
  formInputs.forEach(function (input) {
    if (input.value === '') {
        input.style.border = '1px solid #FF0000';
formEmail.style.border = '1px solid #D9D9D9'
    } else if( passOne.value === passTwo.value) {
        passOne.style.border = '1px solid #33FF00';
        passTwo.style.border = '1px solid #33FF00';
    }else {
      passOne.style.border = '1px solid #FF0000';
      passTwo.style.border = '1px solid #FF0000';
      
  }
  });
})






const menuBtn = document.querySelector('.header__btn')
const nav = document.querySelector('.header__list')

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('header__list--active')
})



$(".center").slick({
  
  responsive: [
  
    {
      
      breakpoint: 1232,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
        variableWidth: true,
                adaptiveHeight: true,
                centerMode: true,
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  speed: 500,
  mobileFirst: true,
      }
    },
    {
      breakpoint: 2048,
            settings: "unslick"

        
    }
  ]
});









// $('.slider').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 1,
//   responsive: [
//       {
//           breakpoint: 768,
//           settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 3
//           }
//       },
//       {
//       breakpoint: 480,
//       settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 1
//           }
//       }
//   ]
//   });


// $('.price__boxes-wrapper').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });






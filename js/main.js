let gear = document.querySelector(".gear");
let setting = document.querySelector(".setting");

setting.addEventListener("click",(e)=>{
  e.stopPropagation()
})
document.addEventListener('click',(e)=>{
  // console.log( " gear ",gear ,"  setting  ",setting ," target  ",e.target)
  if( !(e.target === gear || e.target === setting) ){
    setting.classList.remove('show')
  }
})

// /////////////////////////// Start setting section ///////////////////////////

// setting event lisner to gear button to toggle the setting section
gear.addEventListener('click',(e)=>{
  e.stopPropagation()
  setting.classList.toggle('show')
})

// ===============> the part of colors <===============

//  see if there is default value for color that user select before if there is one will set it as default
let defultColor = localStorage.getItem('colorsection') ?? false;
let defultHoverColor = localStorage.getItem('hover-colorsection') ?? false;
let colors = document.querySelectorAll('.color-section span');
let slideinterval;

// if there is any default color
if(defultColor){

  // set these default color to the root 
  document.documentElement.style.setProperty('--main-color',defultColor)
  document.documentElement.style.setProperty('--hover-color',defultHoverColor)

  // remove selected class from all colors and add the selected class to the selected one
  colors.forEach((el)=>{
    if(el.dataset.color === defultColor){
      // add the class
      el.classList.add('selected')
    }
    else{
      //  removing selected from other colors
      el.classList.remove('selected')
    }
  })
}

// get all spans and set event listner for each one for changing color
colors.forEach((el)=>{
  el.addEventListener("click", (e)=>{

    // remove selected class from old one 
    e.target.parentElement.querySelector('.selected').classList.remove('selected');
    
    // set selected class to the new color 
    e.target.classList.add('selected');
    
    // save the color in local storage
    localStorage.setItem('colorsection',e.target.dataset.color)
    localStorage.setItem('hover-colorsection',e.target.dataset.second)
    
    // change root color in the document object
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
    document.documentElement.style.setProperty('--hover-color',e.target.dataset.second)
  })
})

// ===============> the part of colors <===============


// ===============> the part of font Sizes <===============

//  see if there is default value for font size that user select before if there is one will set it as default
let defultsize = localStorage.getItem('sizesectio') ?? false;
let sizes = document.querySelectorAll('.font-section span');

// if there is any default font size
if(defultsize){

  // set these default font size to the root 
  document.documentElement.style.setProperty('--main-size',defultsize)

  // remove bordered class from all spans and add the bordered class to the current one
  sizes.forEach((el)=>{
    if(el.dataset.size === defultsize){
      // add the class
      el.classList.add('bordered')
    }
    else{
      //  removing bordered from other spans
      el.classList.remove('bordered')
    }
  })
}

// get all spans and set event listner for each one for changing font-size
sizes.forEach((el)=>{
  el.addEventListener("click", (e)=>{

    // remove bordered class from old one 
    e.target.parentElement.querySelector('.bordered').classList.remove('bordered');
    
    // set bordered class to the new selected size
    e.target.classList.add('bordered');
    
    // save font-size in local storage
    localStorage.setItem('sizesectio',e.target.dataset.size)
    
    // change root font-size in the document object
    document.documentElement.style.setProperty('--main-size',e.target.dataset.size)
  })
})

// ===============> the part of font Sizes <===============


// /////////////////////////// End setting section ///////////////////////////
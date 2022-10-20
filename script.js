import Frame from 'https://cdn.jsdelivr.net/gh/ofekN/Frame/frame.js'

let button = document.querySelector('.button')
let buttonLoader = 
  document.querySelector('.button-loader')
// hover animation
button.addEventListener('mouseover',()=>{
  Frame.run(button,{duration:.5,borderRadius:'20px',ease:'expo-in'})
})
button.addEventListener('mouseleave',()=>{
  Frame.run(button,{duration:.5,borderRadius:'5px',ease:'expo-out'})
})



button.addEventListener('click',()=>{
  Frame.run(buttonLoader,{duration:5,x:'0px',ease:'linear'})
})

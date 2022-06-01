const progress=document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circles=document.getElementsByClassName("circle")

let currentActive=1;
next.addEventListener('click',()=>{
  currentActive++;
  if(currentActive>circles.length){
    currentActive=circles.length;
  }
  update();
  console.log(currentActive);
})

prev.addEventListener('click',()=>{
  currentActive--;
  if(currentActive<1)
  currentActive=1;
  update();
})

function update(){
  for(let index=0;index<circles.length;index++){
     if(index+1<=currentActive){
       circles[index].classList.add('active');
     }
     else{
       circles[index].classList.remove('active');
     }
  }
  const actives=document.getElementsByClassName('active')
  progress.style.width=(100/3)*(actives.length-1) +"%";

  if(currentActive===1){
    prev.disabled=true;
  }
  else if(currentActive==circles.length){
    next.disabled=true;
  }
  else{
    prev.disabled=false;
    next.disabled=false;
  }
}

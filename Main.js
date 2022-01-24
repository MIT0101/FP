// start image slides code
var slideindex=0;

//inti array for data of slider
var images=new Array(3);
var names =new Array(3);

//fill array data by images and games name
images[0]=new Image();
images[0].src="Img_Soruce/gta5_.jpg";
names[0]="Grand Theft Auto V";

images[1]=new Image();
images[1].src="Img_Soruce/ac_unity.jpg";
names[1]="Assassin's Creed Unity";

images[2]=new Image();
images[2].src="Img_Soruce/SpiderMan.jpg";
names[2]="Marvel's Spider-Man";

//refre to html slider  items (slider image,slider caption,slider count,dots)
const slider_img=document.getElementById("slider_img");
const slider_caption=document.getElementById("slider_caption");
const num_counter=document.getElementById("num_counter");
const dots = document.getElementsByClassName("dot");

//inti index for images and name both
var slideindex=0;
//to show specefic image ,name and slider count for specefic index
//it wiil clear all slides and set new slid
function show_slid(index){
slider_img.src=images[index].src;
clear_active(dots);
dots[index].className=dots[index].className+=" active";
slider_caption.innerHTML=names[index];
num_counter.innerHTML=(index+1)+"/"+dots.length;
}

//to move to next slide
function plusslid(){
  slideindex++;
if(slideindex>2){
  slideindex=0;
}
show_slid(slideindex);
}
//to move to previos slide
function decslid(){
  slideindex--;
  if(slideindex<0){
  slideindex=2;
  }
  show_slid(slideindex);
  }
//it used when user click on dots to chanch slide
  function dot_showslid(index){
    show_slid(index);
    slideindex=index;
  }
//to clear dots active
  function clear_active(dots){
for(var i=0;i<dots.length;i++){
  dots[i].className="dot";
}
  }


//inti slider for first image by use  index 0
show_slid(0);
//end of image slider code 

//end show slides

//use a "ScrollReveal" class to set animation when page load and start scrolling
const sr=ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 100,
    });
    
    //to set each class animation direction starts from by using "reveal" method from ScrollReveal object
    sr.reveal(' .left_div , .sec.hr , .sec.fps ',{origin: 'left'});
    sr.reveal(' .main_img , .photo_contaner_big ',{origin:'righit'});
    sr.reveal(' .sec.op , .title',{origin:'top'});
    sr.reveal(' .slideshow-container.a1 , .slideshow-container.a2 , .vidio_contaner',{origin:'bottom'});

    //refre to up button 
    const btn_up=document.getElementById("btn_up");
    //to set on click to up button it will scrool to top of page
    btn_up.onclick=function(){
      window.scrollTo({behavior: "smooth",top: 0});
    }
    //this code below to controle show and hide up button by change it class on scrolling
    window.onscroll=function(){
        if(scrollY >=208){
          btn_up.classList="btn_up show";
        }
        else{
          btn_up.classList="btn_up";
        }
      }

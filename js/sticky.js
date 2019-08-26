$(function(){
  var nav = document.querySelector('#main-menu');
  var nav_top = nav.offsetTop;
  var win_y = 0;
  var nav_height = nav.clientHeight;
  console.log(nav_top);
  console.log('nav_height= ' + nav_height)
  
  window.onscroll = function(){
    console.log(window.pageYOffset);
    win_y = window.pageYOffset;
    if(nav_top <= win_y){
      nav.classList.add('sticky');
       document.querySelector('#about, #pf-pub').style.marginTop = nav_height + 'px';
    } else{
      nav.classList.remove('sticky');
      document.querySelector('#about, #pf-pub').style.marginTop = '0px';

    }
  }  
})
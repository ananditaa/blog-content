window.onscroll=function(){scrolling();}
function scrolling(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var srcHeight = document.documentElement.scrollHeight   -document.documentElement.clientHeight;
    var scrolled = (winScroll/srcHeight)*100;
    document.querySelector('.progress-bar') .style.width=scrolled+'%';

   
    var value=scrolled;
    var coinAnimation= document.getElementById('coin-id');
    console.log(value);
    if (value>=50) {
       coinAnimation.classList.add('coin-animation');
    }
    else{
        coinAnimation.classList.remove('coin-animation');
    }
   
   
}

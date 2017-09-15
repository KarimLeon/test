var img = document.getElementById('notification')  
var div = document.querySelector('.Clear')
var nav = document.getElementById('nav')
var img2 = document.getElementById('menu')
  
  

  img.onclick = function () {
    var div2 = div.getAttribute('class')

   switch(div2) {
     
     case "Clear":
      div.setAttribute('class', 'red')
      img.setAttribute('src', 'Images/chris2.png')

      break;

    case "red": 
     div.setAttribute('class', 'Clear')
     img.setAttribute('src', 'Images/chris.png')
   
    

   }

  };


 nav.onclick = function () {




 alert('damn')





 }
   
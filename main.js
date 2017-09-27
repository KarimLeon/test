var body = document.querySelector('body')
var btn = document.querySelector('.passwords-login')
var menubox = document.querySelector('.menuBox')
var email = document.getElementsByName('email')
var password = document.getElementsByName('password')
var login = document.getElementById('login')
var form = document.querySelector('form')


  


 
 function menuBox() {
     $(menubox).slideToggle(500);
 };

$(document).ready(function() {


$(login).click(function () {
   if($(email).val() == "test@gmail.com" && $(password).val() == '123')
       form.setAttribute('action', 'karimdream/index(local)(2).html')
       
   
  else  if($(email).val() == "" && $(password).val() == '') 
       null;
   
 else
     alert('error')
    

})

})


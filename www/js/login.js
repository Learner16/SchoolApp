$(document).ready(function(){

    var source   = $("#loginPage-template").html();
    var template = Handlebars.compile(source);
    var dataloginFormElements = {loginFormElement:[
      {formElement: "username" , dataType:"text" , label :"Username"},
      {formElement: "password" , dataType:"password" , label:"Password"},
      {formElement: "schoolCode" , dataType:"text" , label:"School Code"}      
    ]};
  $("#loginPage-placeholder").html(template(dataloginFormElements));

   /*$('#goButton').click(function(){
    alert('Go button clicked');
  });
*/
  });
$(document).ready(function(){

    var source   = $("#forgotPasswordPage-template").html();
    var template = Handlebars.compile(source);
    var dataForgotPasswordFormElements = {forgotPasswordFormElement:[
      {formElement: "emailId" , dataType:"text" , label :"Email Id"},
      {formElement: "oldPassword" , dataType:"password" , label:"Old Password"},
      {formElement: "newPassword" , dataType:"password" , label:"New Password"},
      {formElement: "confirmPassword" , dataType:"password" , label:"Confirm Password"},
      {formElement: "hintQuestion" , dataType:"text" , label:"Hint Question"},
      {formElement: "hintAnswer" , dataType:"text" , label:"Hint Answer"},
    ]};
  $("#forgotPasswordPage-placeholder").html(template(dataForgotPasswordFormElements));

   /*$('#goButton').click(function(){
    alert('Go button clicked');
  });
*/
  });
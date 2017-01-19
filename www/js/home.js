$("document").ready(function(){
    var source   = $("#homePage-template").html();
    var template = Handlebars.compile(source);
    var dataPanel = {activites:[
      {activity: "Events" , icon:"fa fa-camera-retro"},
      {activity: "Ciriculars" , icon:"fa fa-paper-plane"},
      {activity: "Time Table" , icon:"fa fa-exclamation"},
      {activity: "View Attendance" , icon:"fa fa-comments"},
      {activity: "Exam Schedule" , icon:"fa fa-exclamation"},
      {activity: "Fees Information" , icon:"fa fa-exclamation"},
      {activity: "Syllabus" , icon:"fa fa-bell"},
      {activity: "About Us" , icon:"fa fa-cog"},
      {activity: "Log Out" , icon:"fa fa-bell"},
      
    ]};
  $("#homePage-placeholder").html(template(dataPanel));

});
$(document).ready(function() {
  
  //Built in responsiveness for navigation menu
  $(function() {
    var pull = $("#pull");
    var collapse = $("#collapse");
    menu = $(".nav-buttons");
    menuHeight = menu.height();
    
    //When menu button is clicked, the nav menu will drop down
    $(pull).on("click", function(e) {
      e.preventDefault();
      menu.slideToggle();
      collapse.show();
    }); 
    
    //When collapse button is clicked, nav menu will toggle back up
    $(collapse).on("click", function(e) {
      e.preventDefault();
      menu.slideToggle();
      collapse.hide();
    });
    
  });
  
  //Resizing menu on small screen size
  $(window).resize(function() {
    var window = $(window).width();
    if (window > 320 && menu.is(":hidden")) {
      menu.removeAttr("style");
    } 
    
  });
  
  
});
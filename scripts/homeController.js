(function(module) {

  var homeController = {};

  homeController.index = function() {
    $('.search').hide();
    $('.top20').hide();
    $('.home').delay(100).hide().slideDown(300);
    homeView.formClick();
  };



  module.homeController = homeController;

})(window);

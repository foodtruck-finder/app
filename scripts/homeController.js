(function(module) {

  var homeController = {};

  homeController.index = function() {
    $('.home').show();
    $('.search').hide();
    $('.top20').hide();
    homeView.formClick();
  };



  module.homeController = homeController;

})(window);

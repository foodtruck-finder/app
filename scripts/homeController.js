(function(module) {

  var homeController = {};

  homeController.index = function() {
    $('home').show().siblings().hide();
  };

  module.homeController = homeController;

})(window);

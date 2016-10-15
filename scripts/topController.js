(function(module) {

  var topController = {};

  topController.index = function() {
    $('.top20').show();
    $('.home').hide();
    $('.search').hide();
  };
  module.topController = topController;

})(window);

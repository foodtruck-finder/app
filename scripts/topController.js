(function(module) {

  var topController = {};

  topController.index = function() {
    $('top20').show().siblings().hide();
  };

  module.topController = topController;

})(window);

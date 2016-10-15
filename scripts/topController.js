(function(module) {

  var topController = {};

  topController.index = function() {
    $('.home').hide();
    $('.search').hide();
    $('.top20').delay(100).hide().slideDown(300);
    topView.formClick();
  };
  module.topController = topController;

})(window);

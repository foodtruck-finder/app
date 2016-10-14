(function(module) {

  var topView = {};

  topView.handleFilter = function() {
    $('#openNowTop20').change(function() {
      if($(this).is(':checked')) {
        return;
      }
    });
  };

  module.topView = topView;

})(window);

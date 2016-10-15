(function(module) {

  var topView = {};

  topView.handleFilter = function() {
    $('#openNowTop20').change(function() {
      if($(this).is(':checked')) {
        return;
      }
    });
  };

  // Render top20 template
  var render = function(top20) {
    var template = Handlebars.compile($('#top-20-template').text());
    return template(top20);
  };

  module.topView = topView;

})(window);

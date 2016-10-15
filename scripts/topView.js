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

  topView.formClick = function() {
    $('#location-submit-btn').on('click', function(e){
      e.preventDefault();
      getYelp.settopTwentyParams();
      getYelp.topTwentyAjaxCall().then(function() {
        console.log('Top 20 - AJAX call to YelpAPI completed');
        getYelp.topTwentyIndex();
      });
    });
  };





  module.topView = topView;

})(window);

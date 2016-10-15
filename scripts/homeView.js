(function(module) {

  var homeView = {};

  homeView.formClick = function() {
    $('#location-submit-btn').on('click', function(e){
      e.preventDefault();
      getYelp.setParams();
      getYelp.defaultAjaxCall().then(function() {
        console.log('AJAX call to YelpAPI completed');
        // $('#location').val('');
        getYelp.index();
        searchController.index();
      });
    });
  };


  module.homeView = homeView;

})(window);

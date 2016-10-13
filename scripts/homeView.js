(function(module) {

  var homeView = {};

  homeView.formClick = function() {
    $('#location-submit').on('click', function(e){
      e.preventDefault();
      getYelp.setParams();
      getYelp.defaultAjaxCall();
      console.log('AJAX call to YelpAPI completed');
      $('#location').val('');
      searchController.index();
    });
  };


  module.homeView = homeView;

})(window);

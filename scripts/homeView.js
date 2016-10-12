(function(module) {

  var homeView = {};

  homeView.formClick = function() {
    $('#location-submit').on('click', function(e){
      e.preventDefault();
      getYelp.defaultAjaxCall();
      console.log('AJAX call to YelpAPI completed');
    });
  };


  module.homeView = homeView;

})(window);

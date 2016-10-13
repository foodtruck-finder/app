(function(module) {

  var searchController = {};

  searchController.index = function() {
    $('.search').show();
    $('.home').hide();
    $('.top20').hide();
  };

  module.searchController = searchController;

})(window);

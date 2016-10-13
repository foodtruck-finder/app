(function(module) {

  var searchController = {};

  searchController.index = function() {
    $('.search').show();
    $('.home').hide();
    $('.top20').hide();
    searchView.populateFilters();
    getYelp.index();
  };

  module.searchController = searchController;

})(window);

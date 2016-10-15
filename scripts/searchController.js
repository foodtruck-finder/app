(function(module) {

  var searchController = {};

  searchController.index = function() {
    $('.search').show();
    $('.home').hide();
    $('.top20').hide();
    searchView.populateFilters();
    searchView.handleFilters();
    searchView.formClick();

  };

  module.searchController = searchController;

})(window);

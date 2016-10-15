(function(module) {

  var searchController = {};

  searchController.index = function() {
    $('.home').hide();
    $('.top20').hide();
    $('.search').delay(100).hide().slideDown(300);
    searchView.populateFilters();
    searchView.handleFilters();
    searchView.formClick();

  };

  module.searchController = searchController;

})(window);

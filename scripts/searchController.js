(function(module) {

  var searchController = {};

  searchController.index = function() {
    $('#search').show().siblings().hide();
  };

  module.searchController = searchController;

})(window);

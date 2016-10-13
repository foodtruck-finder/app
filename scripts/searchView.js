(function(module) {

  var searchView = {};

  searchView.populateFilters = function() {

    $.ajax({
      url: 'data/cuisines.json',
      dataType:'JSON',
      success:function(data){
        $select = $('#cuisine-filter');
        $select.html('');
        $.each(data.cuisines, function(key, val){
          $select.append('<option id="' + val.id + '">' + val.cuis + '</option>');
        });
      }
    });

    $.ajax({
      url: 'data/distances.json',
      dataType:'JSON',
      success:function(data){
        $select = $('#distance-filter');
        $select.html('');
        $.each(data.distances, function(key, val){
          $select.append('<option id="' + val.id + '">' + val.dist + '</option>');
        });
      }
    });



  };

  module.searchView = searchView;

})(window);

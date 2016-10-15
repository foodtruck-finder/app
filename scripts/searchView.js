(function(module) {

  var searchView = {};
  var $selectC = $('#cuisine-filter');
  var $selectD = $('#distance-filter');

  searchView.populateFilters = function() {

    if ($('#cuisine-filter option').length < 2) { //only run once

      $.ajax({
        url: 'data/cuisines.json',
        dataType:'JSON',
        success:function(data){
          $selectC.html('');
          $.each(data.cuisines, function(key, val){
            $selectC.append('<option id="' + val.id + '">' + val.cuis + '</option>');
          });
        }
      });

      $.ajax({
        url: 'data/distances.json',
        dataType:'JSON',
        success:function(data){
          $selectD.html('');
          $.each(data.distances, function(key, val){
            $selectD.append('<option id="' + val.id + '">' + val.dist + '</option>');
          });
        }
      });

    };

  };

  searchView.handleFilters = function() {
    $selectC.on('change', function() {
      $selectedC = $('#cuisine-filter option:selected').text();
      console.log('Cuisine changed to ' + $selectedC);
    });
    $selectD.on('change', function() {
      $selectedD = $('#distance-filter option:selected').text();
      console.log('Distance changed to ' + $selectedD);
    });
    $('#openNow').change(function() {
      if($(this).is(':checked')) {
        console.log('Open Now option is now ON');
        return;
      }
      console.log('Open Now option is now OFF');
    });
  };

  searchView.formClick = function() {
    $('#location-submit-btn').on('click', function(e){
      e.preventDefault();
      getYelp.setParams();
      getYelp.defaultAjaxCall().then(function() {
        console.log('AJAX call to YelpAPI completed');
        getYelp.index();
      });
    });
  };


  module.searchView = searchView;

})(window);

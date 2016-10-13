(function(module) {

  var getYelp = {};

  getYelp.auth = {
    // Update with your auth tokens.
    consumerKey : 'RNd6OPOt5QReJXSy7Bn1og',
    consumerSecret : '0Kbrxe8nFwO_gcem9UUY5hu2moc',
    accessToken : 'xj0XawTS_vejpRTF1Vr-p0hyiBNEUsqf',
    // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
    // You wouldn't actually want to expose your access token secret like this in a real application.
    accessTokenSecret : 'Um428m1N_22K13XmZgmi8Vfp2wg',
    serviceProvider : {
      signatureMethod : 'HMAC-SHA1'
    }
  };

  getYelp.accessor = {
    consumerSecret : getYelp.auth.consumerSecret,
    tokenSecret : getYelp.auth.accessTokenSecret
  };

  getYelp.terms = 'food+trucks';

  getYelp.near = 'Portland,+OR';

  // getYelp.geolocation = function() {
  //   var options = {
  //     enableHighAccuracy: true,
  //     timeout: 5000,
  //     maximumAge: 0
  //   };
  //
  //   function success(pos) {
  //     var crd = pos.coords;
  //
  //     console.log('Your current position is:');
  //     console.log('Latitude : ' + crd.latitude);
  //     console.log('Longitude: ' + crd.longitude);
  //     console.log('More or less ' + crd.accuracy + ' meters.');
  //     console.log(crd);
  //   };
  //
  //   function error(err) {
  //     console.warn('ERROR(' + err.code + '): ' + err.message);
  //   };
  //
  //   navigator.geolocation.getCurrentPosition(success, error, options);
  // };

  getYelp.parameters = [];

  getYelp.parameters.push(['term', getYelp.terms]);
  getYelp.parameters.push(['location', getYelp.near]);
  getYelp.parameters.push(['callback', 'cb']);
  getYelp.parameters.push(['oauth_consumer_key', getYelp.auth.consumerKey]);
  getYelp.parameters.push(['oauth_consumer_secret', getYelp.auth.consumerSecret]);
  getYelp.parameters.push(['oauth_token', getYelp.auth.accessToken]);
  getYelp.parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

  getYelp.message = {
    'action' : 'https://api.yelp.com/v2/search',
    'method' : 'GET',
    'parameters' : getYelp.parameters
  };

  OAuth.setTimestampAndNonce(getYelp.message);
  OAuth.SignatureMethod.sign(getYelp.message, getYelp.accessor);

  getYelp.parameterMap = OAuth.getParameterMap(getYelp.message.parameters);
  getYelp.parameterMap.oauth_signature = OAuth.percentEncode(getYelp.parameterMap.oauth_signature);
  console.log(getYelp.parameterMap);

  getYelp.foodTrucksArray = [];

  getYelp.defaultAjaxCall = function() {
    $.ajax({
      'url' : getYelp.message.action,
      'data' : getYelp.parameterMap,
      'cache' : true,
      'dataType' : 'jsonp',
      'jsonpCallback' : 'cb',
      'success' : function(data, textStats, XMLHttpRequest) {
        getYelp.foodTrucksArray = data;
        console.log(data);
      }
    });
  };

  module.getYelp = getYelp;

})(window);
var auth = {
  //
  // Update with your auth tokens.
  //
  consumerKey : "RNd6OPOt5QReJXSy7Bn1og",
  consumerSecret : "0Kbrxe8nFwO_gcem9UUY5hu2moc",
  accessToken : "xj0XawTS_vejpRTF1Vr-p0hyiBNEUsqf",
  // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
  // You wouldn't actually want to expose your access token secret like this in a real application.
  accessTokenSecret : "Um428m1N_22K13XmZgmi8Vfp2wg",
  serviceProvider : {
    signatureMethod : "HMAC-SHA1"
  }
};

var terms = 'food+trucks';
var near = 'Portland,+OR';

var accessor = {
  consumerSecret : auth.consumerSecret,
  tokenSecret : auth.accessTokenSecret
};

parameters = [];
parameters.push(['term', terms]);
parameters.push(['location', near]);
parameters.push(['callback', 'cb']);
parameters.push(['oauth_consumer_key', auth.consumerKey]);
parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
parameters.push(['oauth_token', auth.accessToken]);
parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

var message = {
  'action' : 'https://api.yelp.com/v2/search',
  'method' : 'GET',
  'parameters' : parameters
};

OAuth.setTimestampAndNonce(message);
OAuth.SignatureMethod.sign(message, accessor);

var parameterMap = OAuth.getParameterMap(message.parameters);
parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)
console.log(parameterMap);

var foodTrucksArray = [];

$.ajax({
  'url' : message.action,
  'data' : parameterMap,
  'cache' : true,
  'dataType' : 'jsonp',
  'jsonpCallback' : 'cb',
  'success' : function(data, textStats, XMLHttpRequest) {
    foodTrucksArray = data;
    console.log(data);
  }
});

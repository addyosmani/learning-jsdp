// Code in app.js. baseURL set to the lib folder
// containing jquery.color.
define(["https://cdnjs.cloudflare.com/ajax/libs/jquery-color/2.1.2/jquery.color.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"],
  function(colorPlugin, _) {
    // Here we've loaded the jQuery color plugin and Lodash from a CDN
    // None of these will be accessible in the global scope, but we
    // can easily reference them below.

    // Pseudorandomize an array of colors, selecting the first
    // item in the shuffled array
    var shuffleColor = _.first(_.shuffle(["#AAA", "#FFF", "#111", "#F16"]));
    console.log(shuffleColor);

    // Animate the background color of any elements with the class
    // "item" on the page using the shuffled color
    $(".item").animate({ "backgroundColor": shuffleColor });

    // What we return can be used by other modules
    return function() {};
});

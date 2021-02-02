var Express             = require("express");
var App                 = Express();

App.get('/', function(request, response) {
    function firstPlusLength(arr) {
        let first = arr[1];
        let length = 5;
        let result = first + length;

        return result;
    }
    
    // should print out 5, 7, -1, 3
    response.send("<h1>" + firstPlusLength([0,1,2,3,4]) + ", " + firstPlusLength([3,0,2,5]) + ", " + firstPlusLength([-5,0,2,5]) + ", " + firstPlusLength([1, 2]) + "</h1>");
})

App.listen(3000, function() {});
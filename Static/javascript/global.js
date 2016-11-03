// ------------- SVG SPRITE ------------- //

(function () {

    /**
    * Ajaxes the SVG sprite and inserts into the DOM to allow for leveraging of browser caching
    */

    // Request SVG sprite
    var request = new XMLHttpRequest();
    request.open('GET', '/static/images/svg-sprite.svg', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = request.responseText;

            // Create node with response data and insert into DOM
            var div = document.createElement('div');
            div.innerHTML = data;
            document.body.insertBefore(div, document.body.childNodes[0]);
        } else {
            console.log("Couldn't load SVG sprite");

        }
    };

    request.onerror = function () {
        console.log("Couldn't load SVG sprite - connection error");
    };

    request.send();

})();

(function () {

    /**
    * Toggles animation classes on load / scroll for elements with "toggleClass" class
    */

    var toggleClass = "js-fade-in-toggle";
    var scrolledToClass = "fade-in-scroll";
    var loadedClass = "fade-in-load";

    // Register event listeners on load and scroll for "toggleClass" elements
    var toToggleElements = document.getElementsByClassName(toggleClass);
    if (toToggleElements) {
        window.addEventListener('load', onVisibilityChange(toToggleElements), false);
        window.addEventListener('scroll', onVisibilityChange(toToggleElements), false);
    }

    // Toggle load or scroll specific fade animation class
    function onVisibilityChange(el) {
        return function (e) { 
            e = e || event;
            Array.prototype.forEach.call(toToggleElements, function (el, i) {
                if (isElementInViewport(el)) {
                    if (e.type === "load") {
                        toggleClassName(el, loadedClass);
                    }
                    if (e.type === "scroll") {
                        toggleClassName(el, scrolledToClass);

                        //Remove already toggled elements from HTMLCollection to prevent event from firing unnecessarily
                        el.classList.remove(toggleClass);

                        //Remove event listener when no more toggle-able elements exist
                        if (toToggleElements.length === 0) {
                            window.removeEventListener('scroll', onVisibilityChange(toToggleElements), false);
                        }
                    }
                }
            });
        }
    }

    // Check if element is currently in viewport; return true if true
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Toggle class name
    function toggleClassName(el, className) {
        if (!el.classList.contains(className)) {
            el.className += " " + className;
        }
    }

})();

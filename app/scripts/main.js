/**
* Window listener that closes nav windows when expanded to desktop.
*/
var onResize = () => {
    if(window.innerWidth >= 767){
        document.body.classList.remove('nav-open');
    };
}

document.addEventListener('DOMContentLoaded', function(event) {
    // Check browser on load
    onResize();

    // Toggles hamburger
    document.getElementById('toggle-nav').addEventListener('click', function(){
        document.getElementById('toggle-nav').classList.toggle('is-active');
        document.body.classList.toggle('nav-open');
    });
  });

  (function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle('resize', 'optimizedResize');
})();

// handle event
window.addEventListener('optimizedResize', function() {
    onResize();
});


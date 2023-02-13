['click','ontouchstart'].forEach( function(evt) {
    element.addEventListener(evt, dosomething, false);
});
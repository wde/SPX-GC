'use strict';


const _graphic = (function() {

    (function() {
        // Runs after the rest of the parent function parses
        window['update'] = (raw) => update(raw);
        window['play'] = play;
        window['next'] = next;
        window['stop'] = stop;
        window['remove'] = remove;
    })();

    function update(raw) { }
    function play() { }
    function next() { }
    function stop() { }
    function remove() { }

    function handleError(e) {console.error(e)}
    function handleWarning(w) {console.log(w)}
    return { }

})();
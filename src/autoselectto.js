/* 
   #mv-autoselectto
   ========================================================================== */

/**
 * The `autoselectto` directive selects text inside a textbox up to a specified 
 * character.
 *
 * @name mv-autoselectto
 * @type attribute
 * @attr {string}
 *
 *     The character to match against.
 */

mvcc.com.create({
    init: function (el) {
    	var char = el.getAttribute('autoselectto') || '.';
        if (el.value.indexOf(char) > -1) {
            el.selectionStart = 0;
            el.selectionEnd = el.value.indexOf('.');
        }
        else {
            el.select();
        }
    }
}, 'mv-autoselectto');
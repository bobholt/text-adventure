IF = (function(){
    var init = function init(){
            attachEventHandlers();
            IF.state.init();
            IF.location.init();
            IF.story.init();
        },
        attachEventHandlers = function(){
            $('form').submit(function(e){
               e.preventDefault();
               IF.story.executeCommand($('#command').val());
            });
            $('#command').focus();
        },
        executeFunctionByName = function(functionName, context /*, args */) {
          var args = Array.prototype.slice.call(arguments).splice(2),
              namespaces = functionName.split("."),
              func = namespaces.pop();
          for(var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
          }
          return context[func].apply(this, args);
        }

    return {
      common:{
          init: init,
          executeFunctionByName: executeFunctionByName
      }
  };
}());

/* ============================================================================
    UTIL -  KICK OFF DOCUMENT READY CODE  
    ORDER OF FIRING:
    moto.common();
    moto.bodyclassName.init();
    moto.bodyclassName.bodyID();

   Credit for structure:http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
   Modified by RBH
   ============================================================================*/

UTIL = {
    fire: function(func, childobj, args) {
        var namespace = IF;
        // indicate your obj literal namespace here
        childobj = (childobj === undefined) ? 'init': childobj;
        if (func !== '' && namespace[func] && typeof namespace[func][childobj] === 'function') {
            namespace[func][childobj](args);
        }
        // if the child object also has an init method...
        if (func !== '' && namespace[func] && typeof namespace[func][childobj] !== 'undefined' && typeof namespace[func][childobj]['init'] === 'function') {
        	namespace[func][childobj]['init'](args);
        }
    },

    loadEvents: function() {
        var bodyId = document.body.id;
        // hit up common first.
        UTIL.fire('common');
        // do all the classes too.
        $.each(document.body.className.split(/\s+/),
        function(i, classnm) {
            UTIL.fire(classnm);
            UTIL.fire(classnm, bodyId);
        });
        UTIL.fire('common', 'finalize');
    }
};

// kick it all off here
$(document).ready(UTIL.loadEvents);
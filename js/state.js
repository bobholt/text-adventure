IF.state = (function(IF){
    var currentLocation = localStorage["currentLocation"] || "0-1-0",
        currentScore = 0,
        verbose = false,
        isNew = localStorage["isNew"]==="true" || true,
        init = function(){
        
        },
        getCurrentLocation = function(){
            return currentLocation;
        },
        setCurrentLocation = function(locationId){
            currentLocation = locationId;
        },
        getCurrentScore = function(){
            return currentScore;
        },
        setCurrentScore = function(score){
            currentScore = score;
        },
        makeVerbose = function(){
            verbose = true;
        }

    return {
        init: init,
        getCurrentLocation: getCurrentLocation,
        setCurrentLocation: setCurrentLocation,
        getCurrentScore: getCurrentScore,
        setCurrentScore: setCurrentScore,
        isVerbose: verbose,
        makeVerbose: makeVerbose
    };
}(IF));

IF.state.inventory = (function(){
    var inventory = [],
        init = function(){
        
        },
        getInventory = function(){
            return inventory;
        };
    
    return {
        init: init,
        getInventory: getInventory
    };
}(IF));

IF.state.map = (function(){
    var init = function(){
        
    };
    
    return {
        init: init
    };
}(IF));
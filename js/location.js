IF.location = (function(IF){
    var init = function(){
        };
        getName = function(location){
            return gameData.locations[location].name;
        };
        getDescription = function(location){
            return gameData.locations[location].description;
        };
        getItems = function(location){
            return gameData.locations[location].items;
        },
        change = function(direction){
            var newLocation = gameData.locations[IF.state.getCurrentLocation()].movement[direction].location;
            if (typeof newLocation === "undefined"){
                IF.story.writeLn("You can't go that way");
            } else {
                IF.state.setCurrentLocation(newLocation);
                look();
            }
        },
        look = function(){
            var location = IF.state.getCurrentLocation(),
                name = getName(location),
                description = getDescription(location),
                items = getItems(location),
                numItems = items.length;
            IF.story.writeLn(name);
            IF.story.writeLn("You are " + description);
            if (numItems > 1){
                var line = "There are ";
                for (var item in items){
                    line += items[item].aAn + " " + items[item].name;
                    if (item < numItems-2){
                        line += ', ';
                    } else if (item === numItems - 1){
                        line += ' and ';
                    }
                }
                line += " here.";
                IF.story.writeLn(line);
            } else {
                IF.story.writeLn("There is " + items[0].aAn + " " + items[0].name + " here.");
            }
        };

    return {
      init: init,
      change: change,
      getName: getName,
      getDescription: getDescription,
      getItems: getItems,
      look: look
    };
}(IF));
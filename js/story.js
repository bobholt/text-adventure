IF.story = (function(IF){
    var init = function(){
            IF.location.look();
        },
        executeCommand = function(command){
            writeLn('');
            writeLn('&gt;' + command);
            parseCommand(command);
            $('#command').val('');
        },
        parseCommand = function(command){
            var commandArr = command.split(' ');
            for (var word in commandArr){
                var commandWord = commandArr[word].toLowerCase();
                if (typeof IF.thesaurus[commandWord] !== "undefined"){
                    commandArr[word] = IF.thesaurus[commandWord].methodParam;
                } else {
                    writeLn("I don't know the word \""+commandArr[word]+"\".");
                    break;
                }
            }
            while (commandArr.indexOf('') !== -1){
                commandArr.splice(commandArr.indexOf(''),1);
            }
            
            if (commandArr.length === 1){
                switch(commandArr[0]){
                    case "north":
                    case "south":
                    case "east":
                    case "west":
                    case "northeast":
                    case "northwest":
                    case "southeast":
                    case "southwest":
                    case "up":
                    case "down":
                    case "in":
                    case "out":
                        IF.location.change(commandArr[0]);
                        break;
                    default:
                        break;
                }
            }
            console.log(commandArr.join(' '));
        },
        showInventory = function(){
            var inventory = IF.state.inventory.getInventory,
                numItems = inventory.length;
            if (numItems === 0){
                IF.story.write("You are empty-handed.");
            } else {
                
            }
        },
        writeLn = function(data){
            $('#story').append(data + "<br />");
        };
    return {
      init: init,
      writeLn: writeLn,
      executeCommand: executeCommand
    };
}(IF));
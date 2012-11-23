IF.thesaurus = {
    "": {
        methodParam: ""
    },
    "brief": {
        pos: "command",
        action: "changeSettings",
        methodParam: "brief"
    },
    "cross": {
        pos: "verb",
        action: "move",
        methodParam: "cross"
    },
    "d":{
        pos: "verb",
        action: "move",
        methodParam: "down"
    },
    "diagnose": {
        pos: "verb",
        action: "checkStatus",
        methodParam: "diagnose"
    },
    "down": {
        pos: "verb",
        action: "move",
        methodParam: "down"
    },
    "drop": {
        pos: "verb",
        action: "updateInventory",
        methodParam: "drop"
    },
    "e": {
        pos: "verb",
        action: "move",
        methodParam: "east"
    },
    "east": {
        pos: "verb",
        action: "move",
        methodParam: "east"
    },
    "game": "game",
    "get": {
        pos: "verb",
        action: "updateInventory",
        methodParam: "take"
    },
    "i": "inventory",
    "info":"info",
    "inspect" : "look",
    "inventory": "inventory",
    "kill": "attack",
    "land": "land",
    "load": "load",
    "look": "look",
    "n": {
        pos: "verb",
        action: "move",
        methodParam: "north"
    },
    "ne": {
        pos: "verb",
        action: "move",
        methodParam: "northeast"
    },
    "new": "new",
    "north": {
        pos: "verb",
        action: "move",
        methodParam: "north"
    },
    "northeast": {
        pos: "verb",
        action: "move",
        methodParam: "northeast"
    },
    "northwest": {
        pos: "verb",
        action: "move",
        methodParam: "northwest"
    },
    "nw": {
        pos: "verb",
        action: "move",
        methodParam: "northwest"
    },
    "pick": "take",
    "put": "put",
    "read": "read",
    "reload": "load",
    "reset": "reset",
    "restore": "load",
    "s": {
        pos: "verb",
        action: "move",
        methodParam: "south"
    },
    "save": "save",
    "score": "score",
    "se": {
        pos: "verb",
        action: "move",
        methodParam: "southeast"
    },
    "south": {
        pos: "verb",
        action: "move",
        methodParam: "south"
    },
    "southeast": {
        pos: "verb",
        action: "move",
        methodParam: "southeast"
    },
    "southwest": {
        pos: "verb",
        action: "move",
        methodParam: "southwest"
    },
    "superbrief": "superbrief",
    "sw": {
        pos: "verb",
        action: "move",
        methodParam: "southwest"
    },
    "take": "take",
    "the": "",
    "time": "time",
    "u": "up",
    "up": "up",
    "verbose": "verbose",
    "w": {
        pos: "verb",
        action: "move",
        methodParam: "southwest"
    },
    "west": {
        pos: "verb",
        action: "move",
        methodParam: "southwest"
    }
};

IF.gameThesaurus = {
    "door":"door",
    "house":"house",
    "leaflet":"leaflet",
    "mailbox":"mailbox",
    "pamphlet":"pamphlet",
    "window":"window"
};

$.extend(IF.thesaurus, IF.gameThesaurus);

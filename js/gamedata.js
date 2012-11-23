gameData = {
    locations: {
        "0-1-0": {
            id: 0,
            name: "West of House",
            description: "standing in an open field west of a white house, with a boarded front door.",
            items: [
                {
                    name: "small mailbox",
                    simple: "mailbox",
                    aAn: "a",
                    actions: [
                        "open"
                    ],
                    items: [
                        {
                            name: "leaflet",
                            simple: "mailbox",
                            aAn: "a"
                        }
                    ]
                }
            ],
            characters: [],
            movement:{
                north: {
                    location: "0-2-0"
                },
                south: {
                    location: "0-0-0"
                },
                east: {
                    error: "The door is boarded and you can't remove the boards."
                }
            }
        },
        "0-2-0": {
            id: 0,
            name: "North of House",
            description: "facing the north side of a white house. There is no door here, and all the windows are barred.",
            items: [],
            characters: [],
            movement:{
                north: {
                    location: "0-3-0"
                },
                south: {
                    error: "The windows are all barred."
                },
                west: {
                    location: "start"
                }
            }
        },
        "0-0-0": {
            id: 0,
            name: "South of House",
            description: "facing the south side of a white house. There is no door here, and all the windows are barred.",
            items: [],
            characters: [],
            movement:{
                north: {
                    error: "You shall not pass."
                },
                south: {
                    error: "The windows are all barred."
                },
                west: {
                    location: "0-1-0"
                }
            }
        }
    }
}
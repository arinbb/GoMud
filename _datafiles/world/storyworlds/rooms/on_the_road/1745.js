
// On the Road - Dean's Denver Apartment
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The thin walls of the apartment dissolve into sentences, Dean's voice fading into the paragraph that contains it. The mattress on the floor, the wine bottles, the chaotic joy of this room all fold themselves into the pages of the book. You are back in the Grand Library, slightly overwhelmed.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves in the apartment's chaos and vanishes back into the pages of the novel.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var target = rest.toLowerCase();
        if (target.indexOf("car") >= 0 || target.indexOf("hudson") >= 0 || target.indexOf("outside") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look out the window at the cars parked outside. There is a '47 Buick with a bent front fender, a Ford coupe with a cracked windshield, and a long low Hudson Hornet, cream-colored, the car of the journey. The Hudson's registration, if you looked closely, would not say Dean Moriarty. It says something else. Someone in Denver is looking for this car. Dean borrowed it. Dean always borrows things — cars, women, money, other people's time. He borrows everything and gives back something different, something electric, something that changes you.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The Hudson waits. The road is already inside it, coiled in the engine, waiting to be released at speed.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " peers out the window at the cars parked outside, expression thoughtful.", user.UserId());

            if (user.GetMiscCharacterData("road_stolen_hudson") != "found") {
                user.SetMiscCharacterData("road_stolen_hudson", "found");
                user.GrantXP(100, "discovering the borrowed Hudson outside Dean's apartment");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">[ You earned 100 XP for looking closer at the cars. The Hudson is borrowed. The road is real. ]</ansi>");
            }

            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }
    return true;
}

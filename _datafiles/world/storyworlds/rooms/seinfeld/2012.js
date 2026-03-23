
// Seinfeld - The Parking Garage
var LIBRARY_ROOM = 1;
var QUEST_ID = 280;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The parking garage dissolves. The concrete pillars, the identical rows, the fluorescent grey -- all of it fades. The Grand Library materializes and you know exactly where you are, which is a relief.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the parking garage. Their car is still out there somewhere.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "search" || cmd == "find" || (cmd == "look" && rest.indexOf("car") >= 0)) {
        var messages = [
            "You search for the car. The car is not here. Or it is here and you cannot identify it. You walk toward a car that might be yours. It is not yours. You walk back.",
            "You scan the rows. Nothing identifies itself as yours. You try to remember what level you came in on. You cannot remember. You try to remember a landmark near where you parked. The landmark was a pillar. They are all pillars.",
            "You locate a car that is definitely your car and walk toward it and arrive at a car that is definitely not your car. How did this happen. You are still in the parking garage.",
            "The car. Where is the car. It is somewhere in this garage in the sense that everything that is somewhere is somewhere. This is not helpful information.",
            "You try the clicker. You hear a faint chirp. You walk toward it. The chirp was in a direction that no longer makes sense given where you are now."
        ];
        var pick = Math.floor(Math.random() * messages.length);

        if (user.GetMiscCharacterData("seinfeld_garage") != "done") {
            user.SetMiscCharacterData("seinfeld_garage", "done");
            user.GrantXP(200, "Lost in the parking garage");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">" + messages[pick] + "</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: You cannot find the car.)</ansi>");
            if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("seinfeld_q4")) {
                user.SetMiscCharacterData("seinfeld_q4", "done");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: Got lost in the parking garage.)</ansi>");
            }
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">" + messages[pick] + "</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You are in the parking garage. Type 'search' or 'find car' to look for your vehicle. The car is here. Probably.</ansi>");
    return false;
}


// Paris, Texas - The Airport Parking Garage
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You leave Travis to his watching. You leave the garage and the gap in the pillars and the terminal entrance and whatever is about to come through those automatic doors. The fluorescent lights strobe once and then you are in the library and the film is ending in the projector and the screen goes white.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips away between the concrete pillars and is gone before the doors open.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wait" || cmd == "watch" || cmd == "look") {
        var r = rest.toLowerCase();
        if (cmd == "wait" || r.indexOf("door") >= 0 || r.indexOf("terminal") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You wait with Travis. The automatic doors open and open and open for other people. Then they open and it is them — Jane and Hunter — and Hunter sees his mother and runs and Jane catches him and lifts him and holds him and you can see even from here that she is crying. Travis watches through the gap in the pillars. He does not move. He watches until he is certain. Then he starts the truck. Then he drives away. The screen in your mind goes white. Ry Cooder plays one long note and the note resolves into silence.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " watches through the gap in the pillars until the truck starts and drives away.", user.UserId());
        }
    }

    return false;
}

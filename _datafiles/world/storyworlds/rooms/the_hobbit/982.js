
// Elvenking's Halls - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The green and gold lanterns dim. The Elvenking's halls shrink into the confines of a page. You tumble through darkness lit by elven light, and land softly in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs into an empty wine barrel and floats away down the river of story, back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

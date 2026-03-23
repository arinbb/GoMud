// Back to the Future -- The McFly House
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Philco television static swells until it fills the room, every channel at once, then contracts to a bright point and winks out. You are in the Grand Library. The smell of frying dinner is the last thing to go.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like a channel that stopped broadcasting, leaving only static and then nothing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

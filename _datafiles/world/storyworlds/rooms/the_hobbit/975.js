
// Goblin Tunnels - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The goblin drums fade to silence. The dark tunnels collapse inward like a closing book, and you emerge, blinking, back in the well-lit Grand Library. You have never been so glad to see lamplight.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes into the shadows between one drumbeat and the next, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

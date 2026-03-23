
// Matilda - Country Lane
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The hedgerows lean together overhead, forming an arch of green that narrows into a tunnel. At its end, warm library light beckons. You walk through, the birdsong fading behind you, and emerge into the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks into the hedgerow arch and is lost among the leaves and wildflowers.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

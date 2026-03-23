
// Levy Pants Factory Floor - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The sewing machines fall silent, the lint settles, and the factory floor dissolves into the pages of the novel like cheap fabric unraveling. You are back in the Grand Library, lint-free and grateful.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " unravels like a bolt of cheap fabric and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

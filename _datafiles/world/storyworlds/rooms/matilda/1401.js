
// Matilda - Wormwood Kitchen
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The microwave dings one final time and its door swings open, revealing not a frozen dinner but a swirling tunnel of warm light. You step through, and the smell of fish fingers is replaced by the comforting scent of old books. The Grand Library welcomes you back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into the microwave light and vanishes, leaving behind only the faint smell of library books.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

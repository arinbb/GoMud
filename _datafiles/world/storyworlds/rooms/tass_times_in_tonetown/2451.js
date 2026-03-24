// Tass Times in Tonetown -- Through the Hoop (2451)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The colors fold back. The neon retreats. The bass frequency fades to silence. The cabin appears ahead, warm and brown and ordinary, and you step back through the transition into the smell of wood smoke.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " moves backward through the dimensional boundary and disappears into the normal world.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

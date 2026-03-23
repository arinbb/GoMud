
// Forbidden Planet - The C-57D
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The instrument panels of the C-57D dissolve into sprocket holes. The hum of the ship becomes the hum of the projector. The Library reassembles itself from static and old light.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the instrument light and vanishes from the C-57D.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

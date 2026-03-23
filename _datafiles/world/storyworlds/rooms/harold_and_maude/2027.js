
// Harold and Maude - The Street
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The California street blurs at the edges. The eucalyptus smell fades. The hot pavement and the warm sun dissolve upward into the familiar amber light of the library, and you are standing among the shelves again.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the street corner like heat shimmer off summer asphalt.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

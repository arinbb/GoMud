
// Robins Carpenter Shop - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The smell of sawdust and pine dissipates. The sound of Robin's work fades to silence. The Library reassembles from the smell of old books, which is not entirely unlike cedar.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " nods to Robin and steps out the shop door into the kind of light that only the Library has.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}


// Edge of Mirkwood - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The dark edge of Mirkwood recedes. The trees shrink and flatten into illustrations on yellowed pages. Gandalf's worried face fades last, and you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps backward from the forest edge and dissolves into a shimmer of ink and parchment.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

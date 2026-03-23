// The Office - The Annex
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You head back through the bullpen toward the lobby. Toby watches you leave with an expression that is almost hope.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks west through the annex toward the bullpen. Toby says 'Bye!' quietly, after they have already gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

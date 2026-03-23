// Charrington's Shop - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Charrington's pleasant nod fades. The shop fades. The glass paperweight on its shelf catches the light one last time and then dissolves into the pages of the novel. You are back in the Grand Library. You wonder, briefly, who Charrington really is. Then you remember that you already know.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the antique shop, leaving only the dust.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

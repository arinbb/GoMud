// O'Brien's Flat - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">O'Brien's quiet room dissolves. The wine glass empties into air. The off telescreen, the real carpet, the silver decanter — all of it fades back into the pages. You are in the Grand Library. You know, having read the book, what that meeting meant. You are glad you were only visiting.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from O'Brien's careful watch and returns to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

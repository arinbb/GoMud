// The Chestnut Tree Cafe - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The Chestnut Tree Cafe dissolves. Winston's face, the chess problem, the comforting face on the telescreen — all of it fades back into the pages. You are back in the Grand Library. The book is closed in your hands. The last line echoes: he loved Big Brother. You close the book a little more firmly than necessary.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the Chestnut Tree Cafe, leaving Winston with his gin and his victory.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

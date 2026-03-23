// The Cell - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">The cell dissolves. Parsons's voice fades mid-sentence. The white walls dim to the warm tones of the Grand Library. You are back. You breathe freely. Parsons never gets to breathe freely. You know this, and you are back, and those are two separate facts you are going to have to carry.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the white cell, leaving Parsons still sweating, still guilty.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

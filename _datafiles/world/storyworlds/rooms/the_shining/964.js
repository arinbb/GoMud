
// The Shining - Deep in the Maze
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The snow thickens to a whiteout, and within the white, you see frames of film — a hotel, an axe, a frozen face. The frames melt like snow on warm glass, and the Grand Library materializes around you, warm and dry and blessedly still.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes into the whiteout, swallowed by the maze.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

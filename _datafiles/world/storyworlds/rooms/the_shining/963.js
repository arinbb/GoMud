
// The Shining - Hedge Maze Entrance
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The hedges close around you, and when they part again, you are standing between bookshelves in the Grand Library, snow melting from your clothes, the maze already a fading memory on celluloid.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps between the hedges and does not emerge on the other side.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

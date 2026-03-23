var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The cathedral of feedback collapses inward, honey-colored light draining from the walls, and you are back in the Grand Library with the ringing still in your ears.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by a wall of feedback and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

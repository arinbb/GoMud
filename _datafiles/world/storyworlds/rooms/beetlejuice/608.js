
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Your reflection in the vanity mirror waves goodbye as the bedroom dissolves around you. You're back in the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the vanity mirror and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

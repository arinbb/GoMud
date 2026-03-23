
// Billy Madison - Middle School Hallway
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The middle school hallway dissolves -- the lockers, the trophy case, the ambient social pressure. The fluorescent lights dim and become warm library light. The Grand Library reassembles.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the middle school hallway in a shimmer of film grain.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

// Northern Exposure - Joels Office
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The office fades. The diplomas, the desk, the blinking answering machine -- all of it dissolves with the particular poignancy of a life being lived somewhere far from where it planned to be. The Screening Room returns around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades out of the office. Joel looks up and almost says something, then doesn't.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

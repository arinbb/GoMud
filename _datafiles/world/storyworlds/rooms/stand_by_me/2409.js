// Stand By Me -- The Tracks Continued (2409)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The morning light dims. The dew-heavy ferns dry and vanish. The tracks dissolve. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the morning tracks like mist burning off.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

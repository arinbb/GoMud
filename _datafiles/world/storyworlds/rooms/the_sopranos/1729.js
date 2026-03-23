
// The Sopranos - Bada Bing Back Office
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The security monitor whites out. The safe disappears into the wall. The office dissolves into warm library light and you emerge into the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks out the back way and keeps going.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "open" && rest.indexOf("safe") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You put your hand on the safe door. It is cold and very solid. You do not know the combination. You step back. Some doors are not for you. This is one of them.</ansi>");
        return true;
    }

    if (cmd == "sit" || (cmd == "sit" && rest.indexOf("desk") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit behind Tony's desk. The room feels different from this side. The security monitor shows you the whole club floor, everyone reduced to shapes and motion. The safe is at your back. You understand, briefly and viscerally, what this seat means to the man who sits in it. Then you stand up, because this is not your chair.</ansi>");
        return true;
    }

    return false;
}

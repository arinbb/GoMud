
// Billy Madison - Franks Office
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Frank's office dissolves -- the mahogany desk, the revenue charts, the photo turned just slightly inward. Frank looks up once as you go, with the expression of a man who has learned to trust things he didn't understand at first. The Grand Library returns around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from Frank's office. Frank watches from behind his desk.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.toLowerCase().indexOf("photo") >= 0 || rest.toLowerCase().indexOf("picture") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A woman with Billy's eyes. A baby Billy. Frank at the edge of the frame. The frame is turned slightly inward. Not hidden -- just adjusted, the way you adjust something you need to see at a specific angle and from a specific distance, only when you're ready.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("calendar") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Tuesday, 3pm: Billy. Tuesday, 3pm: Billy. Tuesday, 3pm: Billy. Twenty years of Tuesdays. Frank has never once rescheduled.</ansi>");
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("article") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"Frank Madison Names Son Billy as Heir.\" In the margin, in Frank's handwriting: \"???\". Three question marks. The ink is old. He wrote this a long time ago. He hasn't changed it. Maybe that's the answer.</ansi>");
        return true;
    }

    return false;
}

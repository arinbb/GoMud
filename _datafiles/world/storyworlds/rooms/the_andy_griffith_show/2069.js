
// The Andy Griffith Show - The Church
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The church -- the plain light through the windows, the worn pews, the patient organ -- fades gently into the Grand Library. You leave quietly and close the door behind you, because that is what you do.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " nods once at the hymn board, steps out quietly, and moves back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pray" || cmd == "kneel" || cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit in one of the pews. The wood is worn smooth beneath you, warmed by the light through the plain windows. You sit for a moment and the church is very quiet and the light moves across the floor. Whatever you came in here needing, you find a version of it in the stillness.</ansi>");
        return true;
    }

    if (cmd == "play" && rest.indexOf("organ") >= 0 || cmd == "organ") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit at the organ and press a single chord. The sound fills the church completely, rich and warm, and hangs in the air longer than you expected. Outside, something stops moving for a moment to hear it. Then the morning continues.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plays a single chord on the church organ. The sound fills the building and carries out the door.", user.UserId());
        return true;
    }

    if (cmd == "sing" || (cmd == "hum" && rest.indexOf("hymn") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sing a bar of something -- one of the hymns from the board. Your voice carries in the empty church better than you expected. The building was made for this. It holds the sound well.</ansi>");
        return true;
    }

    return false;
}

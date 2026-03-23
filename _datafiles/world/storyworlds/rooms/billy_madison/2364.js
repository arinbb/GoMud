
// Billy Madison - Veronicas Classroom
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Third grade dissolves -- Mister President the turtle watches you go with the philosophical patience of a turtle that has seen everything. Veronica looks up from her desk as the room becomes warm library light. The Grand Library returns.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from Veronica's classroom. Mister President the turtle watches unmoved.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || (cmd == "sit" && rest.toLowerCase().indexOf("desk") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You try to fold yourself into one of the tiny third-grade desks. It is deeply uncomfortable and also somehow exactly right. You are a student. This is your desk. Veronica gives you an encouraging nod.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " attempts to sit in a tiny third-grade desk with complicated results.", user.UserId());
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("veronica") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">So hot. Want to touch the hiney. You maintain composure. You are a professional visitor to this educational zone.</ansi>");
        return true;
    }

    return false;
}

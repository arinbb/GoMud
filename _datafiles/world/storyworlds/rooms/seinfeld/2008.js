
// Seinfeld - NBC Studios
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The conference room dissolves. The pitch documents, the table, the view -- all of it fades. The Grand Library waits, full of things that became something.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits the NBC offices, greenlit or otherwise.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pitch" || (cmd == "say" && rest.indexOf("nothing") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit across from the imaginary NBC executives. You say: it's a show about nothing. They look at you. You say: two guys in an apartment. They talk. That's it. They continue looking at you. You say: it's a show about everything that's nothing, which is most things. The executives exchange a look. One of them picks up a pen. This is going somewhere.</ansi>");
        return true;
    }

    if (cmd == "read" && rest.indexOf("document") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The pitch document says: Jerry, a New York stand-up comedian, hangs out with his friend George and his neighbor Kramer. His ex-girlfriend Elaine is also there sometimes. They have conversations about things. Nothing happens. Everything is fine. That is the show.</ansi>");
        return true;
    }

    return false;
}

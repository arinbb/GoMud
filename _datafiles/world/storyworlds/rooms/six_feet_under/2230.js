// Six Feet Under - Brendas House
// Room 2230
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Brendas books and her thinking and her unfinished wine dissolve. The Grand Library forms around you, quieter and less analyzed.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips out of Brendas house.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("book") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You pick up one of the books from the stack. It is heavily annotated -- the margins are full of Brendas handwriting, arguing with the text, extending it, occasionally dismissing it. 'Reductive.' 'Yes but why?' 'This misses the somatic component entirely.' She has been in conversation with this book for a while. The conversation is not over.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("nate") >= 0 || rest.indexOf("photo") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">There is a photograph of Nate tucked into the edge of the bookshelf, not prominently, not hidden. He is laughing at something -- laughing the way he laughs when he thinks nobody is watching, without performance. Brenda knows how to watch without being seen. It is a useful skill and a complicated one.</ansi>");
        return true;
    }

    if (cmd == "smoke" || (cmd == "look" && rest.indexOf("ash") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The ashtray holds a history of recent thought. Brenda smokes when she is working something out and she has been working something out for a while now. The cigarette burns to its filter and you stub it out. The room smells of it and of the books and the wine and LA air coming in through the window. It is not a comfortable room. It is a vivid one.</ansi>");
        return true;
    }

    return false;
}
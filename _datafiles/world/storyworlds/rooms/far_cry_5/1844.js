// Far Cry 5 - Falls End Church
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The candlelight diffuses into the Grand Library's warmer light. The crooked cross blurs last, keeping its imperfect angle until the very end. Then the shelves close in, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves in candlelight and stained-glass color, vanishing from the church.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "kneel" || cmd == "pray") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You kneel in the pew. The kneeler is worn smooth. Many people have knelt here. Before Eden's Gate, during Eden's Gate, after. The church is what it is regardless of what it has been used for. The crooked cross hangs above. Something about its imperfection is the most honest thing in the room.</ansi>");
        return true;
    }

    if (cmd == "read" && (rest.indexOf("bible") >= 0 || rest.indexOf("book") >= 0 || rest.indexOf("altar") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The Bible on the altar is open to Revelation. You read the passage: 'And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away.' The margins have no annotations. Someone left it open here deliberately, or it fell open here. Either way, it is the passage Joseph Seed has built an empire on. The difference between the text and what he made of it is the distance between a word and a weapon.</ansi>");
        return true;
    }

    return false;
}

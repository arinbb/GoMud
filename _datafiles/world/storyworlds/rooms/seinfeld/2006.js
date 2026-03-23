
// Seinfeld - The Back Booth
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The booth dissolves. The table, the window, the napkin dispenser -- all of it returns to the reel. The Grand Library waits.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the back booth, leaving an unfinished thought hanging in the air.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit") {
        var spots = [
            "You sit in Jerrys usual spot. From here you can see the door and have an opinion about everyone who walks in.",
            "You sit in Georges spot. The table is slightly sticky here. It has always been slightly sticky here. You eat something.",
            "You sit in Elaines spot. From here you can reach the napkin dispenser and roll your eyes at the widest possible angle.",
            "You sit in Kramers spot. You lean back. You prepare to say something that nobody has asked you to say. It will be a scheme."
        ];
        var pick = Math.floor(Math.random() * spots.length);
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">" + spots[pick] + "</ansi>");
        return true;
    }

    return false;
}

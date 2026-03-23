// Best in Show - Fleck Room
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Fleck room dissolves warmly -- the catalog, the two left shoes, Winky on the pillow -- all folding back into the film canister. The Grand Library returns around you, solid and unhurried.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " gives Winky a goodbye pat and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pet" || cmd == "pat") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach down to pat Winky. He rolls slightly to give you better access and wags his tail in a way that says: this is correct, please continue. Gerry watches with a paternal smile. Cookie says \"He likes you.\" She sounds delighted.</ansi>");
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("catalog") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look at the fly-fishing catalog. Gerry leans over. 'See those?' He points to the circled flies. 'Elk Hair Caddis, Adams, and a Blue-Winged Olive. Those are the three. That's all you need, really.' He pauses. 'Well, and a Hare's Ear. But the three I said first.'</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("shoes") >= 0 || rest.indexOf("feet") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Cookie notices you looking at the shoes. 'Two left feet,' she says pleasantly. 'Actual medical thing. Gerry found me shoes in Vermont. He drove to Vermont.' She says this in the tone of someone describing an act of heroism. Gerry shrugs like it was nothing, which it wasn't.</ansi>");
        return true;
    }

    return false;
}

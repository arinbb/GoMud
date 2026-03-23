// MTVs The State - Captain Monterey Jacks Ship (2383)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The ship recedes. The Captain watches you go with an expression that suggests he expected nothing else, which was itself a form of hope that has now been slightly disappointed. The Grand Library. Oh, the human race.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the deck. The Captain stares at where they were.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "say" && rest.toLowerCase().indexOf("human race") >= 0) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Captain Monterey Jack turns slowly to face you.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">\"Yes,\" he says. \"Oh, the human race.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">He turns back to the sea. You have said the thing. He has confirmed it. This is solidarity.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " says something about the human race. Captain Monterey Jack turns and says \"Yes.\" and turns back.", user.UserId());
        return true;
    }

    if (cmd == "sigh" || cmd == "groan") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You sigh. The Captain sighs in return. It is the most profound exchange of this voyage.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sighs. Captain Monterey Jack sighs in perfect unison.", user.UserId());
        return true;
    }

    return false;
}

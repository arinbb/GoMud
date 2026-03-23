
// The Lamplighters Asteroid
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The lamp blazes once more behind you as you go. The Lamplighter does not see you leave. He is already extinguishing it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves as the lamp cycles on. The Lamplighter does not look up.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "help" || (cmd == "assist")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You offer to help. The Lamplighter pauses for exactly one second -- the first pause he has taken in an uncountable time. He looks at you. He nods. Then he lights the lamp, extinguishes it, lights it, extinguishes it, and the moment has passed. He could not stop even if he wanted to. But he saw you. That is something.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " offers to help the Lamplighter. For one moment, he pauses.", user.UserId());
        return true;
    }

    if (cmd == "ask" && (rest.indexOf("rest") >= 0 || rest.indexOf("stop") >= 0 || rest.indexOf("why") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">'Why do you not rest?' The Lamplighter glances up briefly. 'Orders,' he says. The lamp goes dark. He relights it. 'Could you not ask for new orders?' 'That is not my job,' he says. 'My job is the lamp.' He extinguishes it. 'It was better before,' he adds, in the darkness. 'There used to be only two lamps to light per day.' The lamp blazes. He says nothing more.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(230) && user.GetMiscCharacterData("lp_visited_lamplighter") != "yes") {
        user.SetMiscCharacterData("lp_visited_lamplighter", "yes");
        user.Command("quest advance 230");
    }
    return false;
}


// The Kings Asteroid
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You bow slightly to the King -- it seems only right -- and the asteroid dissolves into watercolour and library ceiling.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " bows to the King and dissolves into starlight.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit, as commanded. The King nods with immense satisfaction. He has issued an order and it has been obeyed. This is a very fine moment for him.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits, as commanded. The King seems pleased.", user.UserId());
        return true;
    }

    if (cmd == "bow" || (cmd == "kneel")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You bow. The King inclines his head. He takes this as his due. 'Good,' he says. 'Obedience is the foundation of order.'</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " bows to the King, who accepts the homage with dignified composure.", user.UserId());
        return true;
    }

    if (cmd == "ask" && (rest.indexOf("sunset") >= 0 || rest.indexOf("sun") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The King raises one finger. 'I shall order the sun to set. At... the appropriate moment. A king does not give orders that cannot be obeyed. That would be unreasonable.' He pauses and consults some inner calendar. 'You will have your sunset this evening. Around sunset time.'</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(230) && user.GetMiscCharacterData("lp_visited_king") != "yes") {
        user.SetMiscCharacterData("lp_visited_king", "yes");
        user.Command("quest advance 230");
    }
    return true;
}


// The Businessmans Asteroid
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You leave the Businessman to his numbers. The ledgers dissolve. The stars remain, as they were, belonging to no one.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps away from the ledgers and dissolves into starlight.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "count" || (cmd == "count" && rest.indexOf("star") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You try counting the stars. There are too many. You lose track around four hundred and thirty-seven. The Businessman glances up briefly. 'You have to be systematic,' he says, already looking back down. He has not helped you. He has stated a method. That is all he does.</ansi>");
        return true;
    }

    if (cmd == "ask" && (rest.indexOf("own") >= 0 || rest.indexOf("star") >= 0 || rest.indexOf("count") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Businessman looks up, impatient. 'I own them.' 'But what do you DO with them?' 'I count them.' 'But what good is that?' He frowns. 'I am rich.' 'But what good is being rich?' He stares at you. He has not been asked this before. He looks back at his numbers. 'I can buy more stars,' he says finally. He is satisfied. You are not.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(230) && user.GetMiscCharacterData("lp_visited_businessman") != "yes") {
        user.SetMiscCharacterData("lp_visited_businessman", "yes");
        user.Command("quest advance 230");
    }
    return false;
}

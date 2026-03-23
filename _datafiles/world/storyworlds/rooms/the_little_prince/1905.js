
// The Drunkards Asteroid
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You leave the bottles behind. The asteroid fades. The sadness, somehow, does not entirely go with it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps away from the bottles and dissolves into library light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ask" && (rest.indexOf("drink") >= 0 || rest.indexOf("why") >= 0 || rest.indexOf("shame") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Drunkard looks up. 'I drink,' he says carefully, 'to forget that I am ashamed.' You wait. 'Ashamed of what?' He considers. 'Ashamed of drinking.' He pours another glass. 'I see,' you say. He nods. 'So do I,' he says. He drinks.</ansi>");
        return true;
    }

    if (cmd == "drink") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up a bottle. It is empty. They are all empty. This is not a coincidence. This is the point.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(230) && user.GetMiscCharacterData("lp_visited_drunkard") != "yes") {
        user.SetMiscCharacterData("lp_visited_drunkard", "yes");
        user.Command("quest advance 230");
    }
    return false;
}

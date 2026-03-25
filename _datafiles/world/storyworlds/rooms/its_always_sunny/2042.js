// The Alley - Cricket territory
var LIBRARY_ROOM = 1;
var QUEST_ID = 300;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && user.GetMiscCharacterData("sunny_q_cricket") != "done") {
        user.SetMiscCharacterData("sunny_q_cricket", "done");
        user.Command("questadvance " + QUEST_ID);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Quest updated: You have found Cricket in the alley. Some things cannot be unseen.</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The alley blurs and the smell of garbage fades. Cricket's voice trails off mid-story. The fire escape becomes a sketch, then a suggestion, then nothing. You are back in the Grand Library, and you are glad to be there.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers in the alley light and dissolves, leaving only a faint smell of cheap beer behind.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

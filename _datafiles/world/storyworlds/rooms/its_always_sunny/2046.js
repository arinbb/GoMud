// Charlie and Franks Apartment
var LIBRARY_ROOM = 1;
var QUEST_ID = 300;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && user.GetMiscCharacterData("sunny_q_apartment") != "done") {
        user.SetMiscCharacterData("sunny_q_apartment", "done");
        user.Command("questadvance " + QUEST_ID);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Quest updated: You have visited Charlie and Frank's apartment. The cat food is open. The pullout couch has never been folded back in. Frank Reynolds chose this. This is important information about the human condition.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The apartment dissolves around you — the cat food cans, the crayon notes, the permanent pullout couch. Frank and Charlie's world closes like a book you are not sure you should have read. You are back in the Grand Library, which smells considerably better.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the apartment, leaving only the faintest smell of cat food behind.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

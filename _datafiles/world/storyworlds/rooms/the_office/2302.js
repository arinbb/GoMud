// The Office - Michael's Office
var LIBRARY_ROOM = 1;
var QUEST_ID = 380;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("office_visited_michael")) {
        user.SetMiscCharacterData("office_visited_michael", "yes");
        user.Command("quest 380 2", 0.5);
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You back out of Michael's office before he can launch into an anecdote. The Grand Library reassembles itself around you, blessedly quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips out of Michael's office while he is distracted by his own reflection in the plasma TV.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "look" && rest.indexOf("mug") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">World's Best Boss. You pick it up. It is heavier than expected. The coffee ring on the bottom is permanent. You feel, holding it, the full complicated weight of Michael Scott's life -- the loneliness, the love of people, the profound sincerity wrapped in complete unawareness. You set it back down carefully.</ansi>");
        return true;
    }
    return false;
}

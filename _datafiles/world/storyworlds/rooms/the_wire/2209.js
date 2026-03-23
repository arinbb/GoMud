// The Wire - City Hall
var LIBRARY_ROOM = 3;
var QUEST_ID = 350;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The mahogany and harbor light dissolve into static. The Grand Library materializes around you, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like static and vanishes from City Hall.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("money") >= 0 || rest.indexOf("budget") >= 0)) {
        if (user.GetMiscCharacterData("wire_quest5") != "done") {
            user.SetMiscCharacterData("wire_quest5", "done");
            if (user.HasQuest(QUEST_ID)) { user.GiveQuest(QUEST_ID); }
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You follow the budget. The money goes from the federal grant to the state allocation to the city line items to the department budgets to the contracts to the vendors. At each step, a portion disappears into a gap that is technically legal and practically corruption. You have followed the money. Lester Freamon would be satisfied. Quest updated.</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The budget sits on the credenza. The money flows where it flows. You have already followed it once. That is enough to know what you know.</ansi>");
        }
        return true;
    }

    return false;
}

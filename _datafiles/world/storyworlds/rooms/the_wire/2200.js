// The Wire - The Pit (entry room)
var LIBRARY_ROOM = 3;
var QUEST_ID = 350;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The courtyard bends and greys. The orange couch recedes into sprocket holes. The city folds away. The Grand Library materializes around you, warm and quiet and smelling of old paper.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like static and vanishes from the Pit.", user.UserId());
        user.SetTempData("visited_the_wire", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" && (rest.indexOf("couch") >= 0 || rest == "" || rest.indexOf("orange") >= 0)) {
        if (user.GetMiscCharacterData("wire_easter1") != "found") {
            user.SetMiscCharacterData("wire_easter1", "found");
            user.GrantXP(150, "sat on the orange couch");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit down on the orange couch. The springs are gone. The fabric is damp. The view from here is the whole Pit -- every doorway, every shadow, every angle of approach. You understand, sitting here, why this is where business gets done. The game makes a certain sense from the couch. +150 XP.</ansi>");
            SendUserMessage(user.UserId(), "");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit on the orange couch again. The springs are still gone. The view is the same. The game is the game.</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_the_wire";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        if (!user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
        }
        
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You step through the grey and into Baltimore. The air is damp brick and exhaust and something frying nearby. A lookout boy clocks you from a doorway. The orange couch waits by the fence like it has always been waiting. The corner has been the corner since before you arrived and will be the corner after you leave. Welcome to the Pit.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return false;
}

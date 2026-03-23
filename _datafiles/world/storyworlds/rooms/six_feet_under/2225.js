// Six Feet Under - The Fisher Kitchen
// Room 2225
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The smell of Ruth's cooking fades. The yellow light thins. The kitchen table, the refrigerator magnets, the stove -- all of it softens and the Grand Library takes shape around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pushes back from the kitchen table and steps away.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || cmd == "eat" || (cmd == "look" && (rest.indexOf("food") >= 0 || rest.indexOf("stove") >= 0 || rest.indexOf("cook") >= 0))) {
        if (!user.GetMiscCharacterData("sfu_easter_kitchen")) {
            user.SetMiscCharacterData("sfu_easter_kitchen", "found");
            user.GrantXP(150, "Having dinner at the Fisher table");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit down at the kitchen table. Ruth sets a plate in front of you without asking if you are hungry. The food is warm and real and slightly too much. You eat. Across the table, the family argues about something that does not matter and also matters completely. Ruth refills your glass. The kitchen smells like garlic and lemon and something that has been cooking since morning. This is what love looks like in this house: a plate, warm, set in front of you before you knew you needed it.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+150 XP: having dinner at the Fisher table)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit at the kitchen table. Ruth is cooking. The family is talking. This is what the center of the Fisher house looks like, sounds like, smells like. You could stay here a while.</ansi>");
        }
        return true;
    }

    if (cmd == "cook" || (cmd == "look" && rest.indexOf("stove") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Whatever Ruth has on the stove has been going for a long time. The bottom of the pan has developed a crust of concentrated flavor that is the whole point. She stirs it once, adjusts the flame slightly, and goes back to whatever she was thinking about. The food will be ready when it is ready. Ruth does not rush the stove.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("photo") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Among the photographs on the refrigerator is one of Nathaniel Sr. at a backyard barbecue, laughing at something off camera. He looks like himself in the way that photographs of the dead always look more like themselves than memory does. Ruth does not look at this photograph directly anymore. But she knows where it is.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(360) && !user.GetMiscCharacterData("sfu_quest_kitchen")) {
        user.SetMiscCharacterData("sfu_quest_kitchen", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have had dinner in the Fisher kitchen. The quest advances.</ansi>");
    }
    return false;
}
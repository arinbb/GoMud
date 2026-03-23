// Room 101 - betrayal easter egg and quest completion
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Room 101 fades. The cage fades. O'Brien's careful face fades last. You are back in the Grand Library, intact, unbroken. What Winston said in this room, you did not have to say. You were only visiting. This is the mercy of fiction: you can leave before the cage door opens.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from Room 101 before the end. Unlike Winston.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "say") {
        var lower = rest.toLowerCase();
        if (lower.indexOf("do it to julia") >= 0 || lower.indexOf("julia") >= 0 && (lower.indexOf("not me") >= 0 || lower.indexOf("her") >= 0)) {
            var key = "1984_room101_easter";
            if (user.GetMiscCharacterData(key) != "found") {
                user.SetMiscCharacterData(key, "found");
                user.GrantXP(300, "the betrayal");
                var questDone = user.GetMiscCharacterData("1984_quest_complete");
                if (questDone != "yes") {
                    user.SetMiscCharacterData("1984_quest_complete", "yes");
                    var paperweight = CreateItem(250);
                    user.GiveItem(paperweight);
                    user.GrantXP(5000, "Nineteen Eighty Four quest complete");
                    SendUserMessage(user.UserId(), "");
                    SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"Do it to Julia.\" The words come out. You heard them come out. You meant them. That is the point. Not that you said it under pressure, not that you had no choice, but that you meant it, down at the level where meaning lives, where the Party has been working all this time, the level where everything that happened in this room was always going to end up. O'Brien lowers the cage. He is satisfied. He has what he came for. You are broken in the correct direction. Winston loves Big Brother.</ansi>");
                    SendUserMessage(user.UserId(), "");
                    SendUserMessage(user.UserId(), "<ansi fg=\"red\">(+300 XP: The betrayal. +5000 XP: Nineteen Eighty Four complete. You receive a glass paperweight.)</ansi>");
                } else {
                    SendUserMessage(user.UserId(), "");
                    SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"Do it to Julia.\" You say it again. It is no less terrible the second time. It was always going to happen. It keeps happening.</ansi>");
                    SendUserMessage(user.UserId(), "<ansi fg=\"red\">(+300 XP: The betrayal)</ansi>");
                }
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"white\">The words sit in the room. O'Brien nods. The cage is lowered. It was always going to end here.</ansi>");
            }
            return true;
        }
    }

    return false;
}

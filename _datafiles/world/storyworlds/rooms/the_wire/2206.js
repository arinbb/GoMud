// The Wire - Hamsterdam
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Hamsterdam dissolves into grey. The Grand Library materializes around you, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like static and vanishes from Hamsterdam.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest == "") {
        if (user.GetMiscCharacterData("wire_easter5") != "found") {
            user.SetMiscCharacterData("wire_easter5", "found");
            user.GrantXP(150, "witnessed the free zone");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You look at Hamsterdam. You really look at it. And what you see is -- it is working. The dealers are here, yes. But three blocks over, for the first time in years, the kids can play outside at night. The old women sit on their stoops without fear. The crime statistics in the Western District are the best they have been in a generation. Bunny Colvin did a thing that cannot be defended and cannot be argued with. +150 XP.</ansi>");
            SendUserMessage(user.UserId(), "");
        }
        return false;
    }

    return false;
}

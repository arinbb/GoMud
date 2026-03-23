// The Wire - West Baltimore Street
var LIBRARY_ROOM = 3;
var QUEST_ID = 350;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">West Baltimore Street bends and greys. The row houses fold away. The Grand Library materializes around you, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like static and vanishes from the block.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "whistle" || (cmd == "listen" && rest == "")) {
        if (user.GetMiscCharacterData("wire_easter_omar_hint") != "heard") {
            user.SetMiscCharacterData("wire_easter_omar_hint", "heard");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You whistle -- or listen very carefully -- and catch it: a three-note signal drifting from somewhere between the row houses. Not quite music. A recognition call. If you know it, you know what it means. If you know what it means, there is a way through.</ansi>");
            SendUserMessage(user.UserId(), "");
        }
        if (room) {
            var exits = room.GetAllActors();
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The whistle hangs in the air. An alley becomes visible between two row houses -- just barely, just for those paying attention. You can go that way now.</ansi>");
        room.AddTemporaryExit("whistle", "a narrow alley (whistle)", 2215, 30);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("wire_quest3")) {
        user.SetMiscCharacterData("wire_quest3", "done");
        user.GiveQuest(QUEST_ID);
    }
    return false;
}

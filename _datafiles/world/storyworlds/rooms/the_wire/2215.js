// The Wire - Omars Alley (secret room)
var LIBRARY_ROOM = 3;
var QUEST_ID = 350;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The alley dissolves into static. Omar watches you go without comment. The Grand Library materializes around you, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like static and vanishes from the alley.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

function onEnter(user, room) {
    if (user.GetMiscCharacterData("wire_easter_omar") != "found") {
        user.SetMiscCharacterData("wire_easter_omar", "found");
        user.GrantXP(300, "found Omars Alley");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You followed the whistle. You found the alley. Omar does not look surprised to see you -- Omar is never surprised to see anyone, because Omar is always watching. He looks at you with the calm assessment of someone deciding whether you are relevant to his situation. He determines that you are not, which is the best possible outcome. You have entered Omars Alley. +300 XP.</ansi>");
        SendUserMessage(user.UserId(), "");
    }

    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("wire_quest6")) {
        user.SetMiscCharacterData("wire_quest6", "done");
        user.SetMiscCharacterData("souvenir_the_wire", "collected");
        user.GiveQuest(QUEST_ID);
    }
    return true;
}

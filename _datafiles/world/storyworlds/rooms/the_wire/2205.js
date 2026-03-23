// The Wire - The Vacants
var LIBRARY_ROOM = 3;
var QUEST_ID = 350;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The vacants dissolve into grey. The silence follows you a moment, then the Grand Library materializes, warm and lit and smelling of paper.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like static and vanishes from the vacants.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "search") {
        if (user.GetMiscCharacterData("wire_easter3") != "found") {
            user.SetMiscCharacterData("wire_easter3", "found");
            user.GrantXP(250, "searched the vacants");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You search the vacants. You find what you find in the vacants. Evidence of what was done here: brick dust in geometric lines, disturbed plaster in a shape that suggests weight laid down and then removed. The floor tells a story the floor was not asked to tell. You understand now why the Major Crimes Unit follows the bodies here. You understand why Marlo chose this. +250 XP.</ansi>");
            SendUserMessage(user.UserId(), "");
            if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("wire_quest4_quest")) {
                user.SetMiscCharacterData("wire_quest4_quest", "done");
                user.GiveQuest(QUEST_ID);
            }
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You search the vacants again. What you found before is still what was found. The houses do not change their testimony.</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    return false;
}

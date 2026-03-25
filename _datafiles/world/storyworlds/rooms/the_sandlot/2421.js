// The Sandlot -- Neighborhood Street (2421)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The summer light thickens and goes golden, then white. The elm trees fade. You are back in the Screening Room, the projector ticking quietly to a stop.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers in the heat and vanishes from the neighborhood street.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(440)) {
        var step = user.GetMiscCharacterData("sandlot_quest_step");
        if (!step || step == "0") {
            user.SetMiscCharacterData("sandlot_quest_step", "1");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You've arrived in the neighborhood. The sandlot is south. The whole summer is ahead of you.</ansi>");
        }
    }
    return true;
}

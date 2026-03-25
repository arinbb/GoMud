
// The Dark Staircase
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The narrow staircase blurs, the smell of lime fading to the smell of old paper. The tenement walls dissolve into library shelves. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " wavers on the dark staircase and fades back into the pages of the story.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (!user.HasQuest(180)) {
        user.GiveQuest(180);
    }
    return true;
}

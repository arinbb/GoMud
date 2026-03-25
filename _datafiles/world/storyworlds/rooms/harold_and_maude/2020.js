
// Harold and Maude - The Church (entry room)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The organ chord swells and the stained glass blurs into golden light. The smell of lilies fades, replaced by the warm dusty scent of library shelves. The church dissolves like a dream remembered backward, and you are standing among books again.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a shaft of stained-glass light and is gone, leaving only the faint scent of lilies.", user.UserId());
        user.SetTempData("visited_harold_and_maude", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_harold_and_maude";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        if (!user.HasQuest(290)) {
        user.GiveQuest(290);
        }
        
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The film begins in the middle of a funeral -- which is, of course, the perfect place to begin. You are sitting in the back of a small California church. An organ plays something mournful. A casket gleams at the front. A pale young man beside you watches the proceedings with eyes full of devotion. An old woman in a magnificent hat catches your eye and winks. Her name is Maude. She is seventy-nine years old and the most alive person in any room she enters. Welcome to Harold and Maude, 1971. The theme is life. The soundtrack is Cat Stevens.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
    }
    return false;
}

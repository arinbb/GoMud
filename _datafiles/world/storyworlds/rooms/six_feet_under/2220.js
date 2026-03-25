// Six Feet Under - Fisher and Sons Funeral Home (entry room)
// Room 2220
var LIBRARY_ROOM = 3;

function onEnter(user, room) {
    var visitedKey = "visited_six_feet_under";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        if (!user.HasQuest(360)) {
        user.GiveQuest(360);
        }
        
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The film reel begins to turn. The HBO title card fades. Then: a quiet street in Los Angeles, the way Los Angeles looks in early morning before the traffic makes it into something else. A green Victorian house. A sign that reads Fisher and Sons. Someone has died. You do not know them. They are the opening of every episode, the reminder that it happens to everyone, that it is happening right now, on this street, in this house, in this life. You step through the screen and the Los Angeles air is warm and a little dry and the porch of Fisher and Sons is under your feet.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The green Victorian house recedes. The Fisher and Sons sign fades into sprocket holes. The Los Angeles quiet dissolves into the warm hush of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back from the funeral home and fades from the quiet street.", user.UserId());
        user.SetTempData("visited_six_feet_under", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}
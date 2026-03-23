// Ministry of Love - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">The white corridor fades. The light fades. The Grand Library's warm lamplight replaces the fluorescent blaze and it is a relief so intense it is nearly pain. You are back. The books around you are intact, the past preserved, not corrected. You are grateful for the dark.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the white corridor and returns to the Library. Their face shows, just briefly, relief.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

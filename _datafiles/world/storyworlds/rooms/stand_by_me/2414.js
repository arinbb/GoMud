// Stand By Me -- The Road Home (2414)
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    // Quest completion check -- if all quest steps seen
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The road home fades. The amber light collapses. The mountains go grey and flat and gone. You are back in the Grand Library, and the smell of gravel dust and pine and summer 1959 clings to you for a moment longer than it should.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands on the road home for a long moment, then is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

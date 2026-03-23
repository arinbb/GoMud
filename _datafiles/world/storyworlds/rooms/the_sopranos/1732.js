
// The Sopranos - Dr. Melfis Waiting Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The white noise machine's hush expands until it fills everything. Then it stops, and the Grand Library is around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is called for their appointment and does not return to the waiting room.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("magazine") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You pick up a magazine. You read an article about a celebrity you know only vaguely. The article describes the celebrity's difficulties with something. The celebrity has resolved the difficulties. You put the magazine down. You feel exactly the same as before you picked it up, which is the correct feeling to take away from a waiting room magazine.</ansi>");
        return true;
    }

    if (cmd == "wait" || cmd == "sit") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You wait. The white noise machine breathes. The other patients sit with their private weights. The lamp holds its position in the corner. You are waiting for something and it will come when it comes.</ansi>");
        return true;
    }

    return false;
}

// Back to the Future -- The Peabody Farm
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Old man Peabody appears on the porch with a shotgun. The farm blurs and tilts as you back away, and then there is only the Grand Library and its very safe, very non-threatening shelves of books.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs away from the farm and disappears before old man Peabody can do anything about it.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "touch" || cmd == "look") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("pine") >= 0 || restLower.indexOf("tree") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You put your hand on the bark of one of the twin pines. It is solid. Real. Alive. In thirty years a mall will be named after it. In the very recent past, a time machine arrived next to its twin. The tree is indifferent to all of this.</ansi>");
            return true;
        }
    }

    return false;
}

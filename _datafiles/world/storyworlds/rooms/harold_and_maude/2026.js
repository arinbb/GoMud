
// Harold and Maude - Inside the Hearse
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The radio fades to static and then to silence. The velvet walls of the hearse blur and dissolve. The Cat Stevens song trails off into warm library air, and you are back among the shelves with the faint memory of a guitar chord.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the interior of the hearse like the last note of a Cat Stevens song.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen" || (cmd == "look" && rest == "radio") || cmd == "sing") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The radio plays Cat Stevens, warm and clear in the close velvet space: 'If you want to sing out, sing out. And if you want to be free, be free. There's a million ways to be, you know that there are.' Harold hums along without seeming to notice he is doing it. The song knows something. You can feel it.</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }

    return false;
}

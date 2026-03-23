
// The Andy Griffith Show - The Road to Myers Lake
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The pine road -- the resin smell, the fishing poles, the bait can -- fades into the warm quiet of the Grand Library. You can still smell pine. You will for a while.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sets the cane pole back against the pine, picks up the bait can, thinks better of it, and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "whistle" || cmd == "hum") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You whistle the theme. The pines accept it. A jay cocks its head from a branch. The bait can sits in its shade without comment. This is the right road to whistle on.</ansi>");
        return true;
    }

    return false;
}

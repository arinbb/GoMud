
// World 1-4 Castle - Quest advance on castle entry
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(210)) {
        user.Command("questadvance 210");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The lava-light fades. The fire bars stop rotating. The stone corridor softens into the comfortable hum of the Arcade. You are back in the Library, slightly warm from the castle heat.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates in the lava-light and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "touch" || cmd == "grab" || cmd == "take") && rest.indexOf("fire") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You reach toward a fire bar. The heat is immediate and total. You pull your hand back just in time. The fire bar continues its rotation, unperturbed. It has been doing this since 1985. It will be doing this long after you leave.</ansi>");
        return true;
    }

    return false;
}

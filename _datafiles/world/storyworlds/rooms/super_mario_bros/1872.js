
// World 8-1 The Long Run - Quest advance entering World 8
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(210)) {
        user.Command("questadvance 210");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The darker palette of World 8 dissolves. The gauntlet pauses. Every enemy freezes mid-movement. The pixels scatter and you are back in the Arcade, slightly tired in a way that feels like it was earned.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates in the World 8 light and dissolves back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

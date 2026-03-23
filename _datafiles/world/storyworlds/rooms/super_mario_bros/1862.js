
// World 1-2 End Zone - Flagpole
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The flagpole sways behind you. The fireworks burst one more time. The pixels scatter. You are back in the Arcade, the end-of-level fanfare playing on in memory.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates amid the fireworks and dissolves back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "grab" || cmd == "take" || cmd == "climb" || cmd == "slide") && rest.indexOf("flag") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You grab the flagpole and slide down. The flag descends with you. Fireworks burst overhead -- pop pop pop. The end-of-level fanfare plays. The score tallies. Every coin you collected, every second under the time limit, counted and celebrated. The castle door opens. Somewhere ahead, Toad is preparing his speech.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " grabs the flagpole and slides down as fireworks burst overhead.", user.UserId());
        return true;
    }

    return false;
}

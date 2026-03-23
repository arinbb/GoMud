var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The tempo slams to a halt and the strobe goes dark and you are back in the Grand Library, your heart still racing at the tempo of the fastest track on the record.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is launched out on a final guitar surge, returning to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dance" || cmd == "headbang" || cmd == "mosh") {
        SendUserMessage(user.UserId(), "<ansi fg=\"9\">You move with the room. The kick drum is in your feet, the guitar walls are in your arms, and Jimmy's fills arrive as your own body lurches sideways. For the duration of the song you are part of the rhythm section, not watching it but inside it, the fastest thing you have ever been part of. Your heartbeat will take a while to slow down.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " throws themselves into the rhythm of the fastest room on the album.", user.UserId());
        return true;
    }

    return false;
}

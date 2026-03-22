
// Rivendell - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The elven singing fades to a whisper. The waterfalls become the rustle of turning pages. Rivendell dissolves like a dream at dawn, and you find yourself back in the Grand Library, the music still echoing faintly in your memory.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades like the last note of an elven song, vanishing back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

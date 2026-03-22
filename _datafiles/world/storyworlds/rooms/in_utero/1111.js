
// Tourette's - Track 11
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The noise stops. Not fades -- STOPS. A hard cut to absolute silence that is almost more violent than the sound was. Your ears ring. Your hands shake. The strobe afterimages fade from your vision and the Grand Library materializes around you, calm and quiet, and your heart is still pounding.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by a final blast of white noise and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}


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

    if (cmd == "scream" || cmd == "yell" || cmd == "shout") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You scream. The room absorbs it completely, incorporates it into the existing noise, makes it part of the song. Nobody will know it was you. It was always going to be you. The feedback matches your frequency and amplifies. For one second you are louder than you have ever been and the room is louder still and none of it matters and all of it matters. Your throat is slightly raw. That is what honesty costs.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " adds their voice to the noise. The noise is grateful.", user.UserId());
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">There is nothing to listen to that is not already everywhere. But if you focus -- really focus -- you can hear the song underneath the noise. It is fifty-two seconds long. It is the shortest track on the album. It is the most direct. Every syllable is a blunt instrument. Some critics said it had no structure. It has the structure of a door flying off its hinges.</ansi>");
        return true;
    }

    return false;
}

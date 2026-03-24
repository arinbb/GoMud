
// Heart-Shaped Box - Track 3
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The garden folds inward -- flowers closing, boxes sealing, the throne sinking into the flesh-colored earth. The melody unravels note by note until only the root chord remains, and then that too is gone. You are in the Grand Library. The air smells clean. Too clean.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is pulled into a closing heart-shaped box and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "open") {
        if (rest.indexOf("box") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You open one of the heart-shaped boxes hanging from the dead tree. Inside is a dried sunflower and a folded piece of paper. The paper has a few lines written in cramped, urgent handwriting — a draft of lyrics, crossed out and rewritten. The final version reads: \"I wish I could eat your cancer when you turn black.\" The ink is smudged. Someone held this paper while crying.</ansi>");
            if (user.GetMiscCharacterData("easter_utero_box") != "found") {
                user.SetMiscCharacterData("easter_utero_box", "found");
                user.GrantXP(200, "opening the heart-shaped box");
            }
            return true;
        }
    }

    if (cmd == "sing") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You hum the melody. The garden responds -- flowers opening slightly toward you, the meat-colored sky pulsing once in time with the tune. The song has one of the great pop melodies of its decade, married to imagery that should not be beautiful but is. You can hear the cello line now, emerging from beneath the distortion, threading through the rot. It is patient. It has been waiting for you to notice it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " begins to hum. The garden leans in to listen.", user.UserId());
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stand still and let the song find you. The chorus is a sustained, anguished love letter and a terror simultaneously -- the specific vertigo of needing someone completely. The verses are quieter, observational, the notebooks of someone cataloging his own psyche with scientific distance. The cello at the end plays the root note and does not let go. It is the sound of loyalty refusing to leave.</ansi>");
        return true;
    }

    return false;
}

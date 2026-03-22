
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

    return false;
}

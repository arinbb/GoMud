
// I Want You - Track 5
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The doorbell rings once more as you dissolve. The door does not open. You are back in the Grand Library, the sound of desire fading in your ears.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the doorstep as the bell rings, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ring" || cmd == "knock" || cmd == "open") {
        if (rest.indexOf("door") >= 0 || rest.indexOf("bell") >= 0 || rest == "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The door does not open. The bell rings -- you did not press it, but it rings. It has been ringing since the song started. It rings on your behalf, on behalf of the whole long history of wanting, and the door remains closed, and the light under it remains unchanged. The guilty undertaker sighs somewhere behind you.</ansi>");
            return true;
        }
    }

    if (cmd == "wait") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You wait. The evening cools. The doorbell rings again. This is what the song is about. You are living inside it correctly.</ansi>");
        return true;
    }

    return false;
}

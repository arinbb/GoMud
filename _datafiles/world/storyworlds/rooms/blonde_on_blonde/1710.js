
// Temporary Like Achilles - Track 10
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You step back from the door. The light under it remains unchanged. The door remains closed. You dissolve back to the Grand Library, and the door does not open behind you as you go.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back from the closed door and dissolves back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "knock" || cmd == "open") {
        if (rest.indexOf("door") >= 0 || rest == "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You knock. The sound is clear and definite. The door does not open. There is no sound from within -- not silence exactly, the absence of response, which is different from silence. You have knocked. The door has registered the knock. The door has rendered its decision. The light under it remains unchanged.</ansi>");
            return true;
        }
    }

    if (cmd == "wait" || cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You wait outside the door. Achilles sat before Troy for years. You have been here one song. The door does not distinguish between one song and years. The door is honey-shut. You are honey-blind. These are the exact words for the exact state you are in. The light under the door is unchanged. You wait.</ansi>");
        return true;
    }

    return false;
}

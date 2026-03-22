
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

    return false;
}

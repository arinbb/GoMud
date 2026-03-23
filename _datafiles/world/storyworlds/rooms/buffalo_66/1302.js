
// Buffalo '66 - Layla's Dance Studio
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The mirrors in the studio reflect something else now — frames of film, flickering and dissolving. You step through the reflection and into the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into the studio mirrors and dissolves into flickering light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dance" || cmd == "tap") {
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">You try a few steps on the hardwood floor. The sound of your feet echoes in the empty studio, sharp and rhythmic. For a moment, the mirrors reflect someone who knows what they are doing. Then you stop, and the silence rushes back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " tries a few dance steps on the hardwood floor.", user.UserId());
        return true;
    }

    return false;
}

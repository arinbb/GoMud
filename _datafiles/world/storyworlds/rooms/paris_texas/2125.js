
// Paris, Texas - The Road to Houston
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The truck keeps going east but you do not. The road stays. The sky stays. The father and the boy in the front seat stay, moving toward Houston and what waits there. You return to the library, where everything is still.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps out of the moving truck somehow and stands in the road as it drives away, then fades.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

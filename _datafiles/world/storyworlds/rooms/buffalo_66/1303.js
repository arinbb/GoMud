
// Buffalo '66 - Gas Station Bathroom
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fluorescent light flickers one final time and the bathroom dissolves into frames of grey film. The Grand Library assembles itself around you, warm and dry.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes as the fluorescent light sputters out.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

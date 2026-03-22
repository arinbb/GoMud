
// Misty Mountain Pass - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The howling wind and crashing thunder fade. The mountains dissolve into ink and parchment, and you tumble safely back into the warm, dry Grand Library. Your ears are still ringing.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swept away by the storm winds and vanishes in a swirl of snow and pages.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

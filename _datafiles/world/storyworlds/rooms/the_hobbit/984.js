
// Desolation of Smaug - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The ash and desolation swirl upward like smoke, becoming grey ink on parchment. The Lonely Mountain flattens into an illustration. The thrush taps once more, and you are back in the Grand Library, your boots clean of ash.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is lost in a swirl of ash and cinders that resolves into turning pages, vanishing back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

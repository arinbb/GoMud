// Dennis and Macs Apartment
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The apartment dissolves — Dennis's mirrors, Mac's karate poster, the two sides of a shared space. The negotiations and the tensions and the careful territorial arrangements all fade. You are back in the Grand Library. The poster's fighter is still in your memory, mid-kick, excellence printed below.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers out of the apartment, the mirrors going dark behind them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

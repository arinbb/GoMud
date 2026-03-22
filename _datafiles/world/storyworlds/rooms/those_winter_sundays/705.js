
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The frozen yard blurs. The chopping block, the axe, the empty clothesline — all fade like breath in cold air. You are back in the warmth of the Grand Library, carrying with you a new understanding of love's quiet labor.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into the cold and vanishes like breath in winter air.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

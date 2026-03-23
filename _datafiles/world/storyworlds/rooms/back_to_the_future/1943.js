// Back to the Future -- The Clock Tower
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">A bolt of lightning fractures the sky directly overhead. For a blinding instant everything is white and electric and 1955. Then the light contracts to a single bright point, and you are standing in the Grand Library, smelling of ozone and rain.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes in a crack of thunder, leaving only the smell of lightning behind.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

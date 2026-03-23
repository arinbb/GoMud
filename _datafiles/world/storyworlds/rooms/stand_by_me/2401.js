// Stand By Me -- Castle Rock Main Street (2401)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The main street of Castle Rock shimmers at the edges. The barbershop pole slows. The projected light collapses to a rectangle, then nothing. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " blurs at the edges like a photograph in the sun and fades from Castle Rock.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

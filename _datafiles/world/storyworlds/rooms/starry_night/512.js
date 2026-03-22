
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You walk toward the edge of the meadow where the paint thins and the world becomes abstract color. You step through the boundary of the painting and find yourself back in the Grand Library, the scent of oil paint lingering on your clothes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks to the edge of the meadow and steps through the boundary of the painting, vanishing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

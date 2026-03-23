
// The Sopranos - Route 21 / New Jersey Highway
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The highway traffic blurs into streaks of light. The strip malls peel away like old signage. The Grand Library reassembles around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " merges into the highway traffic and does not reappear.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drive" || cmd == "go" && rest.indexOf("pines") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You could head out toward the Pine Barrens. Everyone ends up there eventually.</ansi>");
        return false;
    }

    return false;
}


// Matilda - Road to Crunchem Hall
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The hedgerows lean in and the road narrows to a single point of light. You walk toward it and find yourself stepping through the warm glow into the Grand Library, leaving the road to Crunchem Hall behind.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks into the hedgerows and disappears between the leaves, gone like a half-remembered thought.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

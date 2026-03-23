
// Forbidden Planet - The Desert Approach
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The alien rock formations blur and dissolve into film grain. The desert road unspools backward beneath your feet. The Grand Library reconstitutes itself around you, smelling of dust and old paper.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers in the alien heat haze and fades back into the projector light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

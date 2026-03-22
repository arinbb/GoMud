
// Beorn's Hall - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The smell of honey and fresh bread fades. Beorn's great hall dissolves like a watercolor in rain, the carved animals blurring into letters on a page. You find yourself back in the Grand Library, still tasting honey on your lips.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is surrounded by a swarm of golden bees that carry them away in a cloud of buzzing light, back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

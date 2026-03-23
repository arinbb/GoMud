
// Matilda - Trunchbull's Office
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The trophies on the walls begin to rattle and spin. The canes on the rack clatter together like wind chimes. The room spins, the Trunchbull's office dissolving into warm golden light, and you find yourself safely in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swept up in a whirlwind of rattling trophies and clattering canes, vanishing from the office entirely.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

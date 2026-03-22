
// Truck Stop Diner
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The neon signs flicker and go dark. The diner fades around you like a dream you're waking up from. The Grand Library materializes, smelling considerably less like coffee and pie.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves a tip on the counter and fades away like a ghost.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

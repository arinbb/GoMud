
// Bus Station Restroom - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fluorescent buzz fades, the cracked tiles dissolve, and the bus station restroom -- mercifully -- disappears back into the pages of the novel. You are in the Grand Library, and you have never been more grateful for it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " escapes the bus station restroom in the only dignified way possible -- by vanishing back into the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}


// Buffalo '66 - Strip Club
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The red light dims to black and then brightens into the warm glow of the Grand Library. The bass fades. The smoke clears.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears into the smoke and red light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

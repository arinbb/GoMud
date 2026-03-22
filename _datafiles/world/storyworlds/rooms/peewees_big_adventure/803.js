
// Madame Ruby's Fortune Parlor
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The crystal ball flares with bright light, the incense smoke thickens, and when it clears you are standing in the Grand Library. The scent of sandalwood lingers on your clothes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes in a puff of incense smoke.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}


// Paris, Texas - A Houston Street
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The neon signs blur into a long smear of color — cyan and pink and the amber of the diner window — and then the smear becomes the projector beam and the projector beam becomes the library ceiling and you are back in the quiet, book-smelling dark.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " blurs into the neon smear and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

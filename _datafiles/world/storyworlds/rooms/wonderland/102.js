
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The tears in the pool rise up around you like a wave of liquid words. They carry you upward and outward, and when the water drains away you find yourself dry and warm in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swept up by a wave from the Pool of Tears and vanishes in a splash of shimmering text.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "swim") {
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">You wade into the Pool of Tears. The water is warm and salty, reaching up to your chin. The Mouse paddles over and gives you a disapproving look. 'I wish you hadn't done that,' it says primly.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " wades into the Pool of Tears, drawing a disapproving look from the Mouse.", user.UserId());
        return true;
    }

    return false;
}

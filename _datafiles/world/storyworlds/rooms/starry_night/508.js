
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The stars surge around you, their spirals accelerating into a vortex of blue and gold. You fall through the painted sky, through layer after layer of color, until you land softly in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " falls into the swirling stars and vanishes in a burst of celestial light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "touch" || cmd == "reach") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach out toward the nearest star. Your fingers sink into thick, warm paint — cadmium yellow, still wet after over a century. The light wraps around your hand for a moment, tingling, before you pull away. A faint smear of gold remains on your fingertips.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches out to touch a star, fingers trailing through golden light.", user.UserId());
        return true;
    }
    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"14\">You step upward and the ground falls away. The cypress tree shrinks below you. The village becomes a cluster of tiny rooftops. And the stars — the stars are everywhere, immense and blazing, turning around you in their eternal spirals.</ansi>");
    return false;
}

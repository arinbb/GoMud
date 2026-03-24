
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The sleeping village wraps around you like a blanket, then softens and dissolves. The painted houses melt into color, and you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sinks into the painted shadows and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "touch" || cmd == "feel") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You touch the wall of the nearest house. Thick impasto, the ochre paint applied in short confident strokes that follow the direction of the light. The texture is remarkable -- not smooth, not flat, but alive with the physical fact of paint being pushed across canvas by a bristle brush held in a specific hand at a specific moment in 1889. You are touching that moment.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " touches the painted house wall, fingers tracing the impasto brushstrokes.", user.UserId());
        return true;
    }

    if (cmd == "look" && (rest.indexOf("sky") >= 0 || rest.indexOf("star") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">You tilt your head back. Between the rooftops, the starry night presses down -- the familiar spirals and halos framed by painted eaves and chimneys. The village exists beneath the sky in a state of total unconscious acceptance. The people inside these houses, sleeping their painted sleep, will never see the sky the way it looks tonight. Only you see it. Only you and Vincent.</ansi>");
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The village is almost perfectly silent. A clock ticks somewhere, measuring nothing. Somewhere above, the stars make no sound but their light has a quality that you could almost call audible -- if you understood what frequency beauty operates at. The cafe to the south glows and hums. Everything else sleeps.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You reach up and add a warm light to a dark window -- a small painted candle glow, amber against the dark rectangle. The village stirs slightly, as if aware that someone inside has stayed up late. Your addition is small but it changes the whole: now there is a house where someone is awake, keeping a vigil you invented. Vincent would not have painted it. It is yours.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " paints a faint light into a dark window of the sleeping village.", user.UserId());
        return true;
    }

    return false;
}

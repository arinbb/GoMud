
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fireflies swirl around you, their light growing brighter until it fills your vision. The orchard dissolves into golden light, and you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is enveloped by a cloud of fireflies and vanishes in a burst of golden light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "touch" || cmd == "feel") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You rest your hand against the nearest olive tree. The bark is a mass of twisted brushstrokes -- gray, brown, blue-green, each one following the grain of the wood but finding its own angle. The paint is thick enough to read with your fingers like Braille. You trace one of the longest strokes, following it from root to canopy: a single unwavering gesture, ten inches long, made without hesitation.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " traces the painted grain of an olive tree with slow, careful fingers.", user.UserId());
        return true;
    }

    if (cmd == "smell" || cmd == "sniff") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Almonds, definitely. That slight sweetness that olive groves carry in the warm months. And underneath it, the paint smell: linseed oil and turpentine catching in the back of your throat. The fireflies add something faintly electrical, like a warm evening before a storm. You breathe it all in. Provence and paint. It is a specific combination.</ansi>");
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stand still in the orchard and listen. Fireflies click and pulse -- or seem to. The nightingale sings its three clear notes from somewhere deeper in the trees, waits, and sings them again. The leaves of the olive trees have a specific sound in a painted wind: not rustling exactly, more like a soft collective exhalation. The orchard breathes around you.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You add a firefly to the orchard -- a small warm daub of cadmium yellow between two olive branches. The painting gains one more light, one more small pulse of warmth in the dark. The new firefly drifts. You have added life to a place that was already alive with it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " adds a firefly to the orchard -- a small point of yellow light between the olive branches.", user.UserId());
        return true;
    }

    return false;
}

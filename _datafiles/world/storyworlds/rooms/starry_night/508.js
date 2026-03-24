
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
    if (cmd == "look" && (rest.indexOf("star") >= 0 || rest.indexOf("sky") >= 0 || rest.indexOf("moon") >= 0 || rest.indexOf("spiral") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">You look. From here, surrounded by them, you understand why Vincent saw the stars as he did: not as distant cold points but as blazing presences, each one a world of light turning in the dark. The spirals connect everything -- star to star, star to moon, moon to the flowing river of the Milky Way. Nothing is isolated. Everything turns together. He painted a universe that cares.</ansi>");
        if (user.GetMiscCharacterData("starry_sky_close") != "found") {
            user.SetMiscCharacterData("starry_sky_close", "found");
            user.GrantXP(200, "seeing the stars from inside the sky");
        }
        return true;
    }

    if (cmd == "smell" || cmd == "sniff") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Up here there is no earth-smell, no village-smell. Only paint: prussian blue, zinc white, cobalt, cerulean. The specific palette of the night sky. You breathe pure pigment and the cold between stars. It has a clarity that nothing at ground level matches.</ansi>");
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The stars do not make sound. But the spirals between them have a quality that suggests sound -- the way a held note suggests a singer still breathing somewhere. You stand in the sky of Starry Night and imagine that the universe has a frequency, and that Vincent spent his life trying to paint it, and that what you are standing in is the closest anyone has come.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You add a stroke to the space between two stars -- a fine ribbon of white leading from one halo to another. The connection you paint is immediately absorbed into the existing spiral currents, carried along by the great celestial motion. You have joined the sky to itself in one more place. The painting does not notice. The painting has always contained this stroke, waiting for you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches up and paints a thread of light between two blazing stars.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"14\">You step upward and the ground falls away. The cypress tree shrinks below you. The village becomes a cluster of tiny rooftops. And the stars — the stars are everywhere, immense and blazing, turning around you in their eternal spirals.</ansi>");
    return false;
}

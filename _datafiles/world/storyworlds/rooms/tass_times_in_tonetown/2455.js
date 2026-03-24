// Tass Times in Tonetown -- Tass Avenue (2455)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The music from the storefronts fades together into a single chord that goes quiet. The avenue recedes. You are back in the Arcade with the specific satisfaction of having been on a very good street.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from Tass Avenue between one note and the next.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "climb") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The fire escape ladder on the north-facing building is right there -- bright magenta metal, perfectly maintained for exactly this purpose. You climb. Each landing gives you a slightly better view of the city. By the top, all of Tonetown is visible below you and to the south: the neon grid of downtown giving way to the grey incursion at the swamp. You are on the rooftops.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " grabs the fire escape ladder and climbs toward the rooftops with clear purpose.", user.UserId());
        user.MoveRoom(2464);
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You stop moving and just listen to Tass Avenue. The layers resolve: from the east, a synth bass line with a geometric melody above it. From the west, angular guitar work and a drum machine running at a conviction-driven tempo. From the storefronts, four different songs that somehow form a chord together. From above, wind carrying a melody you cannot quite locate. This is the sound of a place that loves music personally, not as background.</ansi>");
        return true;
    }

    return false;
}

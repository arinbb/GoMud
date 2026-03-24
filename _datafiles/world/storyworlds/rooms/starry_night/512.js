
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You walk toward the edge of the meadow where the paint thins and the world becomes abstract color. You step through the boundary of the painting and find yourself back in the Grand Library, the scent of oil paint lingering on your clothes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks to the edge of the meadow and steps through the boundary of the painting, vanishing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "look" && (rest.indexOf("star") >= 0 || rest.indexOf("sky") >= 0)) {
        var easterKey = "starry_sky_gaze";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(250, "truly seeing the starry night");
            SendUserMessage(user.UserId(), "<ansi fg=\"12\">You look up. Really look. The sky is not a sky -- it is a living thing. Each star is a thick spiral of impastoed paint, glowing from within, spinning slowly like pinwheels of light. The moon is a crescent of pure cadmium yellow surrounded by concentric rings of cobalt and white. The Milky Way rolls across the heavens like a luminous river. You have never seen the sky before. Not really. Not until now.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+250 XP — The starry night, seen truly.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"12\">You look up again. It is just as overwhelming as the first time. Maybe more.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " looks up at the sky and stands very still for a long time.", user.UserId());
        return true;
    }
    if (cmd == "touch" || cmd == "feel") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You kneel and run your fingers through the meadow grass. Long, flowing strokes of dark green and blue -- the paint applied in the direction of the wind, each stroke a record of motion. At the meadow's edge, where the paint thins, the canvas shows through in places: bare ground, the support beneath the image. You are kneeling at the boundary of the world.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " kneels and runs fingers through the painted grass, feeling where the paint thins at the world's edge.", user.UserId());
        return true;
    }

    if (cmd == "smell" || cmd == "sniff") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The meadow smells of damp earth and paint, of grass at night, of the edge of things -- that particular atmospheric quality of standing at the last reliable ground before the world becomes abstract. You breathe in the smell of a painting's margin, where the artist's attention was total even as the world itself was running out.</ansi>");
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You listen to the meadow. The grass moves in the painted wind with a sound like very distant applause. Beyond the meadow's edge, where the paint thins into pure color, there is a faint sound you cannot identify -- something between music and weather. It might be the sound of the universe at its most uninterpreted. Or it might be nothing. The painting does not say.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You kneel at the meadow's edge and add paint where the canvas shows through -- dark green, the color of grass at night, in a long flowing stroke that follows the wind's direction. The boundary retreats slightly. The world is a little larger now. A little more committed to existing. You have extended the painting's claim on reality by one brushstroke.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " kneels at the meadow's edge and extends the painting outward by one brushstroke.", user.UserId());
        return true;
    }

    return false;
}

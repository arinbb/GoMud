
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The clashing colors of the cafe intensify until they overwhelm your senses -- red, green, yellow all bleeding together into a white light. When it fades, you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is consumed by the cafe's garish light and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "drink" || cmd == "order") {
        var easterKey = "starry_absinthe";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "drinking at the Night Cafe");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You order a glass of absinthe. The green liquid catches the gaslight and seems to glow from within. As you drink, the colors around you intensify -- the red walls pulse, the green ceiling deepens, the billiard table glows. You understand now why he called this a place where one can ruin oneself, go mad, or commit a crime.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — The Night Cafe.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You drink again. The colors are just as vivid the second time.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " orders a drink and stares into the swirling green depths.", user.UserId());
        return true;
    }
    if (cmd == "touch" || cmd == "feel") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You touch the red wall. The paint vibrates -- not literally, but the color itself seems to have a frequency, a low aggression that moves through your palm. Vincent described this red as expressing the terrible passions of humanity. Under your fingers it feels like that: warm, slightly nauseating, undeniably alive. You take your hand away feeling slightly compromised.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " touches the red wall and holds still, feeling the color's weight.", user.UserId());
        return true;
    }

    if (cmd == "smell" || cmd == "sniff") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Absinthe, cheap wine, tobacco smoke, and gas light -- the specific atmosphere of places where people go when they have nowhere else to be. And underneath it all, linseed oil, the truth of the medium. You are standing in a painting of a place that smelled like loss. The paint adds its own honest note.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("color") >= 0 || rest.indexOf("red") >= 0 || rest.indexOf("green") >= 0 || rest.indexOf("wall") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">You really look at the colors. Red walls, green ceiling, yellow-green floor -- they do not harmonize, they argue. Vincent chose complementary colors placed at maximum contrast to create a sense of psychological agitation. This painting was not meant to be pleasant to look at. It was meant to make you feel what these particular humans, in this particular place, at this particular hour, felt. It works.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You add a stroke of red to the wall -- matching the existing color, deepening a shadow. Immediately the room feels more oppressive, more enclosed. You have contributed to the terrible passions of humanity. You put the brush down. Some paintings are better left alone. Vincent would disagree. Vincent painted this place anyway.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " adds a brushstroke to the red wall, deepening a shadow.", user.UserId());
        return true;
    }

    return false;
}

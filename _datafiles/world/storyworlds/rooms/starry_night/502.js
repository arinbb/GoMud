
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The sleeping village fades like a dream at dawn, its painted walls dissolving into streaks of color. You find yourself back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a shimmer of painted light and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "touch" || cmd == "feel") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You run your fingers along the wall of the nearest house. The stone is thick impasto -- ridges of paint catching your fingertips, each one a brushstroke laid with conviction. Prussian blue in the shadows, warm ochre in the lit surfaces. You feel the physical evidence of a decision: this wall should be this color, at this moment, in this light.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " runs a hand along the painted wall, feeling the impasto ridges.", user.UserId());
        return true;
    }

    if (cmd == "look" && (rest.indexOf("sky") >= 0 || rest.indexOf("star") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">Between the rooftops, a strip of the churning sky is visible -- stars blazing in their halos, the moon brilliant in the upper right. The village sleeps through all of it, unaware. The contrast is deliberate: the cosmic drama above, the ordinary human settlement below. The painting holds both without hierarchy. Both are equally observed. Both are equally loved.</ansi>");
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stand at the village edge and listen. Wind, very faint, moving through the wheat fields to the west. An owl, distant. The creak of a shutter that swings once and settles. The village breathes in its sleep -- slowly, evenly, the breath of people who do not know they are being painted, who will not know until long after the painter is gone.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You make a small addition to the cobblestones -- a fleck of reflected starlight, a warm yellow daub against the cool gray. The painting accepts it. The cobblestones now catch the stars just slightly more. Vincent would approve of attending to this particular truth: starlight falls on everything, even the ordinary stones of a sleeping village.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " adds a touch of yellow to the cobblestones, a fleck of starlight caught.", user.UserId());
        return true;
    }

    return false;
}

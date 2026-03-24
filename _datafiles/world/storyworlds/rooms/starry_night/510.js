
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The alley's shadows deepen and expand, swallowing the cobblestones, the walls, the strip of starry sky. When the darkness lifts, you stand in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into the alley's shadows and does not emerge.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "touch" || cmd == "feel") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You run a hand along the alley wall. The cobblestones and plaster are rendered in cool purples and midnight blues, painted with quick assured strokes that create shadow through color rather than contrast. You feel the ridges where paint was applied generously, the slight hollows where the brush lifted away. You are feeling a decision: to render darkness not as absence but as a different kind of presence.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " traces a hand along the alley wall, feeling the painted shadows.", user.UserId());
        return true;
    }

    if (cmd == "look" && (rest.indexOf("sky") >= 0 || rest.indexOf("star") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">Between the rooftops above the alley, a narrow strip of the starry sky is visible. Framed by the walls on both sides, the effect is even more dramatic -- a blazing river of cosmic light glimpsed through the most ordinary of human corridors. The stars look down at you. The alley looks up at them. Neither is diminished by the encounter.</ansi>");
        return true;
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stand still in the alley and listen. A cat moves somewhere above. The Night Cafe murmurs to the north, voices and the clink of glass. From the east, very faint: the scratch of a brush on canvas. Someone is awake in there, working in the lamplight. Working without stopping. Working because they cannot stop.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You add shadow to the alley -- a deep purple-blue pooling in a doorway corner. The alley deepens slightly, becomes more intimate, more secret. Your shadow makes the golden light under the hidden door seem brighter by contrast. Some paintings improve in the adding of dark. This is one of them.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " paints shadow into the alley corner, deepening the dark.", user.UserId());
        return true;
    }

    return false;
}

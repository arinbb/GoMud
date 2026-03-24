
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The oil lamp flares once, brilliantly, and the studio fills with golden light. The canvases on the walls seem to open like windows, each one a doorway to another painted world. Then the light fades, the studio dissolves, and you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is bathed in golden lamplight and fades from the studio like a drying brushstroke.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "read" && rest.indexOf("letter") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up one of the letters and read:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"Dear Theo,</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">I often think that the night is more alive and more richly colored than the day. Looking at the stars always makes me dream. Why, I ask myself, shouldn't the shining dots of the sky be as accessible as the black dots on the map of France?\"</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">The letter is signed simply: Vincent.</ansi>");
        return true;
    }
    if (cmd == "touch" || cmd == "feel") {
        if (rest.indexOf("canvas") >= 0 || rest.indexOf("easel") >= 0 || rest.indexOf("paint") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach out and touch the surface of the canvas on the easel. The paint is fresh -- thick, ridged, the swirling sky depicted in deep relief. You can feel each stroke: short, layered, applied at speed by someone who knew exactly what he wanted and was running out of time to want it. Your fingertip comes away yellow and blue. You have touched the actual work.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches out and carefully touches the wet canvas on the easel.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up one of the leaning canvases and hold it. It is lighter than you expected -- wood stretcher bars and linen, not heavy. But the paint is thick enough that the canvas is its own archive, a physical record of every decision made in this room. You set it back carefully. You were holding years of desperate work.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lifts one of the canvases carefully and holds it a moment before setting it back.", user.UserId());
        }
        return true;
    }

    if (cmd == "smell" || cmd == "sniff") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Turpentine, sharp and penetrating. Linseed oil, heavy and sweet. The specific smell of painting in a small enclosed space -- accumulated over weeks, absorbed into the walls and the sheets and the straw hat on the chair. Paint thinner, pine-based, the solvent of a specific era. You breathe in the concentrated atmosphere of one man's absolute commitment to seeing and recording what he saw.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You pick up a brush from the palette shelf, loaded with cobalt blue. You add a single, careful stroke to the night sky on the canvas -- following the existing spiral motion, matching the scale and pressure. The stroke sits exactly right. You set the brush back down. You have painted in Vincent van Gogh's studio, in Vincent van Gogh's style, on Vincent van Gogh's canvas. You are not sure how to feel about that, but you feel it strongly.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " picks up a brush and adds one careful stroke to the canvas on the easel.", user.UserId());
        if (user.GetMiscCharacterData("starry_painted_studio") != "found") {
            user.SetMiscCharacterData("starry_painted_studio", "found");
            user.GrantXP(200, "painting in Vincent's studio");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.GetMiscCharacterData("starry_studio_found") != "yes") {
        user.SetMiscCharacterData("starry_studio_found", "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You've discovered Vincent's hidden studio! The room hums with creative energy. Paintings lean against every wall, each one a window into another vision.</ansi>");
        user.GrantXP(200, "discovering the hidden studio");
    }
    return false;
}

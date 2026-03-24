
// Starry Night entry room - Cypress Hill
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The swirling sky descends around you, the stars spinning faster and faster until they blur into streaks of light. The thick brushstrokes of the landscape dissolve into wet paint, running and pooling until the world is nothing but color. Then the colors thin, the canvas fades, and you stand once more in the quiet Gallery of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is caught up in a spiral of stars and dissolving paint, vanishing back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "touch" || cmd == "feel") {
        if (rest.indexOf("cypress") >= 0 || rest.indexOf("tree") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You press both hands against the cypress trunk. The paint is thick, corrugated, almost architectural -- ridge after ridge of dark green and black applied with a palette knife or a heavily loaded brush. You can feel the specific direction of each stroke: always upward, always straining. This is a tree painted from the inside of itself.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " puts both hands against the painted cypress, feeling the thick impasto.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You press a hand into the hillside. The impasto yields slightly -- cool, thick paint, the texture of a sea in motion captured in pigment. You feel individual brushstrokes beneath your palm: short, overlapping dashes of cobalt and green that build this landscape from nothing but oil and obsession.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " presses a hand into the painted hillside.", user.UserId());
        }
        return true;
    }

    if (cmd == "look" && (rest.indexOf("sky") >= 0 || rest.indexOf("star") >= 0 || rest.indexOf("moon") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">You look up at the full glory of the starry night. Eleven stars, each one a blazing orb ringed with concentric halos. A crescent moon blazing in the upper right. Great spiraling rivers of light flowing between them, the whole sky in slow, majestic rotation. No photograph has ever captured it. No description ever will. You are standing in the only medium that was adequate to this vision.</ansi>");
        return true;
    }

    if (cmd == "smell" || cmd == "sniff") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Oil paint, sharp and mineral. Linseed oil. Turpentine. Beneath it, the night air of Provence -- herbs, cool stone, a hint of wood smoke from the village below. The specific atmospheric cocktail of a Southern French evening in June 1889, preserved in pigment and available to you now, here, more than a century later.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You add a stroke to the sky above the cypress -- a small spiral of white and yellow, your own contribution to the great cosmic dance. The painting absorbs it without protest, as if the motion were inevitable. You have painted inside the most famous painting of the night sky. Whether that is hubris or participation is a question Vincent himself would have found interesting.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches up and adds a brushstroke to the swirling sky above the cypress.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"14\">The painting expands around you. You feel the thick impasto beneath your feet, smell oil paint and night air. The swirling sky opens above you — impossibly vast, impossibly alive. You are standing on a hill in the world of Starry Night.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    return false;
}

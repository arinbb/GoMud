
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The wheat rises around you, golden stalks closing in until all you see is gold and blue. Then the colors thin, the canvas dissolves, and you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " wades into the wheat and vanishes among the golden stalks.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "lie" || cmd == "lay" || cmd == "rest") {
        var easterKey = "starry_wheat";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "lying in the wheat field");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You lie down among the wheat. The stalks close above you like a golden cathedral. The sky overhead is pure cobalt blue swirled with impossible stars. The wind moves through the field in long, breathing waves. For a moment you understand why he painted this.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — The wheat field breathes.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You lie down again. The wheat whispers the same things. It never gets old.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " lies down in the golden wheat and disappears among the stalks.", user.UserId());
        return true;
    }
    if (cmd == "touch" || cmd == "feel") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach into the wheat and grasp a stalk. The paint is applied in horizontal layers -- urgent, thick strokes of cadmium yellow, yellow ochre, raw sienna, each one bearing the physical pressure of the brush. The wheat bends toward you and springs back. This field was painted in the last weeks of Vincent's life, and the urgency of that is in every stroke you feel.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches into the wheat, feeling the thick impasto of each painted stalk.", user.UserId());
        return true;
    }

    if (cmd == "smell" || cmd == "sniff") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Ripe grain, warm and heavy -- the particular fullness of wheat in late summer, baked by Provencal sun. And underneath it, linseed oil. You are standing in a field that smells equally of harvest and of painting. The two smells coexist without conflict, each one entirely itself.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("crow") >= 0 || rest.indexOf("bird") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">The crows wheel overhead, stark black dashes against the blue sky. Vincent painted them in the last summer of his life. Are they arriving or departing? Even his letters could not decide. He died three weeks after finishing this painting. The crows have been wheeling ever since, caught in the question.</ansi>");
        return true;
    }

    if (cmd == "paint" || cmd == "brush") {
        SendUserMessage(user.UserId(), "<ansi fg=\"14\">You add a stroke of cadmium yellow to the field -- one more stalk, bending in the painted wind. The wheat accepts your addition and incorporates it into the wave. Your stalk is now among the last ones Van Gogh painted, indistinguishable, part of the urgency. It will last as long as the painting lasts.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " paints a new stalk of wheat into the field, bending in the wind.", user.UserId());
        return true;
    }

    return false;
}

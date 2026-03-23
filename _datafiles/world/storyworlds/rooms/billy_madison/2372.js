
// Billy Madison - ODoyle Territory
// Easter egg: "odoyle rules" -- 150 XP (then something bad happens to ODoyle)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The parking lot dissolves -- the bicycles, the idling van, the family that ruled this pavement. The ODoyle nearest you says 'ODoyle rules!' one final time as the whole scene becomes film grain. The Grand Library returns.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from ODoyle territory. An ODoyle shouts after them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "odoyle" || (cmd == "say" && rest.toLowerCase().indexOf("odoyle") >= 0) || (cmd == "say" && rest.toLowerCase().indexOf("o'doyle") >= 0)) {
        var key = "billy_madison_odoyle_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"O'DOYLE RULES!\" you shout, and the parking lot erupts. Every O'Doyle on the premises responds in unison: \"O'DOYLE RULES!\" The van honks its horn. The bicycles rattle. The spray-painted asphalt seems to glow with validation.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Then, from somewhere distant, there is a long escalating sound of a car approaching a puddle at speed. The O'Doyle van begins to move, slowly, toward the parking lot exit. Then faster.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">There is a tremendous splash. Then silence. Then, faintly, a soaking wet O'Doyle voice from somewhere off in the middle distance: \"...rules.\"</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shouts O'Doyle Rules. The response is unanimous. Then there is a very large splash from the direction of the exit.", user.UserId());
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(150, "odoyle rules easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- O'Doyle rules. Until the puddle.)</ansi>");
        }
        return true;
    }

    if (cmd == "rules") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You say \"rules\" with conviction. An ODoyle turns and looks at you. Then looks at the spray paint. Then back at you. You are in the territory. You know what rules here. You both know.</ansi>");
        return true;
    }

    return false;
}

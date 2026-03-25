
// The Afterlife Hallway - atmosphere transition, no way back
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The green fluorescent light intensifies until it whites out your vision. When it clears, the institutional corridor has been replaced by the warm wood and candlelight of the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is consumed by the green light and disappears.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "open" && rest.indexOf("door") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">You press your hands against the wall where the chalk door was. The faint white lines smudge under your fingers. There's nothing here anymore -- just cold, smooth wall. The afterlife doesn't believe in return policies.</ansi>");
        return true;
    }

    if (cmd == "read" && (rest.indexOf("notice") >= 0 || rest.indexOf("sign") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">You read the notices taped to the wall:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "  <ansi fg=\"white\">\"ATTENTION: All recently deceased must take a number.\"</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"white\">\"Haunting permits require Form 27-B/6. No exceptions.\"</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"white\">\"Do NOT open any doors marked SATURN. We mean it.\"</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"white\">\"Lost? You probably are. Take a number anyway.\"</ansi>");
        SendUserMessage(user.UserId(), "  <ansi fg=\"white\">\"Compliments? Complaints? File Form 112-C. Processing time: 300 years.\"</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }

    // Knock on the walls
    if (cmd == "knock") {
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">You knock on the wall. The sound is flat and dead -- no echo, no resonance. But after a moment, something knocks back. Three times. From inside the wall. Then silence. You decide not to knock again.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " knocks on the wall. Something knocks back.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"green\">The chalk door swings shut behind you and you feel the change immediately. The warm attic air is gone. In its place: cold. Not winter cold -- institutional cold. The cold of hospitals and government offices and places where hope goes to fill out paperwork.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"green\">The light is wrong. Everything is lit by sickly green fluorescents that buzz like dying flies. The walls are painted a shade of green that exists only in nightmares and the DMV. The floor is scuffed linoleum. The air smells of formaldehyde and floor wax and the absolute certainty that you will be here for a very long time.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"green\">You are in the afterlife. It looks exactly like you feared it would.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    user.SetTempData("visited_afterlife", "true");
    return true;
}

function onIdle(room) {
    var messages = [
        "<ansi fg=\"green\">The fluorescent lights flicker in sequence down the corridor, like a wave of sickness rolling toward you.</ansi>",
        "<ansi fg=\"green\">A distant intercom crackles. A bored voice says 'Now serving number three million, four hundred and--' before cutting off mid-sentence.</ansi>",
        "<ansi fg=\"green\">Your footsteps echo longer than they should, as if the corridor extends far beyond what you can see. Maybe it does.</ansi>",
        "<ansi fg=\"green\">A fly the size of a marble buzzes past your ear, heading south with the confidence of someone who knows exactly where the waiting room is.</ansi>",
        "<ansi fg=\"green\">The formaldehyde smell intensifies briefly, then fades to the usual background level of institutional dread.</ansi>",
        "<ansi fg=\"green\">One of the notices on the wall peels off and drifts to the floor. It reads: 'YOU ARE DEAD. PLEASE ACT ACCORDINGLY.'</ansi>",
        "<ansi fg=\"green\">A door you hadn't noticed opens six inches, revealing nothing but darkness. Then it slowly closes. It was never there.</ansi>",
        "<ansi fg=\"green\">The temperature drops another degree. You didn't think that was possible. The afterlife disagrees.</ansi>"
    ];
    var pick = Math.floor(Math.random() * messages.length);
    room.SendText(messages[pick]);
    return true; // always use custom idles for the afterlife
}

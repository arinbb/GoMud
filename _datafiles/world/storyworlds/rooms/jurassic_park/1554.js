
// Jurassic Park - The Dilophosaurus Paddock
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The ferns close around you, the dripping jungle darkening to film negative. A sound like a rattle, like a fan, fades into projector white noise. The Library takes shape around you, solid and safe and blessedly indoors.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs slowly into the ferns and disappears.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("tree") >= 0 || rest.indexOf("treeline") >= 0 || rest.indexOf("dark") >= 0 || rest.indexOf("shadow") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You stare into the tree line. For a long moment, nothing. Then the ferns near the fence part — not from wind — and you see the crest. A frill of brilliant, iridescent color fans open, red and gold and green, framing a head that is regarding you with an expression you cannot interpret. It is very still. Then its lips pull back, and that rattling, chittering sound begins — the sound of a biological alarm. Then the frill retracts. The ferns close. The tree line is empty. You are sweating.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stares into the Dilophosaurus tree line, unblinking.", user.UserId());
        return true;
    }

    if (cmd == "call" || (cmd == "make" && rest.indexOf("noise") >= 0) || cmd == "whistle" || cmd == "shout") {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The sound you make travels into the paddock. The ferns are very still. Then, from several locations at once, that rattling, chittering fan-sound responds. More than one. From different positions. They have flanked you while you were watching the front. The fence is right behind you. The gate is farther away than it was.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " makes a noise into the paddock. Several answering sounds come from the tree line.", user.UserId());
        return true;
    }

    return false;
}

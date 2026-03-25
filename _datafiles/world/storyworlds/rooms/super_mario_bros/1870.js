
// World 6-3 Underwater Level - Quest advance on arrival
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(210)) {
        user.Command("questadvance 210");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The blue-green water lightens and fades. The coral dissolves. The Bloopers spiral upward into nothing. You are back in the Arcade, slightly damp in spirit if not in body, the dreamy slow physics of the underwater level still in your bones.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates into the blue-green water and surfaces back in the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "swim" || cmd == "float") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You move through the water with the distinctive physics of the underwater levels -- not quite swimming, more like floating on a specific axis, rising with each kick, descending between them. The Bloopers track your movement. Stay low. They descend to match you, and you slip past while they overcompensate. The underwater level is about learning when not to rise.</ansi>");
        return true;
    }

    return false;
}

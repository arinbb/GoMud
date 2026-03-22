
// Delia's Gallery - art interactions and return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Delia's sculptures melt like Dali clocks, dripping off their pedestals into puddles of chrome that reflect the Library ceiling above you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " melts into one of Delia's sculptures and is absorbed into the art.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Critiquing the art
    if (cmd == "look" && rest.indexOf("installation") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You stare up at Delia's ceiling installation. It sways toward you, almost conspiratorially. A piece of crumpled foil detaches and drifts down onto your head like a tiny crown. From somewhere, you hear Delia's voice whisper: \"It chose you. You understand it. You GET it.\" You don't get it. Nobody gets it.</ansi>");
        return true;
    }

    // Touching a sculpture
    if (cmd == "touch" && rest.indexOf("sculpt") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach out and touch the nearest sculpture -- the tangle of coat hangers called \"Angst IV.\" It's cold. Then warm. Then it vibrates. A low hum fills the room. Delia would be thrilled. You are not thrilled.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " touches one of Delia's sculptures. It hums ominously.", user.UserId());
        return true;
    }

    return false;
}

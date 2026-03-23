
// Jurassic Park - The Main Gates
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The torches flare in a sudden wind and the gate letters blur into light. Film grain rises from the torchsmoke and the jungle dissolves frame by frame, replaced by the warm amber shelves of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves in a swirl of torchsmoke and jungle wind, vanishing from the gate.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && (rest.indexOf("gate") >= 0 || rest.indexOf("sign") >= 0 || rest.indexOf("letter") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">JURASSIC PARK. Carved a foot deep into tropical hardwood, each letter big enough to lie down in. Below it: \"An InGen Company.\" Below that, barely visible: \"Where the Mesozoic Era Lives Again.\" The letters are still fresh, barely weathered. The park is new. Everything here is new.</ansi>");
        return true;
    }

    return false;
}

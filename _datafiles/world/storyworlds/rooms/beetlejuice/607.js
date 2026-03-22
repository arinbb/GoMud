
// Attic - chalk door puzzle and return handler
var LIBRARY_ROOM = 1;
var AFTERLIFE_ROOM = 611;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The attic model town spins like a zoetrope, faster and faster, until the images blur into the Library around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " spins away like a figure in a zoetrope and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Draw door mechanic - requires chalk (item 60011)
    if (cmd == "draw" && rest.indexOf("door") >= 0) {
        if (!user.HasItemId(60011)) {
            SendUserMessage(user.UserId(), "You need something to draw with. Maybe there's chalk in the art supplies.");
            return true;
        }

        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">You press the chalk against the blank wall and begin to draw. The chalk moves almost by itself, tracing the outline of a door -- frame, handle, hinges. The lines glow sickly green as you complete each stroke. When the last line connects, the chalk door shudders, becomes three-dimensional, and swings open with a creak.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">Beyond it stretches a long, green-lit corridor that definitely should not exist inside this house. Cold air and the smell of formaldehyde drift through the opening.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " draws a door on the blank wall with chalk. The lines glow green, and the drawing becomes a real door that creaks open to reveal a strange corridor beyond.", user.UserId());

        room.AddTemporaryExit("chalk door", ":green", AFTERLIFE_ROOM, "15 real minutes");
        return true;
    }

    return false;
}

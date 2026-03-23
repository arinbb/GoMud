
// Paris, Texas - The Backyard
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The projector light catches you and for a moment you are just another shape on the white sheet, a shadow among shadows. Then you are gone, and the backyard continues its careful, quiet work without you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks into the projector beam and dissolves into the light, briefly a silhouette on the sheet, then nothing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "watch" || cmd == "look") {
        var r = rest.toLowerCase();
        if (r.indexOf("film") >= 0 || r.indexOf("movie") >= 0 || r.indexOf("projector") >= 0 || r.indexOf("screen") >= 0 || r.indexOf("sheet") >= 0) {
            if (user.GetMiscCharacterData("paris_easter_film") != "found") {
                user.SetMiscCharacterData("paris_easter_film", "found");
                user.GrantXP(200, "watching the Super 8 film in the backyard");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You watch the film on the sheet. The colors are oversaturated in the way of Super 8 — the greens too green, the skin tones too warm, everything edged with a slight halation. A woman holds a small boy and spins, laughing without sound. A man holds up a fish. The boy runs into the frame with his arms out. The woman catches him and the film bleaches white for a moment from overexposure and when it comes back she is looking directly at the camera and smiling so specifically, so privately, that you look away. The film ends. The projector clicks through white leader and then the same images start again.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP)</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits very still and watches the Super 8 film on the sheet.", user.UserId());

                room.AddTemporaryExit("watch film", "watch film", 2133, 600);
                room.AddTemporaryExit("watch movie", "watch movie", 2133, 600);

                SendUserMessage(user.UserId(), "<ansi fg=\"8\">(You could step into the film. The image is large enough.)</ansi>");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You watch the film again. The woman spins and the boy runs and the fish is held up and then the overexposure washes it all white and it starts again.</ansi>");
            }
            return true;
        }
    }

    return false;
}

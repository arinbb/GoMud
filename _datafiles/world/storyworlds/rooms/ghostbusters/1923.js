var LIBRARY_ROOM = 1;
var GRID_INTERIOR = 1935;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The red light fades. The hum of the containment grid becomes the hum of the projector, and you find yourself back in the Library's Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades out of the red light like a ghost going back into a trap.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "open" || cmd == "turnoff" || (cmd == "turn" && rest.toLowerCase().indexOf("off") >= 0)) {
        if (user.GetMiscCharacterData("easter_ghostbusters_containment") != "found") {
            user.SetMiscCharacterData("easter_ghostbusters_containment", "found");
            user.GrantXP(200, "containment unit easter egg");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You flip open the plexiglass cover and reach for the switches. The grid shrieks. The floor drops open. The air goes green and cold and filled with ten thousand voices. Something reaches for you from below.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP -- You turned it off. They said not to. You did it anyway.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You flip the containment switches again. The grid screams and the floor drops away.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " opens the plexiglass cover on the containment switches. The grid starts screaming.", user.UserId());
        user.MoveRoom(GRID_INTERIOR);
        return true;
    }

    return false;
}

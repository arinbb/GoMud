
// Paris, Texas - The Highway to LA
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The highway becomes a projection — white lines on black — and then just light, and then the warmth of the library reading lamps replacing the warmth of the Southwest sun.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " blurs into the rush of the highway and is gone, as if the road simply absorbed them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen") {
        if (user.GetMiscCharacterData("paris_easter_guitar") != "found") {
            user.SetMiscCharacterData("paris_easter_guitar", "found");
            user.GrantXP(150, "hearing the slide guitar on the highway");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You stop talking. Walt stops talking. The truck hum drops away somehow. And in the space between engine noise and silence, you hear it — Ry Cooder's slide guitar, one long note that bends from somewhere south and rises into the highway air and hangs there like the last thing the desert has to say. It lasts about four seconds. It is the loneliest and most beautiful four seconds you have heard. Then it is gone and the road continues.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You listen. The highway hums. Somewhere in it, that note. If you are quiet enough, you can almost hear it.</ansi>");
        }
        return true;
    }

    return false;
}

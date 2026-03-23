// Up in Smoke - Mans Pad
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The lava lamp blobs rise one last time and keep going, upward through the ceiling and out into the LA sky. The black light fades. The album covers dissolve. The warm shelves of the Grand Library close around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drifts upward like a lava lamp blob and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.indexOf("lamp") >= 0) {
        if (user.GetMiscCharacterData("uis_lamp_easter") != "found") {
            user.SetMiscCharacterData("uis_lamp_easter", "found");
            user.GrantXP(150, "studied the lava lamp");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">You stare into the lava lamp for a long time. The blobs rise. The blobs fall. The blobs rise again. Somewhere in the process you understand something about the nature of things that you cannot put into words but which feels, undeniably, true. <ansi fg=\"10\">(+150 XP)</ansi></ansi>");
        } else {
            SendUserMessage(user.UserId(), "The lava lamp blobs rise and fall. You already learned what it has to teach. It still looks good.");
        }
        return true;
    }

    if (cmd == "sit") {
        if (user.GetMiscCharacterData("uis_sit_easter") != "found") {
            user.SetMiscCharacterData("uis_sit_easter", "found");
            user.GrantXP(150, "achieved beanbag enlightenment");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">You sink into the beanbag. It accepts you completely. The music hums. The black light makes your hand look like it belongs to someone extremely interesting. Everything is fine. Everything has always been fine. <ansi fg=\"10\">(+150 XP)</ansi></ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sinks into the beanbag and stares at the lava lamp with the focused attention of someone receiving important information.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "You sink back into the beanbag. Man nods. The lava lamp continues its work.");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {

    if (user.HasQuest(320) && !user.GetTempData("uis_mans_pad")) {
        user.SetTempData("uis_mans_pad", "visited");
        user.Command("questadvance 320");
    }

    return false;
}

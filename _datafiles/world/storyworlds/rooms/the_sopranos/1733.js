
// The Sopranos - The Pine Barrens
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The pine trees thin, then dissolve. The cold fades. The grey sky opens into warm library ceiling. You are back, and you are warm, and you know exactly where you are.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " finds a path through the pines that leads somewhere else entirely.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wander" || cmd == "walk" || (cmd == "go" && rest.indexOf("north") >= 0)) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You walk. The pines look the same in every direction. You are reasonably certain you are going south, toward the road, but south keeps not producing a road. The snow is deeper here. Your footprints behind you curve in a way you do not remember walking. You have been walking for twenty minutes and arrived at a clearing that feels familiar but is probably a different clearing. Paulie was right: you cannot navigate in these woods. Nobody can. This is the point of the Pine Barrens.</ansi>");

        if (user.GetMiscCharacterData("sopranos_pines") != "found") {
            user.SetMiscCharacterData("sopranos_pines", "found");
            user.GrantXP(200, "getting lost in the Pine Barrens");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You are genuinely, authentically lost in the Pine Barrens. Quest updated. [+200 XP]</ansi>");
        }

        if (user.GetMiscCharacterData("sopranos_quest5") != "done") {
            user.SetMiscCharacterData("sopranos_quest5", "done");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have gotten lost in the Pine Barrens. Quest updated.</ansi>");
        }
        return true;
    }

    if (cmd == "look" && rest.indexOf("footprint") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">There are two sets of footprints, yours and something else. The other set is larger and goes in a direction that does not correspond to any compass point you were taught. They stop at a small clearing, where the snow is disturbed in a pattern that suggests something happened here, and then continue in a completely different direction. You follow them for a few minutes and arrive back where you started.</ansi>");
        return true;
    }

    if (cmd == "call" || (cmd == "use" && rest.indexOf("phone") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You try calling. The phone rings once and connects. You hear wind and what might be breathing and then the call drops. You have one bar of service. You always will have one bar of service. That is the Pine Barrens.</ansi>");
        return true;
    }

    return false;
}

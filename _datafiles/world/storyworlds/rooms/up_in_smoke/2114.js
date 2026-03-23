// Up in Smoke - On Stage at the Roxy (quest completion + easter egg)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The spotlights fade from white to amber to the reading lamps of the Grand Library. The crowd sound becomes silence. The microphone stand blurs into a bookshelf. You are back, and you can still feel the stage under your feet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " bows once to the crowd and fades into the spotlight. The crowd is not sure whether to applaud.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" || cmd == "rock") {
        if (user.GetMiscCharacterData("uis_stage_easter") != "found") {
            user.SetMiscCharacterData("uis_stage_easter", "found");
            user.GrantXP(300, "played the Roxy");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">You step to the microphone. The spotlight narrows. The crowd goes quiet with the specific silence of a room waiting to be changed. You play something. It is the right thing. It does not matter what it is -- what matters is that you meant it, that you played it like the last song before the end of a long good night, that the crowd felt it the way music should be felt, somewhere behind the sternum. The Battle Judge lowers his clipboard. He writes a score. It is the highest score. <ansi fg=\"10\">(+300 XP)</ansi></ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps to the mic and plays something extraordinary. The crowd at the Roxy erupts.", user.UserId());

            if (user.HasQuest(320) && !user.GetTempData("uis_stage_complete")) {
                user.SetTempData("uis_stage_complete", "done");
                user.SetMiscCharacterData("souvenir_up_in_smoke", "collected");
                user.Command("questadvance 320");
            }
        } else {
            SendUserMessage(user.UserId(), "You play again. The crowd still wants more. The Battle Judge has already written his score.");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {

    if (user.HasQuest(320) && !user.GetTempData("uis_roxy_stage")) {
        user.SetTempData("uis_roxy_stage", "visited");
        user.Command("questadvance 320");
    }

    return false;
}

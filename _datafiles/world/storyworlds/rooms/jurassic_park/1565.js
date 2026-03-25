
// Jurassic Park - The Control Room
// Easter egg: "type" or "hack" triggers "ah ah ah" screensaver, first time = 200 XP
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(130) && !user.GetMiscCharacterData("jp_quest_controlroom")) {
        user.SetMiscCharacterData("jp_quest_controlroom", "true");
        // Quest step 6: Reach the control room
        user.Command("quest advance 130");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: You have reached the control room.)</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The monitor wall goes to static simultaneously and the static is the projector beam and Arnold's final cigarette hangs in the air where he was and the Grand Library assembles itself from the static the way a picture assembles from noise.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the monitor static and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "type" || cmd == "hack" || (cmd == "use" && (rest.indexOf("computer") >= 0 || rest.indexOf("keyboard") >= 0 || rest.indexOf("workstation") >= 0 || rest.indexOf("terminal") >= 0))) {
        var easterKey = "jp_ah_ah_ah";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "triggering Nedry's security screensaver");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You sit at Nedry's keyboard and type a command. The system accepts the input for a moment — then the screen wipes.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The animated man in the bow tie fills the screen. He wags his finger at you. His smile is the smile of a man who planned everything, including this. Especially this.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"Ah ah ah. You didn't say the magic word.\"</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">He wags his finger again. The screen loops. The systems remain locked. The raptors remain loose. The park remains not working. Dennis Nedry built one thing that worked perfectly. It is this screensaver.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — You triggered the screensaver.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The animated man fills the screen. He wags his finger. \"Ah ah ah. You didn't say the magic word.\" You know the magic word. Nobody knows the magic word. Nedry took it with him to the Dilophosaurus paddock.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " types at Nedry's workstation. The famous screensaver appears on all monitors.", user.UserId());
        return true;
    }

    if (cmd == "say" && (rest.indexOf("magic") >= 0 || rest.indexOf("word") >= 0 || rest.indexOf("please") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The animated man shakes his head. \"Ah ah ah. You didn't say the magic word.\" He wags his finger. He does not tell you what the magic word is. He never tells you what the magic word is. Nedry took the magic word with him. The magic word is gone.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("monitor") >= 0 || rest.indexOf("screen") >= 0 || rest.indexOf("camera") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">Most monitors show static or ERROR: NO SIGNAL. A few still have feeds: the helipad (empty), the main gates (empty), the hatchery (Wu and incubators, everything normal). The T. Rex paddock camera shows darkness and rain. In the darkness, at the edge of the camera's range, you can see the paddock fence. The paddock fence is no longer in a straight line. Something has pushed through it from the inside, and the outside is now the same as the inside.</ansi>");
        return true;
    }

    return false;
}

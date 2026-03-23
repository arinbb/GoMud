
// The Bulldozer Yard - monkey wrenching easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The canyon walls shimmer and blur, the smell of sage fading back into the smell of old paper and library dust. The Colorado River recedes like a dream you can almost hold. The red rock dissolves into sentences, the blue sky into margins, and then you are standing in the Grand Library with a sun-bleached paperback in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands very still for a moment, the desert light fading from their skin, then dissolves into the pages of a paperback and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sabotage" || cmd == "wrench" || cmd == "sugar") {
        var key = "mwg_dozer_sabotaged";
        if (user.GetMiscCharacterData(key) != "done") {
            user.SetMiscCharacterData(key, "done");
            user.GrantXP(250, "monkey wrenching");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You work your way down the row of bulldozers with the quiet efficiency of someone who has read the manual and decided to use the knowledge differently. Fuel caps unscrewed. Sand. Sugar from a Ziplock bag in your jacket pocket. Water from a canteen. Caps replaced, snugged hand-tight, no sign of disturbance. Ignition wires pulled and pocketed. The hydraulic lines -- just a nick, just enough to ensure the morning shift becomes an afternoon of bafflement. You move from machine to machine in the dark, the stars overhead, the owl calling somewhere beyond the fence. When you finish, nine bulldozers are scheduled for a very bad morning. You walk back out through the fence gap and feel, for a moment, exactly right.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+250 XP -- monkey wrenching for the wilderness)</ansi>");
            SendRoomMessage(room.RoomId(), "<ansi fg=\"red\">" + user.GetCharacterName(true) + " moves quietly through the rows of bulldozers. In the morning, nine of them will not start.</ansi>", user.UserId());
            if (user.HasQuest(220)) {
                var step = user.GetMiscCharacterData("quest_220_step");
                if (step == "3" || step == "2" || step == "1") {
                    user.SetMiscCharacterData("quest_220_step", "4");
                    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest: The Monkey Wrench Gang -- sabotaged the bulldozers.)</ansi>");
                }
            }
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The bulldozers are already sabotaged. The work is done. Let the morning shift figure it out.</ansi>");
        }
        return true;
    }

    return false;
}

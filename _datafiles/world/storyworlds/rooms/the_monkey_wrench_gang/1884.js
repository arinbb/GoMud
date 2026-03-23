
// The Billboard - Doc Sarvis's domain, easter egg for burning
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The canyon walls shimmer and blur, the smell of sage fading back into the smell of old paper and library dust. The Colorado River recedes like a dream you can almost hold. The red rock dissolves into sentences, the blue sky into margins, and then you are standing in the Grand Library with a sun-bleached paperback in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands very still for a moment, the desert light fading from their skin, then dissolves into the pages of a paperback and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "burn" || cmd == "light") {
        var target = rest.toLowerCase();
        if (target.indexOf("billboard") >= 0 || target == "" || target.indexOf("sign") >= 0) {
            var key = "mwg_billboard_burned";
            if (user.GetMiscCharacterData(key) != "done") {
                user.SetMiscCharacterData(key, "done");
                user.GrantXP(250, "aesthetic justice");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"red\">You find the gasoline can at Doc's feet. He watches you with calm approval as you splash fuel along the base of the billboard. The match catches on the first strike. The fire takes the way fire always takes -- fast, indifferent, total. Sun-Del Estates goes up in a column of black smoke and orange flame. The happy couple in their pool blister and curl and vanish. The frame groans. For thirty seconds, the mesa is lit like noon at midnight. Then it is over, just the metal frame standing black against the sky, and the desert smelling of smoke and the particular satisfaction of a wrong addressed.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+250 XP -- aesthetic terrorism)</ansi>");
                SendRoomMessage(room.RoomId(), "<ansi fg=\"red\">" + user.GetCharacterName(true) + " lights the billboard. It goes up in a column of fire visible for ten miles.</ansi>", user.UserId());
                if (user.HasQuest(220)) {
                    var step = user.GetMiscCharacterData("quest_220_step");
                    if (step == "2" || step == "1") {
                        user.SetMiscCharacterData("quest_220_step", "3");
                        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest: The Monkey Wrench Gang -- burned the billboard.)</ansi>");
                    }
                }
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"red\">The metal frame still stands, black and skeletal. The billboard is already ash. The deed is done.</ansi>");
            }
            return true;
        }
    }

    return false;
}

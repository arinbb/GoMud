// Paddys Pub - Entry room for Its Always Sunny in Philadelphia zone
var LIBRARY_ROOM = 1;
var QUEST_ID = 300;

function onEnter(user, room) {
    var visitedKey = "visited_its_always_sunny";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The film reel starts and you smell it before you see it: stale beer, cigarette smoke, and something that might be despair. The image resolves into a bar that looks like it was designed by someone who had heard about bars but never been to one. Sticky floors. A broken jukebox. Zero customers. Five terrible people who own the place and somehow make everything worse every single day. Welcome to Paddys Pub, South Philadelphia. Try not to get involved in anything.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (!user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
        user.Command("questadvance " + QUEST_ID);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Quest started: The Gang Makes Everything Worse</ansi>");
        }
        
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The sticky floor releases your shoes with a reluctant sucking sound. The broken jukebox plays three notes and stops. The Gang shouts something contradictory at each other as the scene blurs, the smell of cheap beer fades, and the screen goes white. You are back in the Grand Library, the film reel cooling in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs slowly toward the exit, the bar dissolving around them like a bad dream, and vanishes into the screen.", user.UserId());
        user.SetTempData("visited_its_always_sunny", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "insult" || cmd == "roast") {
        if (rest.indexOf("dee") >= 0) {
            var key = "easter_sunny_insult_dee";
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You join in the time-honored Paddys tradition. The walls seem to lean in, attentive. From somewhere nearby a voice says \"Oh, are we roasting Dee? I have a LIST.\" A door appears in the wall — one that was not there before, labeled in marker: BREAK DEE.</ansi>");
            room.AddTemporaryExit("roast", "the Break Dee room", 2055, 300);
            if (user.GetMiscCharacterData(key) != "found") {
                user.SetMiscCharacterData(key, "found");
                user.GrantXP(200, "Opened the secret Dee roast room");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">+200 XP: The Gang Breaks Dee</ansi>");
            }
            return true;
        }
    }

    return false;
}

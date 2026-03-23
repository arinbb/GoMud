
// Matilda - Miss Honey's Classroom (Easter Egg: telekinesis chalk)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Miss Honey's gentle voice fades into the turning of pages. The wildflowers in the jam jar blur into watercolors, the classroom walls become bookshelves, and you find yourself back in the Grand Library. The chalk dust on your fingers is the only proof you were ever there.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the chalk dust motes floating in the sunlight, carried away like a whispered lesson.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "move" || cmd == "levitate" || cmd == "use") {
        var target = rest.toLowerCase();
        if (target.indexOf("chalk") >= 0 || target.indexOf("telekinesis") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You stare at the chalk in the blackboard tray. You concentrate — really concentrate — with everything you have. Your eyes burn. The air crackles. And then, impossibly, the chalk rises. It floats upward, trembling, and drifts to the blackboard. In shaky but unmistakable letters, it begins to write:</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">  A G A T H A . . .</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"15\">  T H I S   I S   M A G N U S . . .</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The chalk drops. The classroom is deathly silent. Every child is staring. Miss Honey has gone white. Something extraordinary has just happened.</ansi>");
            SendRoomMessage(room.RoomId(), "The chalk rises from the blackboard tray BY ITSELF and begins writing on the board! " + user.GetCharacterName(true) + " stands perfectly still, eyes blazing with concentration.", user.UserId());

            if (user.GetMiscCharacterData("matilda_chalk_scene") != "found") {
                user.SetMiscCharacterData("matilda_chalk_scene", "found");
                user.GrantXP(300, "the chalk writing scene");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The power is real. It was always real. (+300 XP)</ansi>");
            }

            if (user.HasQuest(100)) {
                user.GiveQuest(100);
            }

            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(100)) {
        user.GiveQuest(100);
    }
    return false;
}

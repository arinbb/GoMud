
// Raskolnikovs Garret - Entry room for Crime and Punishment zone
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The heavy book falls open and the smell hits you first: lime, sweat, the particular sourness of a room too small for a man too large in his thoughts. The heat of St. Petersburg in summer descends on you like a physical weight. The ceiling slopes. The walls are close. You are in a garret on the fourth floor of a building on Stolyarny Lane, and the city outside is yellow and loud and indifferent, and in this room a young man has been thinking thoughts that will not let him go.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The stifling heat of the garret dissolves. The yellow walls and peeling paper blur into text on a page. The smell of lime and sweat gives way to old paper and binding glue. You are back in the Grand Library, Dostoevsky's novel heavy in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " grows translucent in the yellow St. Petersburg light, then fades like a fever breaking, gone back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest == "axe" || rest == "coat")) {
        var xpKey = "cnp_axe_look";
        if (user.GetMiscCharacterData(xpKey) != "found") {
            user.SetMiscCharacterData(xpKey, "found");
            user.GrantXP(300, "the axe beneath the coat");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You lift the coat.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">It is just an axe. A common workman's axe with a wooden handle. The weight of it is ordinary. The blade is clean. There is nothing special about it except that it has been here, beneath this coat, in this room, while the theory was being constructed and dismantled and reconstructed. It has been waiting, the way objects wait, without judgment, without knowledge. The guilt is entirely his. The axe is innocent. You cannot stop looking at it.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+300 XP: the weight of ordinary objects)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The axe beneath the coat. Clean blade, wooden handle. Ordinary. The most ordinary thing in the world. You know what it means anyway.</ansi>");
        }
        return true;
    }

    if (cmd == "take" && rest == "axe") {
        var xpKey = "cnp_axe_look";
        if (user.GetMiscCharacterData(xpKey) != "found") {
            user.SetMiscCharacterData(xpKey, "found");
            user.GrantXP(300, "the axe beneath the coat");
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">Your hand moves toward the coat. Stops. You are not Raskolnikov. You are not anyone's extraordinary man. The axe stays where it is. Some things should stay where they are.</ansi>");
        return true;
    }

    if (cmd == "quest") {
        if (!user.HasQuest(180)) {
            user.GiveQuest(180);
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Quest begun: Crime and Punishment. You have woken in Raskolnikov's garret. The city awaits.</ansi>");
        }
        return false;
    }

    return false;
}

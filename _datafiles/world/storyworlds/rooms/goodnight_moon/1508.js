
// The Bowl of Mush
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(110) && !user.GetMiscCharacterData("gm_found_mouse")) {
        var mobs = room.GetMobs(233);
        if (mobs.length > 0) {
            user.SetMiscCharacterData("gm_found_mouse", "true");
            user.Command("quest advance 110");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: you have found the little mouse.)</ansi>");
        }
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You step back from the bowl's rim, growing back to your ordinary size. The mush recedes to its mantelpiece position, a small bowl among other small objects. You carry the smell of it -- oats and cream and warmth -- back toward the Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back from the bowl of mush and fades toward the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" || cmd == "taste") {
        var mushed = user.GetMiscCharacterData("gm_ate_mush") == "true";
        if (mushed) {
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">The mush is still warm. It is always warm. It is very good mush.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("gm_ate_mush", "true");
        user.GrantXP(100, "tasting the bowl of mush");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You dip a hand into the mush. At this scale it is a great smooth sea of warmth. You taste it. It is oats. It is cream. It is honey and a little salt and something underneath that you cannot name -- the taste of being very small, very warm, the day entirely over, the night entirely beginning, all of it contained in a bowl someone put on a shelf next to a comb and a brush and a telephone, because these are the things that go together, the things that say: you are safe, it is time, goodnight.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+100 XP for tasting the bowl of mush.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dips a hand into the great bowl of mush and tastes it, thoughtfully.", user.UserId());
        return true;
    }

    if (cmd == "look" && (rest.toLowerCase().indexOf("room") >= 0 || rest.toLowerCase().indexOf("down") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">From the bowl's rim you can see the whole great green room at once. The fire, amber and low. The rocking chair moving. The window with its moon. The red balloon at the ceiling, now nearly at your eye level -- a sphere of red the size of your fist, floating. The quiet old lady below, very small now, her needles glinting. All of it contained. All of it sufficient. All of it saying the same slow word, over and over: enough. Enough. It is enough. You may sleep.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("spoon") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You look into the bowl of the spoon. There you are: tiny, curved, upside down, with the entire great green room behind you in miniature. You wave. Your reflection waves back. The room behind your reflection is warm and amber and just right.</ansi>");
        return true;
    }

    return false;
}

var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var step = user.GetMiscCharacterData("quest_240_step");
    if (step == "5") {
        user.SetMiscCharacterData("quest_240_step", "6");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You have reached the top of the story. Gozer waits. The Ghostbusters are on their way. Type 'say yes' or 'say no' when Gozer asks if you are a god.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The rooftop dissolves in a blaze of dimensional lightning. Gozer watches you go with complete indifference. Film grain. The Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the rooftop. Gozer does not seem to care.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "say") {
        var answer = rest.toLowerCase();
        if (answer == "yes" || answer == "i am a god" || answer.indexOf("yes") == 0) {
            if (user.GetMiscCharacterData("easter_ghostbusters_godyes") != "found") {
                user.SetMiscCharacterData("easter_ghostbusters_godyes", "found");
                user.GrantXP(250, "are you a god easter egg");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Gozer's gaze locks on you. The dimensional lightning doubles, triples. \"THEN RECEIVE ME, WORSHIPPER.\" A beam of supernatural energy lances from the altar directly at you. It is not pleasant. It is, however, deeply memorable. You are, briefly, on fire in multiple dimensions simultaneously.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+250 XP -- You said yes. Venkman's exact instruction was \"Say no.\" You said yes.)</ansi>");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You say yes again. The result is exactly the same. Gozer is nothing if not consistent.</ansi>");
            }
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " told Gozer they are a god. Gozer responded appropriately.", user.UserId());
            return true;
        }
        if (answer == "no" || answer.indexOf("no") == 0) {
            if (user.GetMiscCharacterData("easter_ghostbusters_godno") != "found") {
                user.SetMiscCharacterData("easter_ghostbusters_godno", "found");
                user.GrantXP(150, "say no to gozer");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You say no. Gozer considers this answer. \"THEN YOU WILL BE DESTROYED.\" A pause. The wind howls. Venkman would be proud -- except that saying no still results in a lot of electricity. It just feels slightly more principled this way.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- The correct answer. Still gets you blasted. But correctly.)</ansi>");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You say no again. You have learned from Venkman. Gozer blasts you anyway. This is the correct result.</ansi>");
            }
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " told Gozer they are not a god. Gozer destroyed them anyway, but with proper procedure.", user.UserId());
            return true;
        }
    }

    if (cmd == "cross" || (cmd == "streams" && rest.toLowerCase().indexOf("cross") >= 0)) {
        var step = user.GetMiscCharacterData("quest_240_step");
        if (step == "6") {
            user.SetMiscCharacterData("quest_240_step", "complete");
            if (user.GetMiscCharacterData("souvenir_ghostbusters") != "collected") {
                user.SetMiscCharacterData("souvenir_ghostbusters", "collected");
                var souvenir = CreateItem(240);
                user.GiveItem(souvenir);
            }
            user.GrantXP(5000, "Ghostbusters quest complete");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"I'M GOING TO CROSS THE STREAMS.\" Ray's voice. Egon's voice: \"Peter, if you do that, you'll kill us both.\" Peter's voice: \"I know.\" The four proton streams converge on the temple altar. The dimensional gateway goes white. The membrane ruptures. There is an explosion that rattles every window in Manhattan. Then silence. Then marshmallow. A great deal of marshmallow.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"green\">(Quest Complete: Who Ya Gonna Call! +5000 XP -- A miniature proton pack appears in your pack.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You cross the streams. The universe hiccups. This works better if you've done the whole story first.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " crosses the streams. The resulting explosion is spectacular.", user.UserId());
        return true;
    }

    return false;
}

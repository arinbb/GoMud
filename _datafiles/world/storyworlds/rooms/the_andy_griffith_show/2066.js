
// The Andy Griffith Show - Floyds Barber Shop
var LIBRARY_ROOM = 1;
var QUEST_ID = 310;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">Floyds shop dissolves -- the mirrors, the candy-stripe pole, the slow scissors -- and the Grand Library settles around you. Your hair seems slightly tidier than before. Whether Floyd is responsible for this is unclear but probable.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " tips Floyd generously, admires the result in the mirror, and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || cmd == "haircut" || (cmd == "get" && rest.indexOf("haircut") >= 0) || (cmd == "cut" && rest.indexOf("hair") >= 0)) {
        var key = "andy_quest_floyd";
        var easterKey = "easter_mayberry_floyd";
        var gotXP = false;
        if (user.GetMiscCharacterData(easterKey) != "done") {
            user.SetMiscCharacterData(easterKey, "done");
            user.GrantXP(150, "got a haircut at Floyds");
            gotXP = true;
        }
        if (user.GetMiscCharacterData(key) != "done") {
            user.SetMiscCharacterData(key, "done");
            user.Command("quest advance 310", 0);
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You settle into the barber chair. Floyd drapes the cape around your shoulders and begins his work -- not so much cutting as deliberating, pausing, cutting again. In the mirror you can see Floyd assembling a thought. It takes a moment.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Floyd says, after a long pause: 'Now, I heard something. About that new family that moved in on Maple. From Charlotte. Now I don't know as I should say anything -- it may be none of my business -- but what I heard was...' He trails off into the longest, most satisfying, least conclusive sentence you have ever heard in a barbershop.</ansi>");
            if (gotXP) {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP)</ansi>");
            }
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">(Quest advanced: A Day in Mayberry -- got a haircut at Floyds)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles into the barber chair. Floyd begins the haircut. It will take as long as it takes.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit in the chair again. Floyd is ready. 'Now,' he says, 'where were we?'</ansi>");
            if (gotXP) {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP)</ansi>");
            }
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles into the barber chair again. Floyd picks up right where he left off.", user.UserId());
        }
        return true;
    }

    if (cmd == "gossip" || cmd == "news" || (cmd == "ask" && rest.indexOf("news") >= 0)) {
        var rumors = [
            "<ansi fg=\"8\">Floyd says: 'Now I don't know this for a fact, but Wally told me that Goober told him that Clara Edwards said -- and you didn't hear this from me -- that somebody left their screen door unlatched two nights running. In a row.' He nods significantly.</ansi>",
            "<ansi fg=\"8\">Floyd says: 'There is going to be a pie at the church social Friday. Everybody knows it. But what kind? That is the question. That is what people are not saying.' He clips a single hair and pauses.</ansi>",
            "<ansi fg=\"8\">Floyd says: 'I heard something about the new road past the lake. Nothing definite. Just something.' He clips another hair. He lets that sit there.</ansi>"
        ];
        var pick = Math.floor(Math.random() * rumors.length);
        SendUserMessage(user.UserId(), rumors[pick]);
        return true;
    }

    return false;
}

function onIdle(room) {

    var players = room.GetPlayers();
    if (players.length == 0) {
        return false;
    }

    var roll = UtilDiceRoll(1, 8);

    if (roll == 1) {
        room.SendText("<ansi fg=\"yellow\">Floyd pauses mid-clip, appears to remember something important, opens his mouth, thinks better of it, and continues cutting. The moment passes. The story remains unspoken. It will emerge when Floyd is ready.</ansi>");
        return true;
    }

    return false;
}

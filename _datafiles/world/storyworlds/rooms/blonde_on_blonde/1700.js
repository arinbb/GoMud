
// Columbia Studio A - Single room for Blonde on Blonde zone
// ZONE COMMANDS: return (exit zone), play harmonica/piano/organ (easter egg), read sheets/lyrics (examine lyrics)
var LIBRARY_ROOM = 1;
var QUEST_ID = 150;
var SOUVENIR_ID = 195;
var ROUNDS_NEEDED = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The organ chord fades. The tape slows on its reel. Dylan looks up from the lyric sheet, nods once as if this was expected, and the studio dissolves into the smell of old vinyl and library dust. A harmonica note lingers in your inner ear, bending slowly into silence.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into a wash of tape hiss and organ, dissolving back to the Library.", user.UserId());
        user.SetTempData("visited_blonde_on_blonde", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" || cmd == "use") {
        var target = rest.toLowerCase();
        if (target.indexOf("harmonica") >= 0 || target.indexOf("piano") >= 0 || target.indexOf("organ") >= 0) {
            if (user.GetMiscCharacterData("easter_bob_studio_play") != "found") {
                user.SetMiscCharacterData("easter_bob_studio_play", "found");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up a harmonica from the music stand and blow a tentative phrase. Dylan looks up from his lyric sheet. Al Kooper stops adjusting the organ. For three seconds the studio is very still. Then Dylan says: \"Again.\" You play it again. Something shifts in the air. It is not quite a song yet. It might become one.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plays a phrase on the studio harmonica. Dylan looks up from his lyric sheet.", user.UserId());
                user.GrantXP(200, "a take in the studio");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You play a phrase. The studio holds it for a moment. The tape is always rolling here.</ansi>");
            }
            return true;
        }
    }

    if (cmd == "look" || cmd == "read") {
        var target = rest.toLowerCase();
        if (target.indexOf("sheet") >= 0 || target.indexOf("lyric") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You pick up a lyric sheet from the floor. The handwriting is fast and private, full of crossings-out and arrows. One page works through something about visions -- a woman named Johanna who seems to exist only in the space between waking and sleep. Another page is a single long breath about a sad-eyed lady of the lowlands, verse after verse of devotion that could fill a whole side of a record. A third has JUST LIKE A WOMAN written across the top, the chorus rewritten four times, each version sadder than the last. And somewhere in the pile, in block letters: EVERYBODY MUST GET STONED, with a little drawing of a tambourine. You set the pages back down carefully, not on any stand in particular. That seems to be how it works here.</ansi>");
            return true;
        }
    }

    if (!user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_blonde_on_blonde";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        user.SetTempData("bob_studio_rounds", "0");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">...the needle finds the groove...</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">A harmonica wails once, high and aching, and the walls of the Listening Room dissolve into cigarette smoke and 1966 Nashville. You are standing in Columbia Studio A at two in the morning. Dylan is at the piano. The tape is rolling. The Nashville session musicians are tuning up, not sure what they are about to play. You are inside the album now.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }

    if (!user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }

    return true;
}

function onIdle(room) {
    var players = room.GetPlayers();
    var i;
    for (i = 0; i < players.length; i++) {
        var user = GetUser(players[i]);
        if (!user) {
            continue;
        }

        var roundStr = user.GetTempData("bob_studio_rounds");
        var rounds = 0;
        if (roundStr != "") {
            rounds = parseInt(roundStr, 10);
            if (isNaN(rounds)) {
                rounds = 0;
            }
        }
        rounds = rounds + 1;
        user.SetTempData("bob_studio_rounds", String(rounds));

        if (rounds >= ROUNDS_NEEDED && user.GetMiscCharacterData("souvenir_blonde_on_blonde") != "collected") {
            user.SetMiscCharacterData("souvenir_blonde_on_blonde", "collected");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The last take ends. The tape slows. For a moment the studio is perfectly still -- Dylan at the piano, Kooper at the organ, the Nashville cats holding their instruments like men who have just seen something they cannot explain. Fourteen songs. A double album. The longest, strangest, most beautiful rock record anyone has ever made, cut in a few nights by musicians who had never heard the songs before they played them. You were here for it. You heard it happen.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A harmonica in the key of A appears in your pack -- a memento of the sessions.</ansi>");
            var souvenir = CreateItem(SOUVENIR_ID);
            if (souvenir) {
                user.GiveItem(souvenir);
            }
            if (user.HasQuest(QUEST_ID)) {
                user.GiveQuest(QUEST_ID);
            }
        }
    }
    return false;
}

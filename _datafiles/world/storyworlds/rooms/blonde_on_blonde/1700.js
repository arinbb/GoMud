// Columbia Studio A - Blonde on Blonde entry room (1700)
// ZONE COMMANDS: return (exit zone), play harmonica/piano/organ (easter egg 200 XP), read sheets/lyrics (cycle fragments, quest step 2)
var LIBRARY_ROOM = 1;
var QUEST_ID = 150;
var SOUVENIR_ID = 195;

var lyricFragments = [
    "<ansi fg=\"8\">You pick up a page from the piano lid. In Dylan's cramped hand: a verse about visions -- a woman named Johanna who exists only in the space between waking and sleep, whose name fills every silence in every room. The word 'visions' appears seven times. The ink is smudged where his hand dragged across it.</ansi>",
    "<ansi fg=\"8\">You find a sheet under the organ bench. A single run-on verse about a sad-eyed lady of the lowlands -- eleven minutes of devotion compressed onto two pages, every line a new way of describing the same unreachable person. The handwriting gets smaller as the song gets longer, as if the words are trying to fit inside something.</ansi>",
    "<ansi fg=\"8\">A page on the floor near the microphone stand. JUST LIKE A WOMAN across the top in block letters, the chorus rewritten four times, each version sadder than the last. She breaks just like a little girl. The word 'breaks' is underlined twice. In the margin: 'the rain.''</ansi>",
    "<ansi fg=\"8\">A crumpled page near the door. EVERYBODY MUST GET STONED in block letters with a little drawing of a tambourine. Below it, in smaller writing: 'Rainy Day Women #12 & 35.' The math is wrong on purpose. Everything about this song is wrong on purpose, which is what makes it right.</ansi>",
    "<ansi fg=\"8\">A lyric sheet taped to the vocal booth glass. 'I Want You' -- the simplest, most direct words on the album, surrounded by the most surreal imagery Dylan has ever written. The guilty undertaker sighs. The drunken politician leaps. And in the middle of all of it: I want you. Three words carrying everything the rest of the album circles around.</ansi>",
    "<ansi fg=\"8\">Half a page tucked inside a chord chart. 'Stuck Inside of Mobile with the Memphis Blues Again' -- the title alone takes up a whole line. Below it, verses about Shakespeare in the alley, Mona with her hubcaps, Grandpa dying on the Greyhound bus. Every verse ends the same way. You are always stuck. The blues is always again.</ansi>"
];

function onEnter(user, room) {
    var visitedKey = "visited_blonde_on_blonde";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        user.SetTempData("bob_lyrics_read", "0");
        user.SetTempData("bob_lyrics_index", "0");
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

    if (cmd == "read") {
        var target = rest.toLowerCase();
        if (target.indexOf("sheet") >= 0 || target.indexOf("lyric") >= 0) {
            var indexStr = user.GetTempData("bob_lyrics_index");
            var index = 0;
            if (indexStr != "") {
                index = parseInt(indexStr, 10);
                if (isNaN(index)) {
                    index = 0;
                }
            }

            var countStr = user.GetTempData("bob_lyrics_read");
            var count = 0;
            if (countStr != "") {
                count = parseInt(countStr, 10);
                if (isNaN(count)) {
                    count = 0;
                }
            }

            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), lyricFragments[index]);

            count = count + 1;
            index = (index + 1) % lyricFragments.length;
            user.SetTempData("bob_lyrics_read", String(count));
            user.SetTempData("bob_lyrics_index", String(index));

            if (count == 3) {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Dylan looks up from the piano. He has been watching you read. 'You're getting it,' he says quietly. 'Most people hear one song. You're hearing the whole thing.' He goes back to the keys. Something has shifted -- the album is opening up for you now, revealing its rooms.</ansi>");
                if (user.HasQuest(QUEST_ID)) {
                    user.GiveQuest(QUEST_ID);
                }
            }

            return true;
        }
    }

    return false;
}

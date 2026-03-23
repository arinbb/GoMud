
// Columbia Studio A - Entry hub for Blonde on Blonde zone
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The organ chord fades. The tape slows on its reel. Dylan looks up from the lyric sheet, nods once as if this was expected, and the studio dissolves into the smell of old vinyl and library dust. You are back in the Grand Library, the harmonica note still ringing in your inner ear.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into a wash of tape hiss and organ, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" || cmd == "use") {
        var target = rest.toLowerCase();
        if (target.indexOf("harmonica") >= 0 || target.indexOf("piano") >= 0 || target.indexOf("organ") >= 0) {
            if (user.GetMiscCharacterData("easter_bob_studio_play") != "found") {
                user.SetMiscCharacterData("easter_bob_studio_play", "found");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up a harmonica from the music stand and blow a tentative phrase. Dylan looks up from his lyric sheet. Al Kooper stops adjusting the organ. For three seconds the studio is very still. Then Dylan says: \"Again.\" You play it again. Something shifts in the air. It's not quite a song yet. It might become one.</ansi>");
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
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You pick up one of the lyric sheets from the floor. The handwriting is fast and private, full of crossings-out. One page seems to be working on something about a visions -- the word appears seven times in various forms. Another page is all one long run-on line about a ragman and a senator and Shakespeare and Mobile, Alabama. It doesn't look like a song. It looks like a mind working at full speed. You put it back carefully, not on any stand in particular, which is probably fine.</ansi>");
            return true;
        }
    }

    if (!user.HasQuest(150)) {
        user.GiveQuest(150);
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">...the needle finds the groove...</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">A harmonica wails once, high and aching, and the walls of the Listening Room dissolve into cigarette smoke and 1966 Nashville. You are standing in Columbia Studio A. Dylan is at the piano. The tape is rolling. You are inside the album now.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    return false;
}

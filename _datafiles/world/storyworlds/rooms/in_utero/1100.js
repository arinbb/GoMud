
// Pachyderm Studios - Single room for In Utero zone
// ZONE COMMANDS: return (go back to Library), play/listen (easter egg), read notebook (lyrics)
var LIBRARY_ROOM = 1;
var QUEST_ID = 70;
var SOUVENIR_ID = 155;
var IDLE_ROUNDS_TO_COMPLETE = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd === "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The tape slows, the reels grind to a halt, and the red recording light finally goes dark. The studio dissolves into static -- white noise that thins and fades until you are standing in silence, back in the Grand Library, your ears still ringing.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into a wash of tape hiss and white noise, dissolving back to the Library.", user.UserId());
        user.SetTempData("visited_in_utero", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd === "play" || cmd === "listen") {
        var easterKey = "easter_in_utero_listen";
        if (user.GetMiscCharacterData(easterKey) === "found") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You close your eyes and listen. The music washes over you again -- familiar now, but no less powerful. Some albums only need to hit you once.</ansi>");
        } else {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "listening to In Utero");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You close your eyes and just listen. The three of them lock in -- drums, bass, guitar -- raw and unpolished and absolutely furious. Albini captures it all without flinching. For a moment you are not a visitor. You are in the room. You are part of the sound.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You gained 200 experience for truly listening.</ansi>");
        }
        return true;
    }

    if (cmd === "read" && rest === "notebook") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You flip through the notebook carefully. Kurt's handwriting is a mess of urgency and revision.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">One page is dominated by a sketch of an orchid with teeth, surrounded by the words HEART SHAPED BOX written over and over in different sizes. Another page has FRANCES FARMER WILL HAVE HER REVENGE ON SEATTLE underlined three times, with notes about psychiatric wards and stolen lives. Toward the back, a cleaner page reads ALL APOLOGIES in careful block letters, as if those two words required more precision than anything else on the album.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The last page with writing is just a list: Serve the Servants. Scentless Apprentice. Dumb. Very Ape. Milk It. Pennyroyal Tea. Tourettes. The track listing, in order, like a setlist for the end of something.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_in_utero";
    if (user.GetTempData(visitedKey) !== "yes") {
        user.SetTempData(visitedKey, "yes");
        user.SetTempData("in_utero_idle_count", "0");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">...static...</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">A single chord -- massive, distorted, and beautiful -- tears through the air like a wound opening. The needle drops. The tape rolls. You are inside the album now.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");

        if (!user.HasQuest(QUEST_ID)) {
            user.GiveQuest(QUEST_ID);
        }
    }
    return true;
}

function onIdle(room) {
    var players = room.GetPlayers();
    var i;
    for (i = 0; i < players.length; i++) {
        var player = players[i];
        var countStr = player.GetTempData("in_utero_idle_count");
        if (countStr === "") {
            countStr = "0";
        }
        var count = parseInt(countStr, 10) + 1;
        player.SetTempData("in_utero_idle_count", String(count));

        if (count >= IDLE_ROUNDS_TO_COMPLETE && player.GetMiscCharacterData("souvenir_in_utero") !== "collected") {
            player.SetMiscCharacterData("souvenir_in_utero", "collected");
            SendUserMessage(player.UserId(), "");
            SendUserMessage(player.UserId(), "<ansi fg=\"cyan\">Something shifts. The session winds down -- not with a bang but with the quiet click of a tape machine stopping. You have been here long enough to feel it, the weight of what was made in this room. Thirteen songs. Two weeks. An album that sounds like the inside of a body.</ansi>");
            SendUserMessage(player.UserId(), "");
            var souvenir = CreateItem(SOUVENIR_ID);
            if (souvenir) {
                player.GiveItem(souvenir);
                SendUserMessage(player.UserId(), "<ansi fg=\"yellow\">Steve Albini slides something across the mixing board to you -- a cracked jewel case. The disc is gone, but the liner notes remain. Honest, raw, and permanent.</ansi>");
            }
            player.GiveQuest(QUEST_ID);
            SendUserMessage(player.UserId(), "<ansi fg=\"green\">Quest complete: In Utero.</ansi>");
        }
    }
    return false;
}

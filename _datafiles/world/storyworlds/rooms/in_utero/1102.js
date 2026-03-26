
// The Isolation Booth - In Utero zone (secret room)
// ZONE COMMANDS: return (go back to Library), sing/say (atmospheric reaction), read notebook (lyrics)
var LIBRARY_ROOM = 1;
var QUEST_ID = 70;
var SOUVENIR_ID = 155;

function onCommand(cmd, rest, user, room) {

    if (cmd === "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The padded walls seem to exhale as you leave. The silence follows you for a moment -- a ringing absence that fades slowly as the Grand Library resolves around you, warm and solid and mercifully full of ambient sound.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps out of the silence and vanishes, returning to the Library.", user.UserId());
        user.SetTempData("visited_in_utero", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd === "sing") {
        var singKey = "easter_in_utero_sing";
        if (user.GetMiscCharacterData(singKey) !== "found") {
            user.SetMiscCharacterData(singKey, "found");
            user.GrantXP(200, "singing in the isolation booth");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You open your mouth and let something out. It does not matter what. The padded walls absorb it completely -- no echo, no reflection, just your voice hanging in dead air for a moment before vanishing. It feels like confessing to an empty room. It feels like the room was built for exactly this.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You gained 200 experience for finding your voice in the silence.</ansi>");
            SendRoomMessage(room.RoomId(), "A voice rises briefly in the isolation booth -- raw and unaccompanied -- then the silence swallows it whole.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sing again into the dead air. The room absorbs it without judgment. Some things only need to be said once, but saying them again does not diminish them.</ansi>");
        }
        return true;
    }

    if (cmd === "say") {
        var sayKey = "easter_in_utero_sing";
        if (user.GetMiscCharacterData(sayKey) !== "found") {
            user.SetMiscCharacterData(sayKey, "found");
            user.GrantXP(200, "speaking in the isolation booth");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">Your words fall into the padded silence and are swallowed whole. No echo. No resonance. Just your voice, naked and unadorned, existing for a moment in the same space where Kurt recorded every vocal on the album. The microphone is not on, but the room remembers.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You gained 200 experience for speaking into the silence.</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Your words vanish into the padding. The room takes everything you give it and offers nothing back. That is its purpose.</ansi>");
        }
        return false;
    }

    if (cmd === "read" && rest === "notebook") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You kneel beside the mic stand and pick up the notebook. Kurt's handwriting is a mess of urgency and revision.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">One page is dominated by a sketch of an orchid with teeth, surrounded by the words HEART SHAPED BOX written over and over in different sizes. Beneath it, crossed out three times: I wish I could eat your cancer when you turn black.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">Another page has FRANCES FARMER WILL HAVE HER REVENGE ON SEATTLE underlined three times, with notes about psychiatric wards and stolen lives. In the margin: She did not deserve what they did to her. Nobody does.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">Toward the back, a cleaner page reads ALL APOLOGIES in careful block letters, as if those two words required more precision than anything else on the album. Below them: What else should I be? All apologies. The handwriting is steadier here. Almost calm.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The last page with writing is a track listing, in order, like a setlist for the end of something: Serve the Servants. Scentless Apprentice. Heart-Shaped Box. Rape Me. Frances Farmer. Dumb. Very Ape. Milk It. Pennyroyal Tea. Radio Friendly Unit Shifter. Tourettes. All Apologies.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var enteredKey = "in_utero_entered_isolation";
    if (user.GetTempData(enteredKey) !== "yes") {
        user.SetTempData(enteredKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The door seals behind you and the world goes quiet.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The silence is not empty. It is full -- full of every vocal that was recorded here, every scream and whisper absorbed by the padding and held in the walls like memory. This is the room where the words became real. Where the notebook became the album. Where one person stood alone with a microphone and said the things that could not be said any other way.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'sing' or 'say' something. Type 'read notebook' to examine the lyrics.)</ansi>");

        // Complete quest step 3: Find the Isolation Booth
        if (user.HasQuest(QUEST_ID)) {
            user.Command("quest advance " + QUEST_ID);
        }

        // Give souvenir if not already collected
        if (user.GetMiscCharacterData("souvenir_in_utero") !== "collected") {
            user.SetMiscCharacterData("souvenir_in_utero", "collected");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Something shifts. The session is over. You have been deep enough into the recording to find the room where the words lived before they were songs. Thirteen tracks. Two weeks. An album that sounds like the inside of a body.</ansi>");
            var souvenir = CreateItem(SOUVENIR_ID);
            if (souvenir) {
                user.GiveItem(souvenir);
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">On the floor beside the notebook, you find a cracked jewel case. The disc is gone, but the liner notes remain. You pick it up. Honest, raw, and permanent.</ansi>");
            }
        }
    }
    return true;
}

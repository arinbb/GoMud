// ZONE COMMANDS:
//   play guitar (2320), layer (2320) - easter egg, 200 XP
//   listen (2320) - atmospheric moment
//   return - goes back to Grand Library

var LIBRARY_ROOM = 1;
var QUEST_ID = 390;
var SOUVENIR_ID = 315;
var IDLE_ROUNDS_KEY = "siamese_dream_idle_rounds";

function onEnter(user, room) {
    var visitedKey = "visited_siamese_dream";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        user.SetTempData(IDLE_ROUNDS_KEY, "0");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">...tape hiss...</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">A wall of distorted guitar detonates against you -- layered and massive and beautiful -- and the Listening Room dissolves into static and heat. You are standing in a recording studio in Atlanta. The summer of 1993. The air conditioning is broken and the tape is rolling and something extraordinary is happening, despite everything.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");

        if (!user.HasQuest(QUEST_ID)) {
            user.GiveQuest(QUEST_ID);
        }
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The guitar layers peel away one by one until there is nothing left but tape hiss, and the hiss fades to silence, and you are back in the Grand Library with the smell of warm electronics still in your nose.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a wash of purple guitar distortion, fading back to the Library.", user.UserId());
        user.SetTempData("visited_siamese_dream", "");
        user.SetTempData(IDLE_ROUNDS_KEY, "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" || cmd == "layer") {
        if (rest.indexOf("guitar") >= 0 || cmd == "layer") {
            if (user.GetMiscCharacterData("easter_siamese_studio") != "found") {
                user.SetMiscCharacterData("easter_siamese_studio", "found");
                user.GrantXP(200, "adding a layer to Siamese Dream");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"13\">You reach for one of the guitars leaning against the amp. The moment you touch the strings a new layer of sound rises from the studio, weaving into what was already there. Butch Vig looks up from the board. He does not say anything. He reaches over and turns up the fader.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " touches a guitar string, and a new layer of sound rises in the studio.", user.UserId());
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"13\">You have already added your layer. It is in there somewhere, threaded between the others, indistinguishable from the whole.</ansi>");
            }
            return true;
        }
    }

    if (cmd == "listen") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">You close your eyes and listen. Really listen. The layers peel apart -- you can hear individual guitar tracks now, dozens of them, each one a slightly different voicing of the same chord, stacked so densely they become a new instrument entirely. Underneath it all, Jimmy's drums hold everything together with a precision that borders on supernatural. The bass hums in your chest. The distortion is not noise. It is architecture.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " closes their eyes, listening to the layers of sound.", user.UserId());
        return true;
    }

    return false;
}

function onIdle(room) {
    var players = room.GetPlayers();
    var i;
    for (i = 0; i < players.length; i++) {
        var user = GetUser(players[i]);
        if (!user) {
            continue;
        }

        if (!user.HasQuest(QUEST_ID)) {
            continue;
        }

        var rounds = parseInt(user.GetTempData(IDLE_ROUNDS_KEY)) || 0;
        rounds = rounds + 1;
        user.SetTempData(IDLE_ROUNDS_KEY, String(rounds));

        if (rounds >= 3) {
            // Quest step 1: enter the studio (already done via onEnter)
            // Quest step 2: absorb the session - auto-complete after 3+ rounds
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"13\">You have been here long enough to hear it -- the whole record taking shape, track by track, layer by layer. Cherub Rock detonating. Today rising like the sun through distortion. Disarm stripped bare. Mayonaise building forever. Silverfuck grinding for nine minutes. Soma floating. Hummer droning. And at the end, Luna, quiet and perfect, the last note hanging in the air like moonlight on tape.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A battered Big Muff Pi distortion pedal appears in your hands, the gain knob all the way up. This is the sound of Siamese Dream. Everything beautiful filtered through fuzz until it becomes something new.</ansi>");
            user.GiveItem(CreateItem(SOUVENIR_ID));
            user.SetMiscCharacterData("souvenir_siamese_dream", "collected");
            user.SetTempData(IDLE_ROUNDS_KEY, "done");
        }
    }
    return false;
}

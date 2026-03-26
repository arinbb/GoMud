
// The Old Man's Cottage - Harvest
// ZONE COMMANDS: return (library), sit (atmosphere), ask old man about life/time/neil/age/harvest/youth
var LIBRARY_ROOM = 1;
var QUEST_ID = 370;
var SOUVENIR_ID = 305;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cottage porch fades, the rocking chair stills, and the old man's patient gaze softens into golden light. The view of the fields — all those layered years of watching — dissolves gently and you are back in the Grand Library, carrying with you the weight of a long life observed from a porch.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks down the fence line and fades into the afternoon light, returning to the Library.", user.UserId());
        user.SetTempData("visited_harvest", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit on the porch steps near the old man's rocking chair. He does not say anything. You do not say anything. The two of you sit together and watch the fields in the late light, the wheat bending in the wind, and for a while that is enough. The rocking chair creaks. The wind chime turns. Time passes the way it passes when you stop trying to hold onto it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits on the cottage porch steps, watching the fields.", user.UserId());

        // Sitting counts as spending time with the old man
        var roundsStr = user.GetTempData("harvest_oldman_rounds");
        var rounds = 0;
        if (roundsStr != "") {
            rounds = parseInt(roundsStr, 10);
            if (isNaN(rounds)) {
                rounds = 0;
            }
        }
        rounds = rounds + 1;
        user.SetTempData("harvest_oldman_rounds", String(rounds));

        return true;
    }

    return false;
}

function onEnter(user, room) {
    // Track rounds spent at the cottage
    var roundsStr = user.GetTempData("harvest_oldman_rounds");
    if (roundsStr == "") {
        user.SetTempData("harvest_oldman_rounds", "0");
    }
    return true;
}

function onIdle(room) {
    var players = room.GetPlayers();
    var i;
    for (i = 0; i < players.length; i++) {
        var player = players[i];

        // Increment rounds spent at the cottage
        var roundsStr = player.GetTempData("harvest_oldman_rounds");
        var rounds = 0;
        if (roundsStr != "") {
            rounds = parseInt(roundsStr, 10);
            if (isNaN(rounds)) {
                rounds = 0;
            }
        }
        rounds = rounds + 1;
        player.SetTempData("harvest_oldman_rounds", String(rounds));

        // Check quest completion: talked to Danny AND spent 2+ rounds here
        var dannyTalked = player.GetTempData("danny_talked");
        var alreadyComplete = player.GetMiscCharacterData("souvenir_harvest");

        if (dannyTalked == "true" && rounds >= 2 && alreadyComplete != "collected") {
            player.SetMiscCharacterData("souvenir_harvest", "collected");
            SendUserMessage(player.UserId(), "");
            SendUserMessage(player.UserId(), "<ansi fg=\"cyan\">Something settles. You have sat with the old man long enough to feel time the way he feels it — slow, wide, complete. And you have sat with Danny long enough to feel what time takes away. The warmth and the sadness. The golden light and the needle. That is Harvest — not one or the other, but both at once, held together in ten songs on a single LP.</ansi>");
            SendUserMessage(player.UserId(), "");

            var souvenir = CreateItem(SOUVENIR_ID);
            if (souvenir) {
                player.GiveItem(souvenir);
                SendUserMessage(player.UserId(), "<ansi fg=\"yellow\">The old man reaches into his shirt pocket and holds something out to you without looking — a guitar pick, worn smooth on one side from ten thousand songs. \"Neil left this on the fence post,\" he says. \"I been meaning to give it back. You take it.\"</ansi>");
            }
            player.GiveQuest(QUEST_ID);
            SendUserMessage(player.UserId(), "<ansi fg=\"green\">Quest complete: Harvest.</ansi>");
        }
    }
    return false;
}

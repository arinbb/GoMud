
// Broken Arrow Ranch - Single room for Harvest zone
// ZONE COMMANDS: return (leave), play guitar/harmonica (easter egg), strum (easter egg), sit (atmosphere)
var LIBRARY_ROOM = 1;
var QUEST_ID = 370;
var SOUVENIR_ID = 305;

function onEnter(user, room) {
    var visitedKey = "visited_harvest";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">...the needle finds the groove...</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A harmonica blooms from the spinning vinyl -- one long searching note -- and the Listening Room dissolves in a flood of warm gold light. You are standing on a California ranch in 1972. The wheat is tall and almost ready. The afternoon is going on forever. You are inside the album now.</ansi>");
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
        var user = GetUser(players[i]);
        if (!user) {
            continue;
        }

        // Track rounds spent on the ranch
        var rounds = parseInt(user.GetTempData("harvest_rounds") || "0") + 1;
        user.SetTempData("harvest_rounds", "" + rounds);

        // Auto-complete quest after 3+ rounds
        if (rounds >= 3 && user.HasQuest(QUEST_ID)) {
            // Complete step 1 (arrive) and step 2 (soak it in)
            user.GiveQuest(QUEST_ID);
            user.GiveQuest(QUEST_ID);

            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have been here long enough to hear it all -- the guitar on the porch, the pedal steel in the barn, the old man's rocker across the fence, the hawk above the field. The ranch has given you everything it has. The harvest is in. The album ends. The ranch does not end.</ansi>");

            if (user.GetMiscCharacterData("souvenir_harvest") != "collected") {
                user.SetMiscCharacterData("souvenir_harvest", "collected");
                var pick = CreateItem(SOUVENIR_ID);
                if (pick) {
                    user.GiveItem(pick);
                    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You find a guitar pick on the porch rail -- worn smooth on one side, the kind that has played ten thousand songs and will play ten thousand more. You pocket it.</ansi>");
                }
            }
        }
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The golden light thins and fades. The harmonica phrase rises one last time, the pedal steel bends its long note toward silence, and the ranch dissolves into warm static. You are back in the Grand Library. The smell of wheat and woodsmoke still in your clothes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a wash of pedal steel and golden light, fading back to the Library.", user.UserId());
        user.SetTempData("visited_harvest", "");
        user.SetTempData("harvest_rounds", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play") {
        var target = rest.toLowerCase();
        if (target.indexOf("guitar") >= 0 || target.indexOf("harmonica") >= 0 || target == "") {
            if (user.GetMiscCharacterData("easter_harvest_play") != "found") {
                user.SetMiscCharacterData("easter_harvest_play", "found");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the harmonica from the fence post and blow a long note across the ranch. It carries further than you expected, out over the wheat, over the ridge, into the afternoon air. Neil Young looks up from the porch. He does not say anything. He nods once, the way a man nods when someone does something he respects. You play another note. The wheat moves.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " picks up the harmonica from the fence post and plays a long note over the ranch.", user.UserId());
                user.GrantXP(200, "playing the harmonica at the ranch");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You play a note on the harmonica. It rings out over the fields and fades. The afternoon holds it briefly.</ansi>");
            }
            return true;
        }
    }

    if (cmd == "strum") {
        if (user.GetMiscCharacterData("easter_harvest_play") != "found") {
            user.SetMiscCharacterData("easter_harvest_play", "found");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You find Neil's Martin leaning against the porch rail and strum a G chord. It rings out across the ranch, warm and open, the sound rolling over the wheat like wind. Neil looks up and nods once. The Stray Gators in the barn pause and listen.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " strums a chord on the guitar. It rings out over the ranch.", user.UserId());
            user.GrantXP(200, "playing guitar at the ranch");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You strum the guitar. The chord rings out over the wheat and fades slowly.</ansi>");
        }
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit on the porch steps. The wood is warm from the afternoon sun. From here you can see the whole ranch -- the wheat, the barn with its doors open, the old man's cottage across the fence, the road going nowhere into the hills. The light is so golden it feels like it has weight. Neil plays a few bars of something quiet. You do not need to go anywhere. You are already here.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits on the porch steps and watches the light over the ranch.", user.UserId());
        return true;
    }

    return false;
}

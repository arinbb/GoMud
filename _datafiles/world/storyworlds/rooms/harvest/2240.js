
// Broken Arrow Ranch - Entry hub for Harvest zone
var LIBRARY_ROOM = 1;
var QUEST_ID = 370;

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
        
        // Quest step 5: Return to the ranch after walking all ten tracks
        var tracksVisited = parseInt(user.GetMiscCharacterData("harvest_tracks_visited") || "0");
        if (tracksVisited >= 10 && user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have walked the whole ranch. All ten tracks. The harmonica, the pedal steel, the old man on his porch, the small dark room where the Needle played. You have heard it all and come back here to the fields in the golden afternoon where it started. The wheat is still heavy. The light is still long. The album ends. The ranch does not end.</ansi>");
        if (user.GetMiscCharacterData("souvenir_harvest") != "collected") {
        user.SetMiscCharacterData("souvenir_harvest", "collected");
        }
        }
        
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The harmonica phrase rises one last time, the pedal steel bends its long note toward silence, and the ranch dissolves into warm static. The golden light thins and fades. You are back in the Grand Library. The smell of wheat and woodsmoke still in your clothes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a wash of pedal steel and golden light, fading back to the Library.", user.UserId());
        user.SetTempData("visited_harvest", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play") {
        var target = rest.toLowerCase();
        if (target.indexOf("guitar") >= 0 || target.indexOf("harmonica") >= 0 || target == "") {
            if (user.GetMiscCharacterData("easter_harvest_play") != "found") {
                user.SetMiscCharacterData("easter_harvest_play", "found");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the harmonica from the fence post and blow a long note across the ranch. It carries further than you expected, out over the wheat, over the ridge, into the afternoon air. Neil Young looks up from the far end of the field. He does not say anything. He nods once, the way a man nods when someone does something he respects. You play another note. The wheat moves.</ansi>");
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
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You find the guitar leaning against the barn and strum a G chord. It rings out across the ranch, warm and open. Neil Young looks up from the far field and nods once.</ansi>");
            user.GrantXP(200, "playing guitar at the ranch");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You strum the guitar. The chord rings out over the wheat and fades slowly.</ansi>");
        }
        return true;
    }

    return false;
}

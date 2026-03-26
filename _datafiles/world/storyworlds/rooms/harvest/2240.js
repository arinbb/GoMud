
// Broken Arrow Ranch - Harvest entry room
// ZONE COMMANDS: return (library), play guitar/harmonica (easter egg 200xp), sit (atmosphere)
var LIBRARY_ROOM = 1;
var QUEST_ID = 370;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The golden light softens, the wheat fields blur, and the sound of the guitar fades like a song ending on the radio late at night. The ranch dissolves into warm silence and you find yourself back in the Grand Library, carrying something gentle and sad you did not have before.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks into the wheat fields and disappears into the golden light, returning to the Library.", user.UserId());
        user.SetTempData("visited_harvest", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play") {
        var target = rest.toLowerCase();
        if (target.indexOf("guitar") >= 0 || target.indexOf("harmonica") >= 0) {
            var instrument = "guitar";
            if (target.indexOf("harmonica") >= 0) {
                instrument = "harmonica";
            }
            var easterKey = "easter_harvest_play";
            if (user.GetMiscCharacterData(easterKey) == "found") {
                if (instrument == "guitar") {
                    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the Martin and strum a few open chords. Neil glances over from the porch steps, nods once, and joins in — his fingers finding a harmony line above yours. For a moment the two of you play together, the sound drifting out over the fields. Then the moment passes and you set the guitar back against the rail.</ansi>");
                } else {
                    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the harmonica from the fence post and blow a long, searching note. Neil looks up from his guitar and smiles — that quiet, half-there Neil Young smile. He starts to play along, a simple chord progression underneath your harmonica. The music floats out over the ranch like smoke.</ansi>");
                }
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plays " + instrument + " with Neil on the porch.", user.UserId());
            } else {
                user.SetMiscCharacterData(easterKey, "found");
                user.GrantXP(200, "playing music with Neil Young");
                if (instrument == "guitar") {
                    SendUserMessage(user.UserId(), "");
                    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the Martin D-45. It is heavier than you expected — the weight of real wood, real music. You strum a D chord and the sound rings out across the porch, warm and true. Neil looks up from the steps, surprised, then pleased. He picks up his own guitar and joins in, finding a harmony line that makes your simple chord sound like the beginning of something.</ansi>");
                    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">For a few bars you play together in the golden afternoon light, two guitars on a California porch, and it is the most natural thing in the world.</ansi>");
                } else {
                    SendUserMessage(user.UserId(), "");
                    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You lift the harmonica from the fence post. It is warm from the sun. You bring it to your lips and blow — a long, lonely note in the key of G that floats out over the wheat fields. Neil looks up from the porch, startled, then smiles. He picks up his guitar and starts to play beneath your harmonica, a simple two-chord pattern, and suddenly you are inside the song. You are playing the opening of Heart of Gold on a California afternoon in 1972.</ansi>");
                }
                SendUserMessage(user.UserId(), "<ansi fg=\"green\">You earned 200 XP for playing music with Neil.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " picks up the " + instrument + " and plays with Neil. The music drifts out over the fields.", user.UserId());
            }
            return true;
        }
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit down on the porch and lean back against the rail. The wood is warm from the sun. From here you can see the wheat fields rolling east, the fence line going north, the barn where the Stray Gators are setting up. Neil plays quietly on the steps, not performing, just playing — the way you play when nobody is listening and the song is still finding its shape.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The light changes. The shadows lengthen. You sit and watch the harvest come in, slow and golden, and for a little while you understand why someone would write an album about this exact feeling.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits on the porch and watches the fields in the golden light.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_harvest";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">The needle drops into the groove and the world shifts. Vinyl crackle becomes wind through wheat. Studio warmth becomes California sun. You are standing at the edge of a ranch in Northern California, late afternoon, 1972. The air smells like dry grass and warm earth. Somewhere a guitar is playing, quiet and unhurried, the sound of someone who has all the time in the world and knows exactly how little of it there is.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");

        if (!user.HasQuest(QUEST_ID)) {
            user.GiveQuest(QUEST_ID);
        }
    }
    return true;
}

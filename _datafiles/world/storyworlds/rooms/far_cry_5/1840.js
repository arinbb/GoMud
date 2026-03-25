// Far Cry 5 - Dutch's Bunker (entry room)
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var visitedKey = "visited_far_cry_5";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The screen on the console fills with aerial footage: Montana mountains, golden valley, a river, a church steeple. A hymn rises on the soundtrack, familiar and wrong, the congregation singing with the certainty of people who believe the world is ending. A helicopter descends toward the church. The deputy's badge catches the light. Then a hatch opens below the screen and the bunker smell hits you — diesel, coffee, old anxiety — and you are standing on a concrete floor in Dutch's bunker, Montana, and outside someone just locked down the whole county, and the radio is saying things that are not good.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (!user.HasQuest(200)) {
        user.GiveQuest(200);
        user.Command("quest advance 200");
        }
        
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The radio static rises to fill the bunker. Dutch's map of Hope County blurs and shifts, the red marks dissolving into the warm amber light of the Grand Library. The smell of diesel fades. The hymn fades. You are back among the shelves.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by radio static and the echo of distant hymns, dissolving from the bunker.", user.UserId());
        user.SetTempData("visited_far_cry_5", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen" || cmd == "radio") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You tune the scanner. Static. A voice reading scripture. More static. Two cultists discussing a patrol route. Static. A woman's voice, soft and wrong: 'Joseph loves you. Come home.' Static. Dutch's frequency: encrypted, bouncing, staying ahead of them. For now.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("map") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The Hope County map is covered in Dutch's annotations. Red marks at the major intersections: roadblocks. Circles around the compound, the ranch, the Veterans Center. Green stars at resistance safehouses. And scattered across the county, marked in red ink and dated: LOST. LOST. LOST. Dutch has been watching this happen for months. He has been waiting for someone to come who could do something about it.</ansi>");
        return true;
    }

    return false;
}

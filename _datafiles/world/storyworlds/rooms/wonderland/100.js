
// ZONE COMMANDS: fall (100), jump (100), grab (100), drink (100), eat cake (100), open/knock door (100), look hole/shelves/bottle/cake/clock/roots/darkness/marmalade (100)
// Wonderland entry room - handles "return" command to go back to library
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The world around you shimmers and dissolves like watercolors in rain. Letters and words swirl past you -- fragments of the story returning to their pages. With a gentle thud, you find yourself back in the Grand Library, the book closed in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers, dissolves into a swirl of text and illustration, and vanishes back to the Library.", user.UserId());
        user.SetTempData("visited_wonderland", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "grab" || cmd == "take" || (cmd == "get" && rest.indexOf("jar") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You reach for one of the jars on the earthen shelves. Your fingers close around it. It is heavier than expected and lighter than expected simultaneously. The label reads something different each time you try to read it -- first Best Intentions, then Piccalilli, then simply Later. You put it back. Some things are better left on the shelf.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches for a jar on the shelf, peers at the label with confusion, and replaces it carefully.", user.UserId());
        return true;
    }

    if (cmd == "drink" && (rest == "" || rest.indexOf("bottle") >= 0 || rest.indexOf("drink me") >= 0)) {
        var easterKey2 = "wonderland_drinkme";
        if (user.GetMiscCharacterData(easterKey2) != "found") {
            user.SetMiscCharacterData(easterKey2, "found");
            user.GrantXP(150, "drinking from the DRINK ME bottle");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You uncork the little bottle and take a careful sip. It tastes of cherry-tart and custard and roast turkey and toffee and pineapple and hot buttered toast all at once. The hall rushes upward around you as you shrink to ten inches tall. Every door is suddenly enormous. The three-legged table is a ceiling. Then, gradually, you return to your usual height. The bottle is still full.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- Curiouser and curiouser.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You sip from the DRINK ME bottle again. The shrinking is less surprising now. The world rushes upward and then back. The bottle remains perpetually full. You suspect it will always be full.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drinks from the tiny bottle and briefly becomes about ten inches tall.", user.UserId());
        return true;
    }

    if (cmd == "eat" && rest.indexOf("cake") >= 0) {
        var easterKey3 = "wonderland_eatme";
        if (user.GetMiscCharacterData(easterKey3) != "found") {
            user.SetMiscCharacterData(easterKey3, "found");
            user.GrantXP(150, "eating the EAT ME cake");
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You eat a small piece of cake. Immediately you shoot upward, your head brushing the ceiling of the hall, your feet feeling very far away. The doors are now all too small. Every problem that existed before is still there, only larger. Then you return to normal. The cake is still there, also returned to normal.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- EAT ME, the cake insisted. You obliged.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You eat more cake. The growing is familiar now. Your head touches the ceiling briefly and then you are yourself again. The cake regrows. Of course it does.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " eats a piece of cake and shoots upward before returning to normal size.", user.UserId());
        return true;
    }

    if (cmd == "knock" || (cmd == "open" && rest.indexOf("door") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You knock on one of the doors. There is a long pause. Then something knocks back, from the inside, in exactly the same pattern. You knock again, slightly differently. It replies, slightly differently. This could go on indefinitely. You are not sure whether you are communicating or just echoing. Perhaps those are the same thing.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " knocks on one of the locked doors. Something knocks back.", user.UserId());
        return true;
    }

    if (cmd == "fall" || cmd == "jump") {
        var easterKey = "wonderland_fall";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(150, "remembering the fall");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You close your eyes and remember the fall. Shelves of marmalade. Maps. A pair of empty boots. The terrible suspense of not knowing when the bottom would arrive. And then -- it did. Here you are. The memory costs you nothing and gives you something you can't quite name.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP -- Down, down, down.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You recall the fall again. The shelves going past. The orange marmalade jar. The curious unhurried quality of the descent. It still makes no physical sense. That seems correct.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " goes very still, eyes closed, reliving something.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_wonderland";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You tumble through a tunnel of words and illustrations, pages fluttering past like butterflies, until you land with a soft thump...</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return false;
}

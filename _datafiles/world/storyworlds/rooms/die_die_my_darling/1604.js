
// Die! Die! My Darling! - The Drawing Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grey English lane unravels like film leader. Hedgerow and grey sky dissolve into flickering frames — a woman's face, a Bible, a locked barn door — and then the warm light of the Library reasserts itself around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into grey celluloid frames and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" || cmd == "look" || cmd == "open") {
        var target = rest.toLowerCase();
        if (target == "scrapbook" || target == "book" || target == "album") {
            if (user.GetMiscCharacterData("ddie_easter_scrapbook") != "found") {
                user.SetMiscCharacterData("ddie_easter_scrapbook", "found");
                user.GrantXP(200, "the scrapbook discovery");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">You pull the scrapbook from behind the cushion. The cover is plain, but inside — inside is a different world. Photographs, dozens of them, mounted with care on thick card pages. A woman, young and beautiful and vital, in theatrical costumes, on stage, in dressing rooms. She has paint on her lips. Her dresses are coloured — red and gold and deep blue. She is laughing in half of them. She looks like someone who was once intensely, almost defiantly alive.</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">There is a name written in a careful hand at the front: <ansi fg=\"white\">E. Trefoile. 1923-1947.</ansi> The same woman. Twenty-four years of a different life, kept hidden behind a cushion while the grey one continues above it.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP)</ansi>");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">You open the scrapbook again and look at the photographs of E. Trefoile, young and vivid and theatrical, in a life that ended in 1947. The grey house around you feels more oppressive, not less, for having seen them.</ansi>");
            }
            return true;
        }
    }

    // Quest step 3: Discover there are no mirrors
    if (cmd == "look") {
        var target2 = rest.toLowerCase();
        if (target2 == "mirror" || target2 == "mirrors") {
            if (user.HasQuest(140) && !user.GetMiscCharacterData("ddie_q_nomirrors")) {
                user.SetMiscCharacterData("ddie_q_nomirrors", "1");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">There is no mirror here either. Only that pale rectangle of wallpaper where one hung. You have been through every room on this floor and the pattern is consistent: no mirrors, anywhere. Someone has removed every mirror in the house. The hooks are still in the walls. The pale ghosts of frames remain on the wallpaper. But the mirrors themselves are gone.</ansi>");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">No mirror. Only the pale rectangle on the wallpaper where one used to hang.</ansi>");
            }
            return false;
        }
    }

    return false;
}


// The Great Green Room - Entry room for Goodnight Moon zone
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">You open the picture book and the scent of warm milk and wool blankets rises from the pages. The illustrations glow faintly -- green walls, a red balloon, a fire dying down to coals. The pages turn themselves. Something in the room beyond is very quiet and very warm. You step through the last page and the library folds away behind you like a dream you were already forgetting.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");

    if (!user.HasQuest(110)) {
        user.GiveQuest(110);
        // Quest step 1: Enter the great green room
        user.Command("quest advance 110");
    }

    // Quest step 4: Find the little mouse (mouse spawns in 1500 too)
    if (user.HasQuest(110) && !user.GetMiscCharacterData("gm_found_mouse")) {
        var mobs = room.GetMobs(233);
        if (mobs.length > 0) {
            user.SetMiscCharacterData("gm_found_mouse", "true");
            user.Command("quest advance 110");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: you have found the little mouse.)</ansi>");
        }
    }

    return false;
}

function onIdle(room) {
    var players = room.GetPlayers();
    for (var i = 0; i < players.length; i++) {
        var user = players[i];
        // Quest step 4: Find the little mouse in the main room
        if (user.HasQuest(110) && !user.GetMiscCharacterData("gm_found_mouse")) {
            var mobs = room.GetMobs(233);
            if (mobs.length > 0) {
                user.SetMiscCharacterData("gm_found_mouse", "true");
                user.Command("quest advance 110");
                SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: you have found the little mouse.)</ansi>");
            }
        }
        // Quest step 6: Return to the quiet old lady (must have done prior steps)
        if (user.HasQuest(110) && !user.GetMiscCharacterData("gm_returned_to_lady")) {
            if (user.GetMiscCharacterData("gm_visited_kittens") == "true" &&
                user.GetMiscCharacterData("gm_visited_cow") == "true" &&
                user.GetMiscCharacterData("gm_found_mouse") == "true" &&
                user.GetMiscCharacterData("gm_listened_window") == "true") {
                var oldLady = room.GetMobs(230);
                if (oldLady.length > 0) {
                    user.SetMiscCharacterData("gm_returned_to_lady", "true");
                    user.Command("quest advance 110");
                    SendUserMessage(user.UserId(), "");
                    SendUserMessage(user.UserId(), "<ansi fg=\"blue\">The quiet old lady looks up from her knitting. She looks at you for a long, still moment. Then she says, very softly: 'Goodnight.' Her needles resume. The quest is complete.</ansi>");
                    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest complete: Goodnight Moon)</ansi>");
                }
            }
        }
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">The great green room sighs around you. The red balloon dips once, gently, as if nodding goodbye. The quiet old lady does not look up from her knitting, but her lips form one more word -- hush -- and the room dissolves into the smell of old paper. You are back in the Grand Library, the small picture book warm in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " grows still and blurry, like a room seen through half-closed eyes, and slowly disappears back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "say" && rest.toLowerCase().indexOf("goodnight moon") >= 0) {
        if (user.GetMiscCharacterData("gm_said_goodnight_moon") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You say goodnight to the moon again. The moon, very large through the window, seems to glow a little warmer in acknowledgment.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("gm_said_goodnight_moon", "true");
        user.GrantXP(200, "saying goodnight to the moon");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">You say it softly: goodnight moon.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">And the moon -- you feel this more than see it -- responds. Its light through the window intensifies, just for a moment, to a pure and perfect white. The red balloon rises a little higher on its string. The fire sends up one long, yellow flame. The quiet old lady's needles pause. Even the little mouse at the baseboard sits up and holds still. The whole room holds its breath.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Then everything settles again. The fire lowers. The needles resume. The moon is simply the moon, rising through the window. But something has been acknowledged. Something has been completed. The room feels, if possible, even more perfectly itself than before.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+200 XP for saying goodnight to the moon.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " says 'goodnight moon' and for a moment the entire room holds its breath.", user.UserId());
        return true;
    }

    return false;
}

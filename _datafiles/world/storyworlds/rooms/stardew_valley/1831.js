
// The Community Center - quest step 5 + Junimo easter egg
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(190) && !user.GetMiscCharacterData("stardew_q_commcenter")) {
        user.SetMiscCharacterData("stardew_q_commcenter", "true");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The Community Center is abandoned but not empty. Something moves in the corners. Golden light drifts purposefully across the floor. The bundle boards on the walls list everything the valley could be again if someone cared enough to do the work. You read each one. You feel, strangely, like you could.</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The golden light in the Community Center fades as you leave. Something small watches you from behind a pillar as you go. You are back in the Library, carrying the memory of sparkles.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves the Community Center, and the golden light follows them to the door before stopping.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.indexOf("sparkle") >= 0) {
        if (user.GetMiscCharacterData("stardew_junimo_ee") == "found") {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">The golden light drifts and pulses. The Junimos are always here. You are always welcome.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("stardew_junimo_ee", "found");
        user.GrantXP(250, "discovering the Junimos in the Community Center");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You focus on the golden sparkles and they respond -- gathering, coalescing, brightening. And then you see them: a dozen Junimos, small as cabbages, round as apples, glowing in every color of the growing season. Green and gold and coral and teal. They emerge from behind pillars and under floorboards and out of shafts of light. They look at you. You look at them. One of them makes a sound like a tiny bell and hops once. Another touches the bundle board gently with a small hand. They are waiting. They have been waiting for someone to help them restore the valley, and that person, it seems, might be you.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+250 XP for making contact with the Junimos!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands very still as a dozen Junimos emerge from hiding and gather in the golden light.", user.UserId());
        return true;
    }

    if (cmd == "touch" && rest.indexOf("junimo") >= 0) {
        if (user.GetMiscCharacterData("stardew_junimo_ee") == "found") {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You reach out carefully. A Junimo lets you touch it. It is warm and faintly vibrating, like a very small, very happy engine.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("stardew_junimo_ee", "found");
        user.GrantXP(250, "touching a Junimo in the Community Center");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You reach toward the small glowing figure behind the pillar. It does not run. It leans toward your hand with the gravity of something that wants very much to be known. You touch it. It is warm -- warmer than you expected, warm the way a small animal is warm, from the inside out. It looks up at you with enormous dark eyes and makes a sound that is not quite a word but carries the meaning of welcome and invitation and please help us. The golden light in the room brightens sharply, then settles. Other Junimos emerge. They were always there.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+250 XP for making contact with the Junimos!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches out and touches a Junimo, which glows warmly in response as others emerge from hiding.", user.UserId());
        return true;
    }

    return false;
}

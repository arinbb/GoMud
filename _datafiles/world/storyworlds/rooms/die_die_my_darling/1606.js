
// Die! Die! My Darling! - The Chapel
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grey English lane unravels like film leader. Hedgerow and grey sky dissolve into flickering frames — a woman's face, a Bible, a locked barn door — and then the warm light of the Library reasserts itself around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into grey celluloid frames and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pray" || cmd == "kneel" || cmd == "worship") {
        // Quest step 4: Witness the prayer service
        if (user.HasQuest(140) && !user.GetMiscCharacterData("ddie_q_service")) {
            user.SetMiscCharacterData("ddie_q_service", "1");
        }

        if (user.GetMiscCharacterData("ddie_easter_pray") != "found") {
            user.SetMiscCharacterData("ddie_easter_pray", "found");
            user.GrantXP(100, "the chapel service");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">You kneel on the stone floor — there is no kneeling cushion — and Mrs. Trefoile's voice begins.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">She reads from Leviticus. She reads slowly, with emphasis, pausing to let certain phrases settle. 'And the LORD spake unto Moses.' Pause. 'Saying.' Pause. Your knees ache on the stone. She does not notice or does not care. She reads for what feels like a very long time. The candles burn without changing.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">When she finishes the chapter, she closes the Bible and looks at you. 'Stephen liked this passage,' she says. 'He read it to me every Sunday.' She says it with tenderness, not threat. The tenderness is somehow worse.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+100 XP)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">You kneel again in the cold chapel. The stone is just as hard. The candles burn just as steadily. Mrs. Trefoile is not here to read to you this time, and the silence she has left behind is almost an extension of her presence.</ansi>");
        }
        return true;
    }

    if (cmd == "read") {
        var target = rest.toLowerCase();
        if (target == "bible" || target == "prayer" || target == "passage") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">The ribbon marks Leviticus 20. The passage is about abomination. About the wages of sin. About the righteous removing the sinful from among them. Several verses have been underlined in red ink and annotated in a small, cramped hand: 'Stephen said this meant Patricia.' The annotation is recent. The ink has not faded.</ansi>");
            return true;
        }
    }

    return false;
}

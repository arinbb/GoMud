
// Die! Die! My Darling! - The Barn
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grey English lane unravels like film leader. Hedgerow and grey sky dissolve into flickering frames — a woman's face, a Bible, a locked barn door — and then the warm light of the Library reasserts itself around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into grey celluloid frames and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Quest step 5: Find your car locked in the barn
    if (user.HasQuest(140) && !user.GetMiscCharacterData("ddie_q_barn")) {
        user.SetMiscCharacterData("ddie_q_barn", "1");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Your car. There it is. Blocked, chained in, going nowhere. Someone planned this before you arrived.</ansi>");
    }

    if (cmd == "try" || cmd == "enter" || cmd == "get" || cmd == "take") {
        var target = rest.toLowerCase();
        if (target.indexOf("car") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You try the driver's door. It opens. You sit in the seat. The familiar smell of your own car surrounds you — a faint trace of your own perfume. The keys are not here. The chocks press hard against the tyres front and rear. The barn doors are chained. You are not leaving.</ansi>");
            return true;
        }
    }

    if (cmd == "look") {
        var target2 = rest.toLowerCase();
        if (target2.indexOf("window") >= 0 || target2.indexOf("barn") >= 0 || target2.indexOf("car") >= 0) {
            if (user.GetMiscCharacterData("ddie_easter_barn") != "found") {
                user.SetMiscCharacterData("ddie_easter_barn", "found");
                user.GrantXP(150, "discovering the car imprisoned");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">Standing next to your own car in this dim barn, you understand something for the first time with full clarity: you are not a guest. You are not free to leave. The wooden chocks were cut and fitted before you arrived. The chain was measured. The padlock was bought for this specific door. This imprisonment was prepared in advance, for you, with care and thought and intent. The visit you were so considerate to make has become something else entirely.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+150 XP)</ansi>");
            }
            return false;
        }
    }

    return false;
}

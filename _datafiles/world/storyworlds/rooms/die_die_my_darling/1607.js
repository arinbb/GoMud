
// Die! Die! My Darling! - The Village Pub
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The grey English lane unravels like film leader. Hedgerow and grey sky dissolve into flickering frames — a woman's face, a Bible, a locked barn door — and then the warm light of the Library reasserts itself around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into grey celluloid frames and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var target = rest.toLowerCase();
        if (target == "brooch" || target == "pin" || target == "jewellery" || target == "jewelry") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">The brooch is a small silver piece — a spray of flowers, delicately worked. It looks expensive. It looks personal. It looks like something a young woman might have worn every day for years. The waitress touches it at her collar as you look, an unconscious gesture. 'It was given to me,' she says, noticing your attention. 'By the gentleman over there, actually. Found it. Said someone must have left it in the road.'</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">Alan Glentower is watching your reaction with the careful attention of a man who has been looking for something for a long time.</ansi>");
            return true;
        }
    }

    if (cmd == "drink" || cmd == "order" || cmd == "buy") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">The barman sets a pint in front of you with practiced efficiency. It is cold and amber and has colour. After the Trefoile house, it is the most vivid thing you have encountered today. You drink it with grateful attention.</ansi>");
        return true;
    }

    return false;
}

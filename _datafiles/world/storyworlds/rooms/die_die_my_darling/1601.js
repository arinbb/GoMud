
// Die! Die! My Darling! - The Garden
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
        if (target == "cans" || target == "tin" || target == "tin cans" || target == "targets") {
            if (user.GetMiscCharacterData("ddie_easter_cans") != "found") {
                user.SetMiscCharacterData("ddie_easter_cans", "found");
                user.GrantXP(100, "tin can targets");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">You look more closely at the tin cans on the fence posts. Behind each one, pinned to the wood, is a photograph — magazine cutouts, mostly, but one is an actual printed photograph. The face in every image is the same: a woman, young and beautiful, with paint on her lips and a smile that belongs to another life entirely. Patricia. These photographs are here for Joseph to shoot at. Someone has been conducting this exercise for a long time.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+100 XP)</ansi>");
            }
            return false;
        }
    }

    return false;
}

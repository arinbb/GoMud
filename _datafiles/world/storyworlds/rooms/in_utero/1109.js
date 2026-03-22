
// Pennyroyal Tea - Track 9
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The kettle whistle fades. The wallpaper curls one last time and lies still. The medicine bottles empty themselves into silence. The murky cup on the table finally clears -- and there is nothing inside, there was never anything inside. The kitchen dissolves and you are in the Grand Library, where the light is clean and the tea is normal.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades like steam from a kettle, thinning to nothing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" || cmd == "taste") {
        if (rest.indexOf("tea") >= 0 || rest.indexOf("cup") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You lift the cup. The liquid is warm and bitter — herbal, astringent, not quite tea. Pennyroyal. It tastes like regret and bad decisions and the desperate hope that something natural could fix what's broken inside. You set the cup down. Some remedies are worse than the illness.</ansi>");
            if (user.GetMiscCharacterData("easter_utero_tea") != "found") {
                user.SetMiscCharacterData("easter_utero_tea", "found");
                user.GrantXP(150, "tasting the pennyroyal tea");
            }
            return true;
        }
    }
    if (cmd == "read") {
        if (rest.indexOf("bottle") >= 0 || rest.indexOf("label") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The prescription labels are layered over each other — different names, different dates, all the same address. The oldest one is for a stomach condition. The singer dealt with chronic pain his entire adult life. No one could diagnose it. No one could fix it.</ansi>");
            return true;
        }
    }

    return false;
}

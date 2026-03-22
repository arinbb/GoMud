
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cold kitchen softens and fades, the iron furnace dissolving into memory. The warmth of the Grand Library replaces the chill.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the cold kitchen like breath on a winter window.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "light" || cmd == "start") {
        if (rest.indexOf("furnace") >= 0 || rest.indexOf("fire") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You kneel before the furnace and arrange the kindling. Your hands are stiff with cold, your knuckles cracked. You strike a match — it flares in the darkness — and touch it to the kindling. The wood catches. The fire grows. Slowly, painfully slowly, warmth begins to radiate from the iron.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">No one will thank you for this. No one will know what it cost. But the house will be warm when they wake.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " kneels before the furnace with cracked hands and coaxes a fire to life.", user.UserId());
            if (user.GetMiscCharacterData("winter_furnace_lit") != "yes") {
                user.SetMiscCharacterData("winter_furnace_lit", "yes");
                user.GrantXP(150, "lighting the furnace");
            }
            return true;
        }
    }
    return false;
}

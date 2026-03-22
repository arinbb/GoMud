
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The small bedroom dissolves around you — the narrow bed, the polished shoes, the frosted window all softening into memory. You stand once more in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pulls the blankets of memory aside and fades from the room.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "polish" || cmd == "look") {
        if (rest.indexOf("shoe") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The shoes are polished to perfection — you can see your face in them. Someone knelt in the cold darkness and worked polish into the leather with cracked hands, buffing each shoe until it shone. The boy will put them on without thinking. He will not know, for years, what this small act meant.</ansi>");
            if (user.GetMiscCharacterData("winter_shoes_seen") != "yes") {
                user.SetMiscCharacterData("winter_shoes_seen", "yes");
                user.GrantXP(100, "understanding the polished shoes");
            }
            return true;
        }
    }
    return false;
}

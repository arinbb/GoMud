
// The Shining - Room 237 (shower curtain easter egg)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The shower curtain billows outward as reality tears apart. Room 237 dissolves like a photograph burning from the center, curling at the edges into film stock that spools away into the warm, safe light of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves like a burning photograph and vanishes from Room 237.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "pull" || cmd == "open" || cmd == "move") && rest.indexOf("curtain") >= 0) {
        var easterKey = "shining_room237";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(300, "opening the curtain in Room 237");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You reach for the shower curtain. Your hand trembles. You pull it aside.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"1\">A woman sits in the tub, motionless, her back to you. Her skin is pale and perfect. She begins to stand, turning slowly. She is beautiful. She smiles. She reaches for you —</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"1\">— and her skin splits and sags, her beauty collapsing like a mask torn away. What stands before you is ancient, bloated, mottled with decay, grinning with a mouth full of blackened gums. Her laughter echoes off the red tiles as you stumble backward.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The curtain falls closed. When you look again, the tub is empty. Water circles the drain. The room smells of perfume and nothing else. Nothing else at all.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+300 XP — You opened the curtain in Room 237.)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pulls back the shower curtain and recoils in horror. A terrible laugh echoes through the room.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You reach for the curtain but stop yourself. You already know what is behind it. The curtain sways gently, as if disappointed.</ansi>");
        }
        return true;
    }

    return false;
}


// The Pawnbrokers Flat - Easter egg: look axe / take axe
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The smell of camphor and old money dissolves. The pawnbroker's flat fades to text. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades in the stillness of the pawnbroker's flat, gone back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest == "axe" || rest == "hook")) {
        var xpKey = "cnp_flat_axe";
        if (user.GetMiscCharacterData(xpKey) != "found") {
            user.SetMiscCharacterData(xpKey, "found");
            user.GrantXP(300, "the crime scene");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The axe on the hook beneath the coat.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">This is the room. The bell-pull is outside. The two locks on the door. The icons in the corner. The glass cabinet with its pledged items. The camphor smell. He has stood in this room before, hat in hand, offering something of value for a fraction of its worth. He knows the sound of her slippers on the floor before she opens the door. He knows everything about this room. He has been thinking about this room for months.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The axe is exactly where he placed it in his mind, a hundred times, before it was here in his hands.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+300 XP: standing in the room where it happened)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The axe on the hook. You already know everything about this axe. You cannot unlearn it.</ansi>");
        }
        return true;
    }

    if (cmd == "take" && rest == "axe") {
        var xpKey = "cnp_flat_axe";
        if (user.GetMiscCharacterData(xpKey) != "found") {
            user.SetMiscCharacterData(xpKey, "found");
            user.GrantXP(300, "the crime scene");
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">Your hand stops. This is not your act. This is his. The axe stays on the hook. The guilt is his. You are only a witness. You back away from the hook.</ansi>");
        return true;
    }

    return false;
}

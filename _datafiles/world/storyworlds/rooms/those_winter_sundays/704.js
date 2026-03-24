
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The living room fades -- the ticking radiator, the worn armchair, the careful Sunday silence all dissolving into the warmth of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits in the silence a moment longer, then fades from the room.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "sit" || cmd == "wait" || cmd == "listen") {
        var easterKey = "winter_sundays_listen";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "listening to loves austere and lonely offices");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit in the living room and listen. The radiator ticks. The house creaks in the cold. Somewhere in the kitchen, a man is making a fire he does not have to make, warming a house for people who will not thank him. You hear it now -- love expressed not in words but in labor. In the creak of floorboards before dawn. In the banked coals. In the polished shoes left by a door. What did you know, what did you know of loves austere and lonely offices?</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — Loves austere and lonely offices.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit again. The house speaks the same language. You understand it a little better each time.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits very still and listens to the house.", user.UserId());
        return true;
    }
    return false;
}

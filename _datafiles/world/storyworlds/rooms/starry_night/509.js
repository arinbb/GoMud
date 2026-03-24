
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The clashing colors of the cafe intensify until they overwhelm your senses -- red, green, yellow all bleeding together into a white light. When it fades, you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is consumed by the cafe's garish light and vanishes.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "drink" || cmd == "order") {
        var easterKey = "starry_absinthe";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "drinking at the Night Cafe");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You order a glass of absinthe. The green liquid catches the gaslight and seems to glow from within. As you drink, the colors around you intensify -- the red walls pulse, the green ceiling deepens, the billiard table glows. You understand now why he called this a place where one can ruin oneself, go mad, or commit a crime.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — The Night Cafe.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You drink again. The colors are just as vivid the second time.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " orders a drink and stares into the swirling green depths.", user.UserId());
        return true;
    }
    return false;
}

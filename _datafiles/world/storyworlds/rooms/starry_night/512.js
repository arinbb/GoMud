
var LIBRARY_ROOM = 1;
function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You walk toward the edge of the meadow where the paint thins and the world becomes abstract color. You step through the boundary of the painting and find yourself back in the Grand Library, the scent of oil paint lingering on your clothes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks to the edge of the meadow and steps through the boundary of the painting, vanishing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "look" && (rest.indexOf("star") >= 0 || rest.indexOf("sky") >= 0)) {
        var easterKey = "starry_sky_gaze";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(250, "truly seeing the starry night");
            SendUserMessage(user.UserId(), "<ansi fg=\"12\">You look up. Really look. The sky is not a sky -- it is a living thing. Each star is a thick spiral of impastoed paint, glowing from within, spinning slowly like pinwheels of light. The moon is a crescent of pure cadmium yellow surrounded by concentric rings of cobalt and white. The Milky Way rolls across the heavens like a luminous river. You have never seen the sky before. Not really. Not until now.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+250 XP — The starry night, seen truly.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"12\">You look up again. It is just as overwhelming as the first time. Maybe more.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " looks up at the sky and stands very still for a long time.", user.UserId());
        return true;
    }
    return false;
}

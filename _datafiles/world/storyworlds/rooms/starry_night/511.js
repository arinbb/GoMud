
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The oil lamp flares once, brilliantly, and the studio fills with golden light. The canvases on the walls seem to open like windows, each one a doorway to another painted world. Then the light fades, the studio dissolves, and you are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is bathed in golden lamplight and fades from the studio like a drying brushstroke.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    if (cmd == "read" && rest.indexOf("letter") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up one of the letters and read:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"Dear Theo,</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">I often think that the night is more alive and more richly colored than the day. Looking at the stars always makes me dream. Why, I ask myself, shouldn't the shining dots of the sky be as accessible as the black dots on the map of France?\"</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">The letter is signed simply: Vincent.</ansi>");
        return true;
    }
    return false;
}

function onEnter(user, room) {
    if (user.GetMiscCharacterData("starry_studio_found") != "yes") {
        user.SetMiscCharacterData("starry_studio_found", "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You've discovered Vincent's hidden studio! The room hums with creative energy. Paintings lean against every wall, each one a window into another vision.</ansi>");
        user.GrantXP(200, "discovering the hidden studio");
    }
    return false;
}

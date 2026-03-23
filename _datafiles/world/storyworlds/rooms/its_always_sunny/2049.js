// Denniss Room - easter egg: look tools
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Dennis's room dissolves — the locked box, the mirror, the organized closet with the labels you did not read closely. You are grateful that it is gone. You are back in the Grand Library, and the quiet of Dennis's room follows you for just a moment before the library sounds reassert themselves.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves Dennis's room as the scene dissolves, the locked box going dark last.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("tool") >= 0) {
        var key = "easter_sunny_tools";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look closely at the items on Dennis's shelf. Then you stop looking. There are things on this shelf that a person with normal desires does not own, and Dennis's relationship with the concept of implication extends, you now understand, into the physical world in ways you had not anticipated. You put everything back exactly as you found it. You will not be telling anyone about this. Dennis watches you from somewhere, you feel it, and you understand now what the implication actually means.</ansi>");
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(250, "Looked at Dennis's tools and understood the implication");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">+250 XP: You Understand the Implication Now</ansi>");
        }
        return true;
    }

    return false;
}


// The Bridge - Easter egg: look river / look sunset
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The golden light on the Neva dims and fades. The cathedral dome dissolves into text. The cold wind off the river becomes the draft of turning pages. You are back in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades like the last of the river light, gone back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest == "river" || rest == "neva" || rest == "sunset" || rest == "sun" || rest == "light")) {
        var xpKey = "cnp_bridge_river";
        if (user.GetMiscCharacterData(xpKey) != "found") {
            user.SetMiscCharacterData(xpKey, "found");
            user.GrantXP(150, "a moment of beauty on the bridge");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Neva at sunset.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">Gold on the water. The dome of St. Isaac's catching the last light. The city is briefly beautiful, briefly itself, briefly something more than lime and poverty and theory and guilt. He stops here sometimes. The theory stops. The guilt stops. For one minute, standing on the bridge with the wind off the river, he is just a young man looking at a beautiful city in the evening light.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Then the minute ends. The weight returns. The city goes back to being what it is. He goes back to being what he has made himself. But the minute was real. It happened. He was, briefly, free.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP: a moment of grace)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The gold on the Neva. The dome catching the light. The brief minute before the weight returns. You remember it.</ansi>");
        }
        return true;
    }

    return false;
}

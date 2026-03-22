
// The Shining - The Kitchen
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The warm kitchen light brightens until the stainless steel becomes a white screen, and through it, projected frames of the Grand Library flicker into focus. The smell of coffee fades, replaced by old paper and polished wood.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is enveloped in warm light and fades from the Overlook like a memory.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" && rest.indexOf("coffee") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pour a cup from the pot. The coffee is perfect — dark, rich, and impossibly fresh. For a moment, drinking it, you feel safe. The Overlook recedes. The horror fades. Then the cup is empty, and it all comes back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pours a cup of coffee and drinks deeply, a moment of peace crossing their face.", user.UserId());
        return true;
    }

    return false;
}

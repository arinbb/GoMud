
// The Shining - The Gold Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Gold Room fills with ghostly revelers who turn to watch you leave. Their applause follows you as the room dissolves into flickering film grain, and the Grand Library solidifies around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is surrounded by ghostly applause and fades from the Gold Room like an overexposed photograph.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" || (cmd == "order" && rest.indexOf("drink") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A glass appears on the bar in front of you, filled with amber liquid over ice. You didn't see anyone pour it. The bourbon smells rich and warm. But when you reach for it, your hand passes through the glass like mist. The hotel offers, but does not deliver. Not to you. Not yet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches for a ghostly drink that shimmers and fades at their touch.", user.UserId());
        return true;
    }

    return false;
}

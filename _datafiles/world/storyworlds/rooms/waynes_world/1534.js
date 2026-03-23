
// Wayne's World - Donut Shop Parking Lot
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The parking lot pavement dissolves. Another jet flies over, drowning out the transition. When the noise fades, you're in the library. Party on.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes between one jet passing and the next.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("jet") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A commercial jet approaches on its flight path, perfectly aligned to pass directly overhead. You know exactly when it will be loudest. You stand in the right spot. The noise fills everything. Then it's gone. In the silence after, Aurora feels quiet and enormous and yours.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " watches a jet pass overhead with genuine appreciation.", user.UserId());
        return true;
    }

    if (cmd == "watch" && rest.toLowerCase().indexOf("jet") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You tilt your head back. The jet comes in from the northwest right on schedule, huge and loud and briefly blocking the sun. Wayne and Garth stood here and watched the same jets. You feel this connection.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " watches jets overhead in the parking lot with the contemplative focus of a true appreciator.", user.UserId());
        return true;
    }

    return false;
}

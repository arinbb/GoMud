// Back to the Future -- The Parking Lot at Night
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Lightning strikes the pavement ten feet from where you stand. The static charge lifts your hair and whirls the rain sideways. In the blue-white afterglow, the scene dissolves -- DeLorean, rain, wet asphalt -- and you are standing in the Grand Library, hair still standing on end, coat wet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is engulfed in a lightning flash and simply ceases to be in 1955.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

// The Sandlot -- The Drugstore (2423)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cool air and vanilla smell of the drugstore dissolve. You are back in the Screening Room, the projector clicking to a stop.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " finishes their cherry Coke and vanishes from the drugstore counter.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" || (cmd == "order" && rest.toLowerCase().indexOf("coke") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The girl at the soda fountain slides a cherry Coke across the counter without being asked. It is cold and sweet and red and exactly what summer tastes like. You drain it in three long pulls. She raises an eyebrow and makes another one.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " puts a nickel on the soda fountain counter.", user.UserId());
        return true;
    }

    return false;
}

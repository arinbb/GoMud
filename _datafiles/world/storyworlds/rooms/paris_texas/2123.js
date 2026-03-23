
// Paris, Texas - Walt's House, LA
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The warm light of the suburban house fades slowly, the coffee smell and the photographs and the careful quiet all dissolving together into the particular smell of the Screening Room. You leave them to it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " becomes briefly part of the household scene, then slowly transparent, then gone, leaving only a slight disturbance in the afternoon light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

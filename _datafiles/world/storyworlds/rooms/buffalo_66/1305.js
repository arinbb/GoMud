
// Buffalo '66 - The Brown House
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The wood-paneled walls peel away like film stock, revealing flickering frames beneath. The Brown house dissolves and the Grand Library takes its place.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " peels away like wallpaper and vanishes from the Brown house.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(90) && !user.GetMiscCharacterData("buffalo66_house")) {
        user.SetMiscCharacterData("buffalo66_house", "visited");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You step into the Brown house and the air changes. It is warmer here but not warm. The television drones. Bills memorabilia watches you from every wall. No one looks up. No one says welcome home.</ansi>");
    }
    return false;
}

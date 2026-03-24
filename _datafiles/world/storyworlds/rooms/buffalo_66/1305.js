
// Buffalo '66 - The Brown House
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The wood-paneled walls peel away like film stock, revealing flickering frames beneath. The Brown house dissolves and the Grand Library takes its place.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " peels away like wallpaper and vanishes from the Brown house.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "watch" && (rest.indexOf("tv") >= 0 || rest.indexOf("television") >= 0 || rest.indexOf("bills") >= 0 || rest.indexOf("game") >= 0 || rest.indexOf("memorabilia") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"6\">You stand in the living room and take in the Bills shrine. Pennants. Plates. A signed Jim Kelly jersey in a frame. A foam finger. The TV drones in the background -- a game, or a replay of a game, or a recap of a replay. In this house, it is always the Bills. Not the season. Not any particular season. All of them, layered on top of each other, a single continuous Buffalo Bills experience that fills every wall, every shelf, every conversation.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You understand something: Jan Brown did not watch the Bills to forget her life. The Bills were her life. Billy was the thing she watched to forget.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands in the Bills shrine and really looks at it for the first time.", user.UserId());

        if (user.GetMiscCharacterData("buffalo66_watch_house") != "found") {
            user.SetMiscCharacterData("buffalo66_watch_house", "found");
            user.GrantXP(200, "understanding Jan Brown's obsession");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The weight of it lands. [+200 XP]</ansi>");
        }
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

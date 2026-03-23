
// Buffalo '66 - Scott Wood's House
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The trophies on the shelf catch light one last time, then the room dissolves into flickering film. The Grand Library takes shape around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flickers and fades like an old broadcast signal.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(90) && !user.GetMiscCharacterData("buffalo66_wood")) {
        user.SetMiscCharacterData("buffalo66_wood", "visited");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You step into Scott Wood's house and the air is stale with failure. The trophies gleam on the shelf, golden monuments to a life that peaked decades ago. The man in the recliner does not get up. He barely registers your presence. This is what happens after the last kick goes wide.</ansi>");
    }
    return false;
}

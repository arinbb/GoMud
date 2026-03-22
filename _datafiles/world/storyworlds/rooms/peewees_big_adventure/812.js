
// The Drive-In Theater
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The movie credits roll on the drive-in screen. The lights come up. The cars start their engines and pull away one by one. The screen goes dark, and so does everything else -- until the warm light of the Grand Library fades in around you. The adventure is over, but what an adventure it was.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " watches the credits roll, then pedals off into the night on an invisible bicycle.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

// Far Cry 5 - The County Road
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Montana sky dims at the edges, the mountains blurring to watercolor. The road dissolves under your feet and the smell of pine and cult menace fades together. The Grand Library's warm light fills the space around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the Montana sky, vanishing from the county road.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("roadblock") >= 0 || rest.indexOf("barrier") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The Eden's Gate roadblock: orange plastic barriers, a white pickup, a cultist with an AR-pattern rifle watching the road. They are not threatening you right now. They are positioned so that 'right now' can change quickly. The rifle is real. The seriousness is real. The belief behind it is possibly the most real thing about them.</ansi>");
        return true;
    }

    return false;
}

// Six Feet Under - The Garage
// Room 2229
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The hearse, the flowers, the pegboard -- the garage dissolves and the Grand Library assembles around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back out of the garage.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.indexOf("hearse") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You walk around the hearse, looking at your reflection in the polished black. It is a remarkable vehicle -- functional in the most specific way, designed for a single purpose, maintained to perform that purpose with dignity. You can see yourself in the hood. David would say: if you are going to do this work, you do it right. The hearse is what doing it right looks like.</ansi>");
        return true;
    }

    if (cmd == "drive" || (cmd == "look" && rest.indexOf("inside") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You open the driver's door and look in. The interior is clean and dark. The steering wheel is smooth. The key is not in the ignition -- David keeps it on a hook in the office. The hearse is not a car you take for a joyride. It knows where it is going and it always goes.</ansi>");
        return true;
    }

    return false;
}
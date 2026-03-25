// Up in Smoke - The Rock Concert Parking Lot
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The parking lot haze thickens briefly and goes sweet and golden, and then the Grand Library's familiar shelves close around you. The sounds of the crowd fade to silence. The smell of the 1970s remains, briefly, on your clothes.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drifts away through the parking lot crowd and is gone. Strawberry waves goodbye.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {

    if (user.HasQuest(320) && !user.GetTempData("uis_concert")) {
        user.SetTempData("uis_concert", "visited");
        user.Command("questadvance 320");
    }

    return true;
}


// The Shining - Hotel Entrance (entry room)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The snow swirls around you, thickening into a white curtain. Within the blinding white, frames of film flicker past — a frozen man, a flooded elevator, twin girls in a corridor. The images dissolve into static, then into the warm glow of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by a blizzard of static and flickering film frames, vanishing from the Overlook.", user.UserId());
        user.SetTempData("visited_the_shining", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_the_shining";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The film reel spins to life. Light flickers, and the world goes cold. You feel snow on your face before you see anything — then the white clears, and you are standing before an enormous hotel, alone on a mountainside. The air is thin and sharp. The silence is total. The Overlook Hotel has been waiting for you.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return false;
}

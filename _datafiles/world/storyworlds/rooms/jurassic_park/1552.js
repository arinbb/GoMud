
// Jurassic Park - The Tour Road
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The tour road shimmers and the Explorer headlights blur into projector light. The jungle folds inward like film rewinding. The electric rail hums its last note and you are standing in the Screening Room with the projector still warm.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers like heat haze and is gone from the tour road.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "enter" && (rest.indexOf("explorer") >= 0 || rest.indexOf("jeep") >= 0 || rest.indexOf("car") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You climb into the Ford Explorer. The automated tour system activates immediately, the headrest screen flickering to life with Mr. DNA bouncing across it. \"Welcome to Jurassic Park!\" the recording says, cheerful and professionally excited. The vehicle does not move. The track system appears to be offline. Mr. DNA keeps talking anyway, explaining DNA extraction from amber. He sounds very pleased about it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs into one of the tour Explorers. The headrest screen glows green.", user.UserId());
        return true;
    }

    return false;
}

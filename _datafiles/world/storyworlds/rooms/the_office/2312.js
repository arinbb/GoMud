// The Office - Michael's Car
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You get out of the PT Cruiser and walk back across the parking lot into the lobby and through the screen. Caleb the GPS watches you go with dark screen, waiting for the next destination.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " gets out of Michael's car, locks it out of respect, and heads west across the parking lot.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drive" || cmd == "start") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You start the PT Cruiser. Caleb wakes up. 'In 400 feet, turn right,' Caleb says. You are in a parking spot. There is no right in 400 feet. There is only a wall. You trust Caleb. This is the experience of riding with Michael.</ansi>");
        return true;
    }

    if (cmd == "play" && rest.indexOf("cd") >= 0 || (cmd == "play" && rest.indexOf("improv") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You put on one of the improv CDs. Rule one: Yes, And. You say yes to everything in Michael's car. The car accepts this. The parking lot accepts this. The miniature Dundie swings in agreement.</ansi>");
        return true;
    }

    return false;
}

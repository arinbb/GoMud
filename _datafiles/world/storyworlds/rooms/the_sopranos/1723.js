
// The Sopranos - The Living Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The family photos blur. The big television's glow expands to fill everything, then collapses into a single point of light. The Grand Library appears around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears between one channel and the next.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.indexOf("photo") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You study the family photos on the mantle. Tony and Carmela on their wedding day, younger, softer, full of something that looks like certainty. Meadow at a piano recital, maybe eight years old, concentrating hard on something out of frame. AJ in a baseball uniform, squinting into the sun. Happy moments, all of them, carefully framed and hung. The photos are the version of the family that the family shows to itself. The other version lives in the rooms you cannot photograph.</ansi>");
        return true;
    }

    if (cmd == "watch" && (rest.indexOf("tv") >= 0 || rest.indexOf("television") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The television is showing a Western. A man in a black hat is being threatened by a man in a white hat. The man in the black hat does not look particularly worried. Neither do you.</ansi>");
        return true;
    }

    return false;
}

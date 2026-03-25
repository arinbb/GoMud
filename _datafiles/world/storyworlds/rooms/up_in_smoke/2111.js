// Up in Smoke - The Drive-In
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The enormous screen fills with white light, brighter and brighter, and then resolves into the reading lamps of the Grand Library. The car speakers go silent. The popcorn smell lingers briefly. You are back among the shelves.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drives out of the drive-in during the second feature, taillights fading.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    return true;
}

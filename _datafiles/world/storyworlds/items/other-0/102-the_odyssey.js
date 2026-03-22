
// Portal Book: The Odyssey
// Destination: Odyssey zone, room 200 (The Beach at Troy)
var DEST_ROOM = 200;
var WORLD_NAME = "The Odyssey";
var ENTER_MSG_SELF = "You unroll the ancient scroll and the Greek letters begin to rearrange themselves, forming shapes -- waves, ships, islands. The scent of salt air fills your nostrils. The room tilts like a deck beneath your feet and you stumble forward into...";
var ENTER_MSG_ROOM = " unrolls an ancient scroll. Greek letters swirl upward like a flock of birds, engulfing them in a cyclone of golden text. When it clears, they are gone.";

function onCommand_open(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_read(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_enter(user, item, room) {
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"yellow\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}

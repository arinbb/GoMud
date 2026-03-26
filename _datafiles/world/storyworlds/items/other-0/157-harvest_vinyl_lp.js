
// Portal Item: Harvest Vinyl LP
// Destination: Harvest zone, room 2240
var DEST_ROOM = 2240;
var WORLD_NAME = "Harvest";
var ENTER_MSG_SELF = "You slide the record from its gatefold sleeve and place it on the turntable. The needle finds the groove and there is a moment of pure vinyl crackle — warm, round, alive — before the first notes of the harmonica drift into the air. The sound grows around you, golden and unhurried, and the room softens and stretches until it is not a room at all but a California afternoon, wheat fields rolling to the horizon, the smell of dry grass and warm earth, a guitar playing somewhere on a porch...";
var ENTER_MSG_ROOM = " drops the needle on a vinyl LP. The crackle of the groove fills the air, then a harmonica, then golden light — and they are gone, pulled into a California afternoon in 1972.";

function onCommand_play(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_listen(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_drop(user, item, room) {
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"yellow\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}

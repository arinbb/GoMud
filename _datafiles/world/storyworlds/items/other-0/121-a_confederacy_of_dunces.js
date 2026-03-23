
// Portal Item: A Confederacy of Dunces
// Destination: A Confederacy of Dunces zone, room 1200
var DEST_ROOM = 1200;
var WORLD_NAME = "A Confederacy of Dunces";
var ENTER_MSG_SELF = "You open the yellowed paperback and the humid air of 1960s New Orleans hits you — chicory coffee, Lucky Dogs, jasmine, stale beer, and the faint sweetness of muscatel. The words on the page blur and rearrange themselves. Canal Street materializes around you, shimmering in the heat. Somewhere nearby, a man in a green hunting cap is shouting about his pyloric valve.";
var ENTER_MSG_ROOM = " opens a yellowed paperback. A wave of humid New Orleans air spills from its pages — chicory coffee, hot dogs, jasmine — and warm yellow light wraps around them. When it fades, they are gone.";

function onCommand_read(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_open(user, item, room) {
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
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"3\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}

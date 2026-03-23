
// Portal Item: The Little Prince
// Destination: The Little Prince zone, room 1900
var DEST_ROOM = 1900;

var ENTER_MSG_SELF = "You open the slender book and the pages fill with light -- watercolour light, desert light, the particular gold of a boy standing on a tiny planet watching his forty-fourth sunset. The library dissolves. You fall through a sky full of stars, each one warm as a voice, and land softly in sand so vast and so quiet that the silence has its own weight. A small voice says: if you please -- draw me a sheep.";
var ENTER_MSG_ROOM = " opens a slender book. Pale light the colour of desert starshine spills from its pages, and the faint sound of something like five hundred million bells. The light wraps around them gently and when it fades, they are gone.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"cyan\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}

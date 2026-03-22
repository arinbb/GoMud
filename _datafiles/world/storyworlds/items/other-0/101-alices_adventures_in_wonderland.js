
// Portal Book: Alice's Adventures in Wonderland
// Destination: Wonderland zone, room 100 (The Rabbit Hole)
var DEST_ROOM = 100;
var WORLD_NAME = "Wonderland";
var ENTER_MSG_SELF = "You open the book and the pages begin to glow with a soft blue light. The words lift from the page and swirl around you like a whirlwind of letters. You feel yourself shrinking, falling, tumbling through a tunnel of text and illustration until...";
var ENTER_MSG_ROOM = " opens a weathered blue book. Light erupts from its pages and swirls around them. In a flash of blue and gold, they vanish.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"cyan\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}

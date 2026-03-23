
// Portal Item: Super Mario Bros game cartridge
// Destination: Super Mario Bros zone, room 1860
var DEST_ROOM = 1860;
var ENTER_MSG_SELF = "You insert the cartridge. The screen fills with blue sky and green ground. A small man in a red hat appears, and the most famous four notes in gaming history play: dun dun dun DUN. The pixels expand. The pixels are everywhere. You are standing on brown brick in the most famous place in gaming history. World 1-1. Start.";
var ENTER_MSG_ROOM = " inserts a game cartridge. The screen flashes to life with bright primary colors, and the unmistakable Mario theme fills the room -- and then they are gone, pixelated into the blue sky and green ground of the Mushroom Kingdom.";

function onCommand_play(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_insert(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_load(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_enter(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_blow(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">You blow into the bottom of the cartridge. A faint hum rises from it, the dust clearing from contacts that have been waiting for this. The cartridge is ready. Try 'play' or 'insert' to enter the Mushroom Kingdom.</ansi>");
    return true;
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"10\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}


// Portal Item: Stardew Valley game disc
// Destination: Stardew Valley zone, room 1820
var DEST_ROOM = 1820;
var ENTER_MSG_SELF = "You insert the disc into the console. A pixel-art farm appears on screen, then the pixels expand and surround you. The smell of fresh earth and morning dew fills the air. A rooster crows somewhere distant. You are standing at the edge of an overgrown field, a letter on the porch railing, a whole year waiting to begin.";
var ENTER_MSG_ROOM = " inserts a game disc into the console. The screen fills with green fields and a farmhouse, and the sound of birdsong and a gentle guitar melody spills into the room. Then the screen goes dark -- and they are gone.";

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

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"10\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}

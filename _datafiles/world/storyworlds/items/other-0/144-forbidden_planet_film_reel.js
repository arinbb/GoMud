
// Portal Item: Forbidden Planet Film Reel
// Destination: Forbidden Planet zone, room 1980
var DEST_ROOM = 1980;
var WORLD_NAME = "Forbidden Planet";
var ENTER_MSG_SELF = "You thread the film reel into the projector. The machine shudders, and the screen blooms with color: a flying saucer, a chrome disk catching the light of an alien sun, settling with hydraulic grace onto rust-red desert. The camera pulls back to reveal a sky the color of bottle glass. An impossible green. You lean forward to look -- and the screen swallows you. The projector hums behind you, then fades. Dry heat hits your face. The air smells of ozone and something electric and ancient. You are standing on Altair IV.";
var ENTER_MSG_ROOM = " loads a film reel into the projector. The screen fills with an alien green sky and the gleam of a landed flying saucer. The projector light intensifies until it swallows them whole. When it dims, they are gone.";

function onCommand_load(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_play(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_watch(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_enter(user, item, room) {
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"15\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"12\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}

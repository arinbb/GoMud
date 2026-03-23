// Portal Item: The Sandlot Film Reel
// Destination: The Sandlot zone, room 2420
var DEST_ROOM = 2420;
var WORLD_NAME = "The Sandlot";
var ENTER_MSG_SELF = "You thread the film reel into the projector. The machine hums. The screen fills with a summer morning in 1962 -- an elm-lined street, a modest house with cardboard boxes in the windows, a kid standing on the front porch who doesn't know anyone yet. The smell of cut grass floods the room. The image gets warmer, more golden, and then you're not in the Screening Room anymore. You're on a sidewalk in the neighborhood, the summer heat on your face, the distant crack of a bat coming from somewhere south.";
var ENTER_MSG_ROOM = " loads a film reel into the projector. The screen fills with golden summer light and the smell of cut grass and red dirt. They step forward into the image and they're gone.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"yellow\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}

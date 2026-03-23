// Portal Item: Up in Smoke Film Reel
var DEST_ROOM = 2100;
var WORLD_NAME = "Up in Smoke";
var ENTER_MSG_SELF = "You thread the reel into the projector. The machine hums. The screen fills with California sunshine so white and absolute it seems to have weight. Then the image sharpens: a cherry-red lowrider sitting at a red light in East LA, hydraulics chirping, an oldies station pouring out the open window, a pair of fuzzy dice swinging from the mirror. Behind the wheel, a man with a magnificent mustache looks directly at the screen -- directly at you -- and grins. He nods once. The light turns green. The car does not move yet. It is waiting for you. You step through.";
var ENTER_MSG_ROOM = " loads a film reel into the projector. The screen fills with California sunshine and the sound of a radio playing something with brass and heartache. They step into it, and the screen shimmers and stills.";

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

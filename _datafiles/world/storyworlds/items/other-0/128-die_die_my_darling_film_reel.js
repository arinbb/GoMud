
// Portal Item: Die! Die! My Darling! Film Reel
var DEST_ROOM = 1600;
var ENTER_MSG_SELF = "You thread the film reel into the projector. The screen fills with a quiet English country road. Hedgerows close in on both sides as a woman's voice whispers scripture, low and continuous, somewhere just off-screen. The image is grey — deeply, deliberately grey, as though colour has been forbidden here too. A large stone house sits at the end of a gravel drive, every curtain drawn. The image sharpens, the house grows larger, and the projector sound falls away behind you.";
var ENTER_MSG_ROOM = " loads a film reel into the projector. The screen darkens to a grey English afternoon, and the faint sound of psalms drifts from somewhere inside the image. A cold draught moves through the room. Then they are gone.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"8\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}

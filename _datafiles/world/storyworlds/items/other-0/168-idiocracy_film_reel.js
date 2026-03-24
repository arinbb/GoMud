// Portal Item: Idiocracy Film Reel
// Destination: Idiocracy zone, room 2470
var DEST_ROOM = 2470;
var WORLD_NAME = "Idiocracy";
var ENTER_MSG_SELF = "You thread the Idiocracy film reel into the projector. The machine hums. The screen fills with the grey of a military installation five hundred years old -- concrete walls, steel pods, a fluorescent tube blinking in the dark. Then the date stamps: 2505. Then the smell -- something chemical and citrus, the smell of a world that replaced water with a sports drink and is too proud of it to notice the consequences. The image gets flatter, more bureaucratic, and then you are not in the Screening Room anymore. You are in the Hibernation Chamber and something cold and stale and vast is pressing in around you and the fluorescent tube blinks once and holds and you are in the future and the future is not what you expected, though in another sense it is exactly what you expected.";
var ENTER_MSG_ROOM = " loads a film reel into the projector. The screen fills with grey concrete and a blinking red emergency light and the smell of something aggressively citrus. They step through the image and they are gone.";

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

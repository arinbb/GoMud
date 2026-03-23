// Portal Item: Back to the Future Film Reel
// Destination: Back to the Future zone, room 1940
var DEST_ROOM = 1940;
var WORLD_NAME = "Back to the Future";
var ENTER_MSG_SELF = "You thread the film reel into the projector. The machine shudders. The screen fills with a night-vision shot of an enormous parking lot -- Twin Pines Mall, 1:15 AM. A modified DeLorean rolls into frame. A man in a radiation suit climbs out. A dog on a leash trots beside him. The scene goes electric blue. The screen goes white. You feel cold asphalt under your feet and the bite of a California night. The projector is gone. Somewhere nearby, a flux capacitor glows in the dark.";
var ENTER_MSG_ROOM = " threads a film reel into the projector. The screen erupts with fire trails and the smell of ozone. They disappear into the screen and then the image collapses, and they are gone to 1955.";

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


// Portal Item: Pee-wee's Big Adventure Film Reel
// Destination: Pee-wee's Big Adventure zone, room 800
var DEST_ROOM = 800;
var WORLD_NAME = "Pee-wee's Big Adventure";
var ENTER_MSG_SELF = "You thread the film reel into the projector and it sputters to life with a cheerful whirr. The screen fills with the image of an elaborate Rube Goldberg breakfast machine -- dominoes toppling, wheels spinning, a tiny dinosaur pulling a string that lights a candle that boils water that tips a bucket. The smell of pancakes and maple syrup fills the air. Danny Elfman's manic, whimsical score swells around you as the colors grow impossibly vivid. The projector rattles behind you but you can barely hear it -- you're being pulled into a world of red bicycles, open roads, and childlike wonder...";
var ENTER_MSG_ROOM = " loads a film reel into the projector. The screen explodes with color -- a cacophony of breakfast machines and bicycle horns -- and they vanish into the film with a cheerful HONK.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"green\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"green\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}

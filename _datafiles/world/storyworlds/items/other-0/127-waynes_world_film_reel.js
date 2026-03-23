
// Portal Item: Wayne's World Film Reel
// Destination: Wayne's World zone, room 1520
var DEST_ROOM = 1520;
var ENTER_MSG_SELF = "You thread the film reel into the projector. Wayne and Garth appear on screen, waving you in. Wayne does the gun-fingers directly at you. 'Excellent!' The projector hum becomes a guitar riff and the basement materializes around you — the posters, the cameras, the couch, the smell of carpet and cassette tapes and rock and roll dreams. Party time. Excellent.";
var ENTER_MSG_ROOM = " loads a film reel into the projector. Wayne and Garth wave from the screen, and the unmistakable sound of a Fender Stratocaster fills the Screening Room before the image swallows them whole.";

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

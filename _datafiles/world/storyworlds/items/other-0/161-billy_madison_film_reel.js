
// Portal Item: Billy Madison film reel
// Destination: Madison Mansion, room 2360
var DEST_ROOM = 2360;
var ENTER_MSG_SELF = "You load the reel into the projector. The machine hums to life with the warm mechanical certainty of something built to do exactly this. The screen fills with a New Jersey afternoon -- too blue, too bright, too perfectly suburban -- and then the image pushes off the screen and wraps around you. The smell of chlorine and peanut butter and chalk dust hits you all at once. The Screening Room is gone. You are standing in the Madison Mansion, and somewhere nearby, a juice box is being consumed with great conviction.";
var ENTER_MSG_ROOM = " loads a film reel into the projector. The New Jersey afternoon floods from the screen in a wave of chlorine smell and Hawaiian shirt energy. When the light clears, they are gone.";

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_play(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_enter(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_load(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_drop(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You set the film canister down. The small penguin drawn on the lid watches you with patient expectation.</ansi>");
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"yellow\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}

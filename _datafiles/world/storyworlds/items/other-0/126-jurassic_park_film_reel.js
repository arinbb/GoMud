
// Portal Item: Jurassic Park Film Reel
// Destination: Jurassic Park zone, room 1550
var DEST_ROOM = 1550;

var ENTER_MSG_SELF = "You thread the film reel into the projector. John Williams' score swells as the screen fills with an aerial shot of a green volcanic island rising from the Pacific. The camera descends through mist and jungle. Then the screen is gone. The mist is real. The jungle is real. The island is real. You are standing on a concrete helipad carved from living jungle, the helicopter already spooling up behind you, the park ahead.";

var ENTER_MSG_ROOM = " loads a film reel into the projector. The thunderous four-note theme fills the Screening Room. Through the screen, mist and jungle and something enormous moving in the trees. Then they're gone, through the screen and into the island.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"10\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}

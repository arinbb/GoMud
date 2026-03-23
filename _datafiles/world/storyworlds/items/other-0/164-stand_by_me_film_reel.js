// Portal Item: Stand By Me Film Reel
// Destination: Stand By Me zone, room 2400 (The Treehouse)
var DEST_ROOM = 2400;
var WORLD_NAME = "Stand By Me";
var ENTER_MSG_SELF = "You thread the film reel through the projector. The screen fills with a long aerial shot of a small Oregon town -- water tower, main street, the mountains behind it, summer 1959. The camera drifts north, finds a large oak tree at the edge of the residential streets, rises into it, and settles on a plank-walled room with a rope ladder going down. Four boys. The screen smells of pine and hot rail iron. The projector hum is the sound of cicadas. You feel wood planking under your feet and the weight of summer in the air, and Castle Rock is all around you and the treehouse is real.";
var ENTER_MSG_ROOM = " loads the Stand By Me reel into the projector. The screen fills with pine trees and summer light and the sound of cicadas. A train horn sounds once in the distance. They walk into the screen and are gone to 1959.";

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

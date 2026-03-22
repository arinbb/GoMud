
// Portal Film: The Princess Bride
// Destination: Princess Bride zone, room 400
var DEST_ROOM = 400;
var WORLD_NAME = "The Princess Bride";
var ENTER_MSG_SELF = "You thread the film into the projector. A grandfather's voice fills the room: 'When I was your age, television was called books...' The screen fills with rolling green hills and a farmhouse. The image swells and the scent of hay and wildflowers washes over you as you tumble forward into...";
var ENTER_MSG_ROOM = " loads a film reel into the projector. The screen fills with golden sunlight and green hills. With a shimmer of warm light, they step through and vanish into the story.";

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

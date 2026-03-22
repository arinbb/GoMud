
// Portal Item: The Shining Film Reel
// Destination: The Shining zone, room 950
var DEST_ROOM = 950;
var WORLD_NAME = "The Shining";
var ENTER_MSG_SELF = "You thread the film reel into the projector. The machine shudders and the screen fills with an aerial shot of a winding mountain road, a yellow Volkswagen Beetle crawling through vast, snow-covered wilderness. The camera swoops over frozen lakes and dark pines. The isolation is total. Then the Overlook Hotel appears — massive, empty, waiting. The image swallows you. The projector goes silent behind you. Cold air hits your face. You're standing outside, snow crunching under your feet, staring up at the Overlook Hotel.";
var ENTER_MSG_ROOM = " loads a film reel into the projector. The screen fills with blinding white snow. Frost crawls across the floor and swallows them whole. When it clears, they're gone.";

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

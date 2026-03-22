
// Portal Art: Starry Night by Van Gogh
// Destination: Starry Night zone, room 500
var DEST_ROOM = 500;
var WORLD_NAME = "Starry Night";
var ENTER_MSG_SELF = "You hold the painting before you and gaze deep into the swirling sky. The brushstrokes begin to move -- slowly at first, then faster. The blues deepen, the yellows blaze. The frame dissolves in your hands and the painting expands until you are standing in the thick impasto of Van Gogh's sky, surrounded by swirling stars...";
var ENTER_MSG_ROOM = " holds up a painting of a starry sky. The colors in the frame begin to swirl and expand, engulfing them in a vortex of blue and gold. With a soft whoosh, the painting and its holder vanish.";

function onCommand_gaze(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_enter(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_touch(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_step(user, item, room) {
    return enterWorld(user, item, room);
}

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"14\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"14\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());

    user.MoveRoom(DEST_ROOM);
    return true;
}

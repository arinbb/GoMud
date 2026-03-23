var DEST_ROOM = 1920;
var WORLD_NAME = "Ghostbusters";
var ENTER_MSG_SELF = "You slide the reel into the projector. The machine whirs and clicks. The screen fills with static, then resolves: a hand-drawn NO GHOST logo. A phone rings. 'Ghostbusters, whaddya want.' The image expands, deepens, pulls at you. The smell of ozone and motor oil. Then you are standing on the ground floor of a Manhattan firehouse, the Ecto-1 idling in the bay, and somewhere above you a PKE meter is chirping.";
var ENTER_MSG_ROOM = " loads the Ghostbusters film reel into the projector. The screen blazes with blue-white proton energy and swallows them whole. When it fades, they are gone.";

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

// Portal Item: Harold and Maude Film Reel
// Destination: Harold and Maude zone, room 2020
var DEST_ROOM = 2020;
var WORLD_NAME = "Harold and Maude";
var ENTER_MSG_SELF = "You thread the reel into the projector. The machine hums. The screen fills with a California church, 1971 -- dark wood pews, a gleaming casket, narrow bars of stained-glass light. In the back pew, a pale young man in a perfect black suit sits with enormous eyes fixed on the coffin. Beside him, an old woman in an extraordinary hat catches your eye through the screen and smiles, as if she has been expecting you. The image deepens. The guitar begins. You step through.";
var ENTER_MSG_ROOM = " loads a film reel into the projector. The screen fills with warm California light and the sound of a guitar. They step into it, and the screen goes still.";

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

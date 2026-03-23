
// Portal Item: Crime and Punishment
// Destination: Crime and Punishment zone, room 1800
var DEST_ROOM = 1800;
var ENTER_MSG_SELF = "You open the heavy book. The smell of lime, sweat, and summer heat rises from the pages. The words blur and rearrange. A narrow staircase materializes in the yellow St. Petersburg light. The walls are very close. The ceiling slopes. You are in the garret.";
var ENTER_MSG_ROOM = " opens a thick Russian novel. The air turns stifling and yellow, and the sound of a city in summer drifts from its pages, and the smell of lime and dust and the canal rises for a moment before they are gone.";

function onCommand_read(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_open(user, item, room) {
    return enterWorld(user, item, room);
}

function onCommand_use(user, item, room) {
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

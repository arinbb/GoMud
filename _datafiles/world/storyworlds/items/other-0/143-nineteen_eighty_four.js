// Portal Item: Nineteen Eighty-Four
var DEST_ROOM = 1960;
var WORLD_NAME = "Nineteen Eighty-Four";
var ENTER_MSG_SELF = "You open the paperback and the words rise off the page like grey fog. The smell hits first: boiled cabbage, Victory Gin, something chemical with no name. Then the cold. Then the telescreen hum, omnipresent, the sound of always being watched. Victory Mansions materializes around you, grey walls, grey light, a poster of a dark-eyed face covering half the landing. The words BIG BROTHER IS WATCHING YOU emerge from the fog in capital letters. You are in Airstrip One, London, Oceania. It is 1984. It will always be 1984 here.";
var ENTER_MSG_ROOM = " opens a plain paperback. A wave of cold grey air spills from its pages, carrying the smell of boiled cabbage and Victory Gin. The telescreen hum that follows fades as they go. When it clears, they are gone.";

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
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">" + ENTER_MSG_SELF + "</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"8\">" + ENTER_MSG_ROOM + "</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}


// Portal Item: Seinfeld Film Reel
// Destination: Seinfeld zone, room 2000
var DEST_ROOM = 2000;

function onCommand_load(user, item, room) { return enterWorld(user, item, room); }
function onCommand_use(user, item, room) { return enterWorld(user, item, room); }
function onCommand_play(user, item, room) { return enterWorld(user, item, room); }
function onCommand_watch(user, item, room) { return enterWorld(user, item, room); }
function onCommand_enter(user, item, room) { return enterWorld(user, item, room); }

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You thread the film reel. The NBC chime plays somewhere distant -- three descending notes, the sound of something beginning that you have seen begin a thousand times. Then: an apartment. Upper West Side. A couch. A man in jeans and white sneakers standing near the kitchen counter, noticing something. The bass line starts up -- not quite music, something between music and punctuation -- and the image sharpens and deepens until you can see the Superman magnet on the refrigerator. You step forward and the apartment closes around you and the city is outside the window and the laugh track is somewhere just off to the right, patient and ready.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"8\"> loads a film reel. The screen fills with a New York apartment and a man with opinions about cereal. They step into it and the screen shows an empty couch.</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}

// Portal Item: MTVs The State Film Reel
// Destination: MTV Studio, room 2380
var DEST_ROOM = 2380;

function onCommand_load(user, item, room) { return enterWorld(user, item, room); }
function onCommand_use(user, item, room) { return enterWorld(user, item, room); }
function onCommand_play(user, item, room) { return enterWorld(user, item, room); }
function onCommand_watch(user, item, room) { return enterWorld(user, item, room); }
function onCommand_enter(user, item, room) { return enterWorld(user, item, room); }

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"13\">You thread the film reel. The image comes up shaky and bright, the way 1994 video stock always came up: a little too saturated, a little too alive. A studio. Cheap sets. Eleven people who made a television show on MTV because they wanted to and because they were good enough and because wanting to and being good enough turned out to be sufficient. A man in a Hawaiian shirt is standing in a room full of pudding. Two men are reading books in a barrel. Someone is about to say something extremely funny and they know it and they are about to say it anyway. The camera shakes because a person is holding it. The image sharpens and the sound comes up — audience laughter that sounds real because it is real, because this is actually funny — and you step forward into the studio and the light is overhead and too bright and you are here and the show is on.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"8\"> loads the film reel. The screen fills with a cheap MTV studio set, too bright, completely committed. They step through and the studio light closes around them.</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}

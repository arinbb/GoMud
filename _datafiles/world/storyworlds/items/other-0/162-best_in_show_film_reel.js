
// Portal Item: Best in Show Film Reel
// Destination: Mayflower Kennel Club Entrance, room 2340
var DEST_ROOM = 2340;

function onCommand_load(user, item, room) { return enterWorld(user, item, room); }
function onCommand_use(user, item, room) { return enterWorld(user, item, room); }
function onCommand_play(user, item, room) { return enterWorld(user, item, room); }
function onCommand_watch(user, item, room) { return enterWorld(user, item, room); }
function onCommand_enter(user, item, room) { return enterWorld(user, item, room); }

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You thread the film reel. The image comes up gradually: a convention center entrance in Philadelphia, November. Fluorescent lights. The smell of conditioning spray and dog treats and forty different shampoos blending into something specific. A Weimaraner near the registration desk stares at the volunteer with the patient intensity of an animal that has made a decision and is waiting for the world to catch up. A Bloodhound passes through with solemn purpose. Somewhere behind the banners a PA system crackles with a ring assignment. The screen opens and you step forward and the sound is very specific and very real and you are in it now, in this, in the middle of people who care enormously about dogs.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"8\"> loads a film reel labeled Best in Show. The screen fills with a convention center entrance in Philadelphia. Every person in the frame has a dog. They step into it and the entrance doors close behind them.</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}

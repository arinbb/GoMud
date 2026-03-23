
// Portal Item: Best in Show Film Reel
// Destination: Taft Hotel Lobby, room 2340
var DEST_ROOM = 2340;

function onCommand_load(user, item, room) { return enterWorld(user, item, room); }
function onCommand_use(user, item, room) { return enterWorld(user, item, room); }
function onCommand_play(user, item, room) { return enterWorld(user, item, room); }
function onCommand_watch(user, item, room) { return enterWorld(user, item, room); }
function onCommand_enter(user, item, room) { return enterWorld(user, item, room); }

function enterWorld(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You thread the film reel. The image comes up gradually: a hotel lobby in Philadelphia, the night before a dog show. Every chair has a dog in it. A Weimaraner is staring at the front desk clerk with the focused serenity of an animal that has already won whatever it set out to do. Somewhere in the background, a man in a cardigan is smiling at a Norwich Terrier with the warmth of a person who is exactly where he wants to be. The image sharpens and the sound comes up -- the soft noise of a building full of dogs and the people who love them -- and you step forward and the lobby closes around you and the smell of conditioning spray is very specific and very real and you are in it.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "<ansi fg=\"8\"> loads a film reel. The screen fills with a hotel lobby in Philadelphia. Every chair has a dog in it. They step into it and the lobby door closes behind them.</ansi>", user.UserId());
    user.MoveRoom(DEST_ROOM);
    return true;
}

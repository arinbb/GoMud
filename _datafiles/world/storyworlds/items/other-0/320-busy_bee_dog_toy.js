
// Souvenir Item: Busy Bee dog toy (Best in Show)
function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You squeeze the Busy Bee. It lets out a forlorn squeak -- halfway between a honk and a wheeze. Somewhere, a Weimaraner perks up.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " squeezes a rubber bumblebee. It makes a sound. A dog somewhere in the building immediately becomes interested.", user.UserId());
    return true;
}

function onCommand_squeeze(user, item, room) {
    return onCommand_use(user, item, room);
}

function onCommand_honk(user, item, room) {
    return onCommand_use(user, item, room);
}


// All Apologies - Track 12 (Final Room)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The cello plays its last note. The sunflowers close. The lake absorbs the final light of the sunset and goes dark -- not black, but the deep blue of something at rest. The silence holds you for one more moment, gentle and complete, and then releases you. You are in the Grand Library. The album is over. The needle lifts. The tape runs out. All in all is all we are.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sinks into the still water and is gone, leaving only ripples that fade to nothing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

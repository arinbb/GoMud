
// The Sopranos - Vesuvio Restaurant
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The candlelight expands into projector light. The smell of the kitchen fades into old celluloid. The Grand Library takes you back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles the check and walks out into the New Jersey night -- and keeps going.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" || cmd == "order" || (cmd == "look" && rest.indexOf("menu") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Artie brings you whatever he thinks you should have tonight, which is the best way to eat at Vesuvio. The pasta is handmade. The sauce has been going since morning. The wine is from a small producer in Campania that Artie found on a trip and immediately ordered a case of. You eat slowly and the candle burns down and you understand why this place matters to everyone who comes here.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("photo") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look at the photos of the old Vesuvio. The fire that destroyed it was set by Tony's order, to collect insurance money for a man Tony was helping. Artie lost everything. Tony helped him rebuild. Tony has never apologized. Artie has never left. Their friendship is built on this unspeakable thing and they sit across a table from each other and eat together and neither of them mentions it.</ansi>");
        return true;
    }

    return false;
}


// The Sopranos - The Backyard Pool
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The pool's surface ripples and the reflection expands until it swallows everything. Blue light, then warm library amber. You are back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reflects in the pool for a moment and then is simply gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("duck") >= 0 || rest.indexOf("water") >= 0 || rest.indexOf("pool") >= 0)) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stand at the edge of the pool and look at the water. There was a family of ducks here. A mother and her ducklings, nested in the reeds at the edge. Tony used to come out in the mornings in his robe, before the day started, before any of it started, and just watch them. He brought them bread sometimes. He never told anyone that he did this. They left in late summer, as ducks do, migrating to wherever ducks go. Tony stood here at the edge of this perfect blue pool in his good neighborhood and he felt something break open inside him that he has spent years trying to close. The water is clear and still and empty. The sky is in it.</ansi>");

        if (user.GetMiscCharacterData("sopranos_ducks") != "found") {
            user.SetMiscCharacterData("sopranos_ducks", "found");
            user.GrantXP(250, "understanding the ducks");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Something about the empty pool, the missing ducks, the careful maintenance of a yard that nobody uses -- it comes together. You understand something about Tony Soprano that Tony Soprano does not understand about himself. [+250 XP]</ansi>");
        }
        return true;
    }

    if (cmd == "swim" || (cmd == "jump" && rest.indexOf("pool") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">You consider jumping in. The water is certainly inviting. But something about this pool feels like it belongs to someone else's private grief, and you decide to leave it alone.</ansi>");
        return true;
    }

    return false;
}

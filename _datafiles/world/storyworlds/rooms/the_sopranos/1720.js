
// The Sopranos - The Soprano Driveway (entry room)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The driveway cracks and folds, the McMansion receding into sprocket holes and celluloid. The HBO static swallows North Caldwell whole. The Grand Library materializes around you, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into television static and vanishes from the Soprano driveway.", user.UserId());
        user.SetTempData("visited_the_sopranos", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_the_sopranos";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        if (!user.HasQuest(160)) {
        user.GiveQuest(160);
        }
        
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You thread the film reel into the projector. The HBO static hiss fills the screening room, a sound like something important being received. Then: a morning in North Caldwell, New Jersey. A man in a bathrobe walks down his driveway. He is large, heavy, carrying something invisible that bends him slightly forward. He picks up the paper. He looks at the ducks in the pool. The image sharpens and deepens and you step into it, and the New Jersey morning is around you, thick with humidity and the smell of cut grass and something underneath that you cannot quite name.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return true;
}

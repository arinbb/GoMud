// ZONE COMMANDS: play ball (2422), bat (2422), drown (2425), wendy (2425), hit ball (2426), home run (2426), ask mertle about baseball (2428), heroes get remembered (2424)
// The Sandlot -- Smalls House (entry room, 2420)
var LIBRARY_ROOM = 3;

function onEnter(user, room) {
    var visitedKey = "visited_the_sandlot";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The film reel clicks into the projector. The screen fills with a quiet suburban street in late summer -- elm trees, a two-story house, cardboard boxes in the windows. A boy stands on the front porch looking like he hasn't made a friend yet in his entire life. The image gets warmer, the colors more golden, and then the projector light pours through you and you are standing on a sidewalk in 1962, the smell of cut grass everywhere, the sound of kids laughing somewhere in the distance.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (user.HasQuest(440) == false) {
        user.GiveQuest(440);
        }
        
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The summer light thickens and goes golden, then white. The smell of cut grass fades. You are back in the Screening Room, the projector ticking quietly to a stop, the smell of old celluloid in the air.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers in the summer heat and vanishes from the front porch.", user.UserId());
        user.SetTempData("visited_the_sandlot", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

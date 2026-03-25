
// Jurassic Park - Isla Nublar Helipad (entry room)
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var visitedKey = "visited_jurassic_park";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The projector hums and the lights dim. John Williams' score swells — those first four notes, rising, ascending, the sound of genuine wonder — as the screen fills with an aerial shot of a green volcanic island rising from the Pacific. The helicopter descends through mist. The jungle opens below you. You smell it before you see it: tropical rain and ancient earth and living things too large to be real. Then the screen is gone and the smell is real and the island is real and you are standing on a concrete helipad carved from the jungle of Isla Nublar, Costa Rica. The helicopter behind you is already spooling up for the return trip. The park is ahead.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (!user.HasQuest(130)) {
        user.GiveQuest(130);
        // Quest step 1: Arrive on Isla Nublar
        user.Command("quest advance 130");
        }
        
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The jungle mist thickens around you, the island sounds fading under the rising swell of an orchestra. Film frames flicker through the green — a dinosaur eye, a water ripple, a child's face alight with wonder. The projector beam narrows to a point. The Grand Library resolves around you, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by tropical mist and the echo of an orchestral score, vanishing from the island.", user.UserId());
        user.SetTempData("visited_jurassic_park", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

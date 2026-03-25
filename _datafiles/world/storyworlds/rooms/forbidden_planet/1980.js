
// Forbidden Planet - The Landing Site (entry room)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The alien sky above you ripples like a film strip and begins to roll backward. The C-57D dissolves into sprocket holes and silver light. The green sky curls at the edges and peels away. The warmth of the Grand Library assembles itself around you from the static of deep space.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flickers like a projected image and dissolves into the alien sky, leaving only the desert and the ship behind.", user.UserId());
        user.SetTempData("visited_forbidden_planet", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_forbidden_planet";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You thread the film reel into the projector. The machine shudders, and the screen blooms with color: a flying saucer, a chrome disk catching the light of an alien sun, settling with hydraulic grace onto rust-red desert. The camera pulls back to reveal a sky the color of bottle glass. An impossible green. You lean forward to look -- and the screen swallows you. The projector hums behind you, then fades. Dry heat hits your face. The air smells of ozone and something electric and ancient. You are standing on Altair IV.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (!user.HasQuest(270)) {
        user.GiveQuest(270);
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(You have begun the quest: Monsters from the Id.)</ansi>");
        }
        
    }
    return true;
}

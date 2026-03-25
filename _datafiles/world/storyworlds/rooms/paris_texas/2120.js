
// Paris, Texas - The Texas Desert (entry room)
var LIBRARY_ROOM = 3;
var QUEST_ID = 330;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The red earth dissolves. The bleached sky tears apart at the seams. The wind dies. For a moment there is nothing — not even darkness, just the absence of landscape — and then the warm smell of old books closes around you and you are back in the Screening Room, the film reel cooling in the projector.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " walks east until the desert swallows them whole. Then the desert closes. Then there is nothing.", user.UserId());
        user.SetTempData("visited_paris_texas", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "walk" || cmd == "wander") {
        if (user.GetMiscCharacterData("paris_easter_walk") != "found") {
            user.SetMiscCharacterData("paris_easter_walk", "found");
            user.GrantXP(150, "walking the Texas desert");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You walk. One foot, then the other. The red earth does not change. The horizon does not come closer. The sky does not soften. You walk because there is nothing else to do, and because forward is a direction even when it leads nowhere. The desert receives your footsteps without comment.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+150 XP)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You walk. The desert does not remember you. You walk anyway.</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_paris_texas";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        if (!user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
        }
        
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The film reel loads and the projector hums. The screen fills with red. Just red — earth and sky and the shimmer of heat. Then a figure appears at the edge of the frame, walking. He has no destination. He has been walking for four years. The image swells until it is everything, and the projector sound falls away behind you, and the heat of the Texas desert lands on your skin like a hand. You are here. Wherever here is.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return true;
}

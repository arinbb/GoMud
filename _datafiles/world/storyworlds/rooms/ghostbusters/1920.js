var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var visitedKey = "visited_ghostbusters";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The film reel rattles in the projector. Static. Then a hand-drawn logo -- a ghost in a red circle, crossed out. A phone rings. \"Ghostbusters, whaddya want.\" The screen expands to swallow the room and suddenly you are standing in the big bay of a Manhattan firehouse, breathing air that smells of ozone and motor oil and something you cannot quite name.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (user.GetMiscCharacterData("quest_240_step") == null) {
        user.SetMiscCharacterData("quest_240_step", "1");
        user.GiveQuest(240);
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You feel the pull of the story. The Ghostbusters need you -- or at least, they need an audience.</ansi>");
        } else if (user.GetMiscCharacterData("quest_240_step") == "1") {
        user.SetMiscCharacterData("quest_240_step", "2");
        }
        
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The firehouse dissolves in a shimmer of film grain. The ghost trap rattles one final time and then everything fades to the warm light of the Library's Screening Room.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flickers like a ghost and vanishes back to the Library.", user.UserId());
        user.SetTempData("visited_ghostbusters", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }
    return false;
}

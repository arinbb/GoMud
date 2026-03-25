
// The Andy Griffith Show - Andys Front Porch (entry room)
var LIBRARY_ROOM = 1;
var QUEST_ID = 310;

function onEnter(user, room) {
    var visitedKey = "visited_the_andy_griffith_show";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        if (!user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
        }
        
        var porchKey = "andy_quest_porch";
        if (user.GetMiscCharacterData(porchKey) != "done") {
        user.SetMiscCharacterData(porchKey, "done");
        user.Command("quest advance 310", 0);
        }
        
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You thread the film reel. For a moment there is only the soft mechanical sound of the projector finding its rhythm. Then: a screen door. It creaks open with the particular sound of a door that has opened the same way ten thousand summer evenings. Crickets rise up, slow and certain. A guitar strums softly -- nothing complicated, just a simple melody that knows exactly what it is. The image brightens and deepens: a front porch, two rocking chairs, fireflies beginning their slow blink in a yard full of honeysuckle and maple shade. A man in the near chair sets his guitar across his knees and looks up and smiles like he was expecting you. You step forward through the screen and the evening air closes warm around you and the screen door swings shut behind you and Mayberry is all there is.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The porch fades slowly -- fireflies last, winking out one by one -- and the Grand Library takes shape around you, warm and quiet and full of books. You can still feel the evening air on your face. You can still hear the guitar, faintly, if you try.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands up from the rocking chair, tips a wave toward Andy, and steps off the porch back to the Grand Library.", user.UserId());
        user.SetTempData("visited_the_andy_griffith_show", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" || cmd == "whistle" || (cmd == "strum" && rest.indexOf("guitar") >= 0)) {
        var key = "easter_mayberry_porch";
        if (user.GetMiscCharacterData(key) != "done") {
            user.SetMiscCharacterData(key, "done");
            user.GrantXP(200, "played music on Andys porch");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You pick up the guitar or raise your chin and whistle the theme -- that simple, perfect melody. It floats out over the yard and the fireflies seem to blink in time. Andy grins wide. Opie would approve. Somewhere a screen door opens just to let the music in.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plays a tune on Andys guitar. The melody drifts out over the yard and the fireflies blink in time.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You strum a chord or whistle a bar. The evening air accepts it without complaint. In Mayberry, music is always welcome.</ansi>");
        }
        return true;
    }

    if (cmd == "sit" || (cmd == "rock" && rest.indexOf("chair") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You settle into one of the rocking chairs. The wood creaks in a satisfying way. The yard spreads before you in the evening light. This is the thing about Mayberry -- sometimes just being here is enough.</ansi>");
        return true;
    }

    return false;
}

function onIdle(room) {

    var players = room.GetPlayers();
    if (players.length == 0) {
        return false;
    }

    var roll = UtilDiceRoll(1, 10);

    if (roll == 1) {
        room.SendText("<ansi fg=\"10\">A whippoorwill calls from the maple tree, once, twice, then falls quiet. The fireflies answer with their slow green light.</ansi>");
        return true;
    }

    if (roll == 2) {
        room.SendText("<ansi fg=\"10\">The screen door opens and the smell of fresh pie drifts out from the kitchen -- something with cinnamon, something with patience, something made by someone who loves you.</ansi>");
        return true;
    }

    return false;
}

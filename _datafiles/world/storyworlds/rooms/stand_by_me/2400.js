// ZONE COMMANDS: tell story / lardass (2400 easter egg), return (all rooms)
// Stand By Me -- The Treehouse (entry room 2400)
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    var visitedKey = "visited_stand_by_me";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The film reel threads through the projector. The screen fills with a wide shot of a small Oregon town in summer -- a water tower, a barbershop, a kid on a bicycle, everything burnished gold. Then the camera tilts up into the branches of an oak tree and you feel the wood under your feet and the heat of the afternoon through the planks and the whole improbable warmth of being twelve years old in 1959 and thinking you have forever. The Screening Room is gone. Castle Rock is not.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (user.HasQuest(430) == false) {
        user.GiveQuest(430);
        }
        
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The light through the treehouse window shifts and flattens, the way projected light flattens when the reel runs out. The summer smell fades. The screen in the Screening Room is blank and white. The projector clicks to silence. You are back in the Grand Library. The treehouse is gone but the feeling -- the feeling lingers for a while.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " looks up from the treehouse window, and then is simply gone, like a memory you cannot hold.", user.UserId());
        user.SetTempData("visited_stand_by_me", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "tell" || (cmd == "say" && (rest.toLowerCase().indexOf("lardass") >= 0 || rest.toLowerCase().indexOf("story") >= 0))) {
        handleLardass(user, room);
        return true;
    }

    if (cmd == "lardass") {
        handleLardass(user, room);
        return true;
    }

    return false;
}

function onCommand_tell(rest, user, room) {
    handleLardass(user, room);
    return true;
}

function handleLardass(user, room) {
    var key = "easter_sbm_lardass";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">Gordie grins. You've already heard the Lardass story. It doesn't get less good.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(200, "the Lardass story");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">Gordie clears his throat. Everyone goes quiet -- even Teddy stops pacing.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"15\">Gordie says: 'Okay, so. Davie Hogan. They called him Lardass. He was twelve years old and weighed one hundred and seventy pounds and he had decided to get revenge on every single person who had ever been mean to him. The weapon: the Castle Rock Fourth of July Pie Eat Contest...'</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">He tells the whole thing -- the barf-o-rama, the chain reaction, the bleachers, all of it. By the end, Chris is laughing so hard he is crying. Teddy falls off his milk crate. Vern makes a sound that is not quite a word. You have just witnessed the first telling of the greatest story Gordie Lachance will ever tell in the treehouse. He will tell better ones later. But not from here.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: You heard the Lardass story.)</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " listens to Gordie tell the Lardass story. The treehouse fills with the sound of twelve-year-old boys laughing.", user.UserId());
}

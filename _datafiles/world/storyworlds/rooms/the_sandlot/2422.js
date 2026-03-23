// The Sandlot -- The Sandlot field (2422) - main play area
// EASTER EGG: play ball / bat -> 200 XP
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The sandlot shimmers in the heat -- the red dirt, the worn bases, the tall fence -- and then fades back into the Screening Room. The crack of a bat echoes one last time before silence.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back from home plate and vanishes in a shimmer of summer heat.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" && rest.toLowerCase() == "ball") {
        var key = "sandlot_egg_playball";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "You play ball at the sandlot");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step into the batter's box and dig in. The dirt is packed and red under your sneakers. Benny Rodriguez nods from the mound with something like respect. You don't know if you can hit a fastball. You know you're going to try. The pitch comes in and you swing -- and the crack that comes off the bat is perfect, the best sound in the world, the sound that makes this all worth it. The ball climbs into the blue summer sky. You watch it go.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps into the batter's box and takes a big swing. The crack echoes across the neighborhood.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You settle into your stance and take a cut at the air. The crack of a good hit is still ringing somewhere in your memory.</ansi>");
        }
        if (user.HasQuest(440)) {
            var step = user.GetMiscCharacterData("sandlot_quest_step");
            if (step == "1") {
                user.SetMiscCharacterData("sandlot_quest_step", "2");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: You played at the sandlot.)</ansi>");
            }
        }
        return true;
    }

    if (cmd == "bat") {
        var key = "sandlot_egg_playball";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "You swing the bat at the sandlot");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the Louisville Slugger. It is heavier than you expected and lighter than it looks. You take a practice swing -- a little off-balance, a little too early -- but the motion is right. You take another. And another. Ham Porter is watching from behind the plate. He hasn't said anything yet, which is practically a compliment.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " picks up the Louisville Slugger and takes a practice swing, eyes on an imaginary pitch.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up the bat and take a few cuts. The weight feels right in your hands now. It didn't always.</ansi>");
        }
        if (user.HasQuest(440)) {
            var step = user.GetMiscCharacterData("sandlot_quest_step");
            if (step == "1") {
                user.SetMiscCharacterData("sandlot_quest_step", "2");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: You played at the sandlot.)</ansi>");
            }
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(440)) {
        var step = user.GetMiscCharacterData("sandlot_quest_step");
        if (step == "1") {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">This is the sandlot. Try 'play ball' or 'bat' to join the game.</ansi>");
        }
    }
    return false;
}

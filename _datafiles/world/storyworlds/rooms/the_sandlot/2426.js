// The Sandlot -- The Outfield Fence (2426)
// EASTER EGG: hit ball / home run -> 200 XP (the Babe Ruth ball goes over)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fence and the shadows beyond dissolve. You are back in the Screening Room, and you can still hear the sound of something breathing on the other side of a wall.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs away from the fence and disappears into the summer light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    var restLower = rest.toLowerCase();
    if (cmd == "hit" && restLower == "ball") {
        var key = "sandlot_egg_homerun";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "The Babe Ruth ball goes over the fence");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You are at home plate, back at the beginning. In your hands is a baseball with a faded signature on it -- BABE RUTH, in blue ink, getting light with age. You should put it back. You absolutely should not be holding this. Ham Porter is behind you saying something. Benny nods from the mound. You swing. The ball jumps off the bat and rises and rises, passing over the outfield fence and over the shadow of whatever lives back there, and it is gone. There is a silence. A very long silence. Then everyone starts yelling at once.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " mimes a swing and watches something invisible arc over the fence. The silence that follows is total.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look at the fence. Beyond it, something stirs. The ball is still back there. You are never getting it back by going over. You're going to have to go through.</ansi>");
        }
        if (user.HasQuest(440)) {
            var step = user.GetMiscCharacterData("sandlot_quest_step");
            if (step == "3") {
                user.SetMiscCharacterData("sandlot_quest_step", "4");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: The ball went over the fence. Now you need to get it back.)</ansi>");
            }
        }
        return true;
    }

    if (cmd == "home" && restLower == "run") {
        var key = "sandlot_egg_homerun";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "The Babe Ruth ball goes over the fence");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">It goes over the fence. It actually goes over the fence. There is a moment -- suspended, golden -- when the ball is still rising against the summer sky and everything is perfect. Then it comes down on the other side and the sound of a very large dog going to investigate fills the sudden silence.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " watches something clear the fence in a perfect arc and disappear into the yard beyond.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The home run already happened. The ball is behind the fence. Go get it.</ansi>");
        }
        if (user.HasQuest(440)) {
            var step = user.GetMiscCharacterData("sandlot_quest_step");
            if (step == "3") {
                user.SetMiscCharacterData("sandlot_quest_step", "4");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: The ball went over the fence. Search this room to find the loose plank.)</ansi>");
            }
        }
        return true;
    }

    if (cmd == "search") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You run your hand along the fence planks until one shifts under your palm -- loose on its lower nail, pivoting enough to squeeze through. A way into Mr. Mertle's yard. The question is whether you want to.</ansi>");
        return false;
    }

    return false;
}

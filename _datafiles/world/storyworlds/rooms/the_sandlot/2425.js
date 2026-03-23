// The Sandlot -- The Public Pool (2425)
// EASTER EGG: drown / wendy -> 200 XP (Squints' famous pool stunt)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The chlorine smell fades and the shimmer of the pool resolves into the shimmer of the projection screen. You are back in the Screening Room, damp and squinting.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs out of the pool and dissolves into the summer light.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drown" || cmd == "wendy" || (cmd == "say" && rest.toLowerCase().indexOf("wendy") >= 0)) {
        var key = "sandlot_egg_wendy";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Squints' famous pool stunt");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You stand at the edge of the deep end and look up at Wendy Peffercorn in her chair. Then -- with the calm certainty of a man who has planned this since the second week of June -- you step off the edge into the deep end and sink to the bottom. You don't move. You let the chlorine water close over you. Above, there is a whistle, a splash, strong hands pulling you up, air on your face. And then Wendy Peffercorn is giving you mouth-to-mouth resuscitation and the whole pool is watching in silence. Your eyes open. You look at her. She looks at you. History is being made. Then she realizes you are breathing just fine and has things to say about that.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP)</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes a very deliberate step off the edge of the pool and sinks to the bottom. Wendy's whistle shrieks.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Wendy sees you looking at the deep end and raises one finger in a warning. You are banned from the pool for two weeks but it was worth every second.</ansi>");
        }
        if (user.HasQuest(440)) {
            var step = user.GetMiscCharacterData("sandlot_quest_step");
            if (step == "2") {
                user.SetMiscCharacterData("sandlot_quest_step", "3");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: You visited the pool.)</ansi>");
            }
        }
        return true;
    }

    if (cmd == "swim" || cmd == "jump" || cmd == "dive") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You run three steps and jump off the edge of the pool, arms and legs everywhere, a cannonball in the most technical sense. The cold water closes over you. You surface gasping. From the high-dive platform, someone applauds sarcastically. From the lifeguard stand, Wendy Peffercorn lowers her sunglasses one millimeter and then raises them again. You have been noticed. This is enough.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " does an inadvisable cannonball off the pool edge.", user.UserId());
        if (user.HasQuest(440)) {
            var step = user.GetMiscCharacterData("sandlot_quest_step");
            if (step == "2") {
                user.SetMiscCharacterData("sandlot_quest_step", "3");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: You visited the pool.)</ansi>");
            }
        }
        return true;
    }

    return false;
}

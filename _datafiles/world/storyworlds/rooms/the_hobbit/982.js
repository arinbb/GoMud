
// Elvenking's Halls - return handler
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The green and gold lanterns dim. The Elvenking's halls shrink into the confines of a page. You tumble through darkness lit by elven light, and land softly in the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs into an empty wine barrel and floats away down the river of story, back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "hide" || (cmd == "get" && (rest.indexOf("barrel") >= 0 || rest.indexOf("in barrel") >= 0)) || (cmd == "climb" && rest.indexOf("barrel") >= 0) || (cmd == "enter" && rest.indexOf("barrel") >= 0)) {
        if (user.GetMiscCharacterData("hobbit_barrel_ride") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You eye the barrels again. The plan worked once -- a masterpiece of desperation and improvisation. But you would have to be truly trapped to do it a second time. A very cold, very wet, very undignified way to travel.</ansi>");
            return true;
        }
        user.SetMiscCharacterData("hobbit_barrel_ride", "true");
        user.GrantXP(200, "the Great Barrel Escape from the Elvenking's Halls");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The butler is asleep. The guards are occupied. Thirteen dwarves are locked in the cellars. The Forest River runs right beneath the elf-halls and empties into Long Lake, where Lake-town waits, where a boat could be hired, where a mountain lies just beyond the water...</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The plan is absurd. The plan is the only option. You stuff dwarves into empty wine barrels -- Bombur takes the largest and barely fits -- and load them onto the current. Then you slip out beside the barrels on the river gate, clinging to a barrel in the dark water as the elves count empties overhead. Cold. Absolutely freezing. But free.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">This is what a burglar does when there are no keys and no tunnels and no eagles coming: improvises until something impossible becomes merely extremely uncomfortable.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+200 XP for the Great Barrel Escape!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " eyes the empty wine barrels with a calculating look and a plan that should not work but absolutely will.", user.UserId());
        return true;
    }

    return false;
}

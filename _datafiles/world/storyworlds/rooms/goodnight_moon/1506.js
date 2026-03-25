
// Under the Bed
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(110) && !user.GetMiscCharacterData("gm_found_mouse")) {
        var mobs = room.GetMobs(233);
        if (mobs.length > 0) {
            user.SetMiscCharacterData("gm_found_mouse", "true");
            user.Command("quest advance 110");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: you have found the little mouse.)</ansi>");
        }
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You crawl back out from under the bed, back into the amber light of the great green room. The dust bunnies watch you go. You carry a small amount of their dust with you, and something from the paper -- a word you cannot quite read, but feel.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " emerges from under the bed and drifts back toward the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "take" || cmd == "get") {
        if (rest.toLowerCase().indexOf("coin") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You pick up the old coin. It is lighter than it looks. You look at it for a long time, but its denomination remains uncertain. Whatever it was worth when it fell, it is worth the same now -- which is: the weight of a lost thing found, no more and no less. You set it back down. Some things belong where they are.</ansi>");
            return true;
        }
        if (rest.toLowerCase().indexOf("sock") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You pick up the lost sock. It is clean, in a dusty way. You think about taking it back upstairs, reuniting it with its pair -- but of course you do not know where the pair is. You set the sock back down. Some separations are permanent. This is not a sad thought. It is just a true one.</ansi>");
            return true;
        }
        if (rest.toLowerCase().indexOf("paper") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You unfold the paper and read it in the dim light. It says 'hush.' Or maybe it says your name. The two things feel very similar, down here under the bed, where the clock ticks loud and the dust dreams.</ansi>");
            return true;
        }
    }

    if (cmd == "pet" || cmd == "touch") {
        if (rest.toLowerCase().indexOf("dust") >= 0 || rest.toLowerCase().indexOf("bunny") >= 0 || rest.toLowerCase().indexOf("bunnies") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You reach out to one of the dust bunnies. It does not flinch or flee. Your hand passes through it, which is exactly what you expected once you tried. The dust it's made of resettles in a new arrangement, slightly more you-shaped at the edges. This counts as contact. This counts as meeting.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reaches toward the dust bunnies with careful hands.", user.UserId());
            return true;
        }
    }

    return false;
}

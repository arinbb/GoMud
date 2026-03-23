
// Among the Kittens
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(110) && !user.GetMiscCharacterData("gm_visited_kittens")) {
        user.SetMiscCharacterData("gm_visited_kittens", "true");
        user.Command("quest advance 110");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: you have said goodnight to the kittens.)</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You grow back to your ordinary size. The kittens, now ankle-height again, bat at your feet once as you go. You step away from the mittens and the playing and the purring and drift back toward the Grand Library, carrying the memory of kitten warmth like a coal in your chest.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " grows to ordinary size and fades back toward the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play") {
        if (rest.toLowerCase().indexOf("mitten") >= 0 || rest.toLowerCase().indexOf("mittens") >= 0 || rest.toLowerCase().indexOf("with mitten") >= 0) {
            if (user.GetMiscCharacterData("gm_played_mittens") == "true") {
                SendUserMessage(user.UserId(), "<ansi fg=\"10\">You bat the mitten again. The kittens arrive immediately. This is always the right thing to do.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plays with the mittens. The kittens are extremely interested.", user.UserId());
                return true;
            }
            user.SetMiscCharacterData("gm_played_mittens", "true");
            user.GrantXP(150, "playing with the kittens and mittens");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You pick up a mitten and dangle it. The response is immediate and total: both kittens arrive at once, one from the left and one from the right, pouncing on the mitten with the absolute commitment that kittens bring to pouncing. The gray one bites gently. The orange one bats it free. The mitten skids across the carpet. They are both after it. They collide. They tumble. You are laughing, you realize. Down here at kitten-scale, in the warmth of the great green room, you are laughing quietly into the wool-smelling air.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+150 XP for playing with the kittens.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dangles a mitten. Both kittens pounce at once and spectacular chaos ensues.", user.UserId());
            return true;
        }
    }

    if (cmd == "pet" || cmd == "pat") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You reach down and the kitten -- the gray one -- allows it. Your hand sinks into fur that is impossibly soft and impossibly warm. The purring begins immediately, felt before heard, a vibration in your palm. The orange one circles once, then butts its head against your other hand. Both kittens are purring now. The sound fills the room's lower level, the warm carpet-and-wool-and-kitten layer of the world. You stay here a long time.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pets both kittens. Both kittens purr.", user.UserId());
        return true;
    }

    if (cmd == "say" && rest.toLowerCase().indexOf("goodnight") >= 0 && rest.toLowerCase().indexOf("kitten") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You say goodnight to the kittens. One of them -- the gray one -- looks up at you with enormous dark-centered eyes. It blinks, slowly. A slow blink from a cat means trust. The orange one does not stop playing but it pauses for one fraction of a second, which is the orange kitten's version of acknowledgment. You have been seen. Goodnight has been said.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " says goodnight to the kittens. They blink slowly in response.", user.UserId());
        return true;
    }

    return false;
}

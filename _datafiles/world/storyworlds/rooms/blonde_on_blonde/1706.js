
// Stuck Inside of Mobile with the Memphis Blues Again - Track 6
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The compass stops spinning for a moment -- not settling on north, just stopping -- and in that stillness the collage dissolves. You are back in the Grand Library. You are not in Mobile. You are not in Memphis. You do not have those particular blues again, for now.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " finds a direction and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ask") {
        var target = rest.toLowerCase();
        if (target.indexOf("shakespeare") >= 0 || target.indexOf("ragman") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You call to the ragman: what does Shakespeare want here? He turns slowly. His eyes are old in the way that ragmen in Dylan songs are always old. He says: \"He came for the same reason as anyone. He heard there was something here that couldn't be fixed in the original languages. He brought his best materials.\" He gestures at the alley where Shakespeare stands, still muttering about Alabama. \"The problem,\" the ragman continues, \"is that some things don't translate. Some things only exist in the language of the place that made them. The Memphis blues are in that category. No amount of iambic pentameter.\" He trails off. He has said what he needed to say. He goes back to rearranging his debris.</ansi>");
            if (user.GetMiscCharacterData("easter_bob_ragman_shakespeare") != "found") {
                user.SetMiscCharacterData("easter_bob_ragman_shakespeare", "found");
                user.GrantXP(150, "asking the ragman about Shakespeare");
            }
            return true;
        }
        if (target.indexOf("memphis") >= 0 || target.indexOf("mobile") >= 0 || target.indexOf("blues") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The ragman looks at you over his collection. \"Memphis is a feeling,\" he says. \"Mobile is where you are when you have the Memphis feeling and Memphis is not there. The blues are what you have when you have both feelings at once and no direction to walk in.\" He picks up the broken compass and holds it out. The needle spins. He puts it down.</ansi>");
            return true;
        }
    }

    if (cmd == "use" || cmd == "spin" || cmd == "look") {
        if (rest.indexOf("compass") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The compass needle makes two full rotations and slows without settling. There is north somewhere in the world but it is not participating in this room. You cannot navigate by this compass. You were never going to navigate by this compass. That is what the compass is for.</ansi>");
            return true;
        }
    }

    return false;
}

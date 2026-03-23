
// Wayne's World - The Arcade
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The arcade cabinets flash GAME OVER in sequence. The neon dims. The library rebuilds itself from the darkness, warm and full of books rather than pixels.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " loses their last life and vanishes from the arcade.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" || cmd == "game") {
        var restLower = rest.toLowerCase();
        if (restLower.indexOf("mortal") >= 0 || restLower.indexOf("kombat") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">FINISH HIM. You face your opponent across the Mortal Kombat screen and execute a finishing move of perfect brutality. The kid watching lets out a long, sincere \"WHOA.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " executes a Mortal Kombat finishing move. The crowd watching makes appropriate noises.", user.UserId());
            return true;
        }
        if (restLower.indexOf("galaga") >= 0 || restLower.indexOf("pac") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You play with focused excellence. High score is a concept you are currently in conversation with. The cabinet blinks approvingly.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plays with the focused intensity of someone who takes arcade games seriously.", user.UserId());
            return true;
        }
        if (restLower.indexOf("pinball") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The pinball machine fires up. You play. The ball moves with the controlled chaos of someone who has put in their ten thousand hours. Multiball. Always go for multiball.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plays pinball with exceptional commitment. Multiball achieved.", user.UserId());
            return true;
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick a machine and feed it a token. The game begins. You play with the quiet focus of someone who loves this and doesn't need to explain why.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " selects an arcade game and begins playing.", user.UserId());
        return true;
    }

    if (cmd == "token" || cmd == "tokens") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The change machine accepts your money and returns tokens in the satisfying way that change machines do. You hold the tokens. The machines await.</ansi>");
        return true;
    }

    return false;
}

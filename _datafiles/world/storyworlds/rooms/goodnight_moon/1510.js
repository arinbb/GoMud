
// The Telephone
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You replace the receiver carefully. The click as it settles into the cradle is the most satisfying sound in the room. You step back from the mantelpiece and drift back toward the Grand Library, the comb and brush and toy house and telephone arranged behind you as they have always been, as they will always be.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " replaces the telephone receiver and fades back toward the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pick" || cmd == "answer" || cmd == "use") {
        if (rest.toLowerCase().indexOf("telephone") >= 0 || rest.toLowerCase().indexOf("phone") >= 0 || rest == "") {
            var stories = [
                "A voice on the line, very calm and low: 'Goodnight, clocks. Goodnight, socks. Goodnight, little house. Goodnight, mouse.' You recognize the words. You have always known them. The voice continues, listing all the things in all the rooms of all the warm houses, saying goodnight to each one. You listen until you cannot remember when it started. You replace the receiver, very gently.",
                "Static at first, like the sound inside a seashell -- and then a voice, a woman's voice, or something like a woman's voice, saying something you can almost hear. It is not words exactly. It is the rhythm of words. The rhythm of 'hush.' You hold the receiver to your ear for a long time and listen to the rhythm.",
                "The telephone is connected to somewhere. You hear breathing -- very slow and regular, the breathing of something enormous and patient. The moon, you think. Or sleep. Or the night itself, breathing in and out. You listen to it for a while. Your own breathing slows to match."
            ];
            var pick = Math.floor(Math.random() * stories.length);
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You pick up the receiver. It is heavier than you expect. You hold it to your ear.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"blue\">" + stories[pick] + "</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " picks up the green telephone and listens to the receiver.", user.UserId());
            return true;
        }
    }

    if (cmd == "dial") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You spin the dial. It turns smoothly and returns with a satisfying click. You do not dial a number exactly -- you dial the letters of something, a word, a name, something you know. The telephone rings once, somewhere very far away. Then silence. Then, faintly, the sound of something being said in another room in another house -- a small voice, a large quiet, a goodnight.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dials the telephone, slowly and deliberately.", user.UserId());
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("toy house") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You look very closely at the toy house. The painted windows are yellow and the painted smoke curls perpetually upward. If you look long enough -- and you do look long enough -- you can see that inside the toy house there is a room. Inside the room there is a tiny fireplace, a tiny window, a tiny rocking chair, a tiny old lady. Inside the tiny old lady's hands there are even tinier needles. The needles are moving. You look away before you can see what is inside the tiny needles.</ansi>");
        return true;
    }

    return false;
}

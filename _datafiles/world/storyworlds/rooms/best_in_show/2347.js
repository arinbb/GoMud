// Best in Show - Backstage
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Backstage dissolves. The pacing handlers, the crates, the whiteboard with its seven names -- all fading back into celluloid. The Grand Library settles around you, unhurried and free of competitive pressure.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps past the gear bags and back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pace" || cmd == "wait" || cmd == "breathe") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pace the backstage corridor. The concrete is cold under your feet. The fluorescent lights buzz. The muffled sound of the ring floats through the wall. You understand, standing here, what it is to care this much about something. The pacing helps. It doesn't help. It's what there is to do.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("board") >= 0 || cmd == "read" && rest.indexOf("board") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Best in Show order: Vizsla, Bloodhound, Standard Schnauzer, Norwich Terrier, Standard Poodle, Shih Tzu, Border Collie. Seven dogs. One judge. One moment. The whiteboard is perfectly clean except for these seven words. Someone erased everything else. This was all that needed to be here.</ansi>");
        return true;
    }

    if (cmd == "sit" && (rest.indexOf("bench") >= 0 || rest == "")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit on the bench. The wood has the weight of years of people sitting on it before things happened. You look at the 'Good luck' scratched into the surface. You don't know who wrote it or who it was for. It lands anyway.</ansi>");
        return true;
    }

    return false;
}

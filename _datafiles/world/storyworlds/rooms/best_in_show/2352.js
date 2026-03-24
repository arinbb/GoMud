// Best in Show -- Behind the Bleachers (2352)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Behind the bleachers dissolves. The pacing handlers, the gear bags, the bench with its scratched Good Luck -- all fading back into celluloid. The Grand Library settles around you, unhurried and free of pre-show tension.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps past the gear bags and back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pace" || cmd == "wait" || cmd == "breathe") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pace the backstage corridor. The concrete is cold. The fluorescent lights buzz. The muffled sound of the ring floats through the bleachers. You understand, standing here, what it is to care this much about something -- to have done everything you could do and be waiting to find out if it was enough. The pacing helps. It doesn't help. It is what there is to do.</ansi>");
        return true;
    }

    if (cmd == "sit" && (rest.indexOf("bench") >= 0 || rest == "")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sit on the bench. The wood has the weight of years of people sitting here before things happened. You look at the Good Luck scratched into the surface. You do not know who wrote it or who it was for. It lands anyway.</ansi>");
        return true;
    }

    if (cmd == "pet" || cmd == "pat") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pat a passing dog. It acknowledges you briefly with the focus of an athlete on the way to the starting line. Everything is about the ring right now. Everything has been about the ring for months. You understand this and step aside.</ansi>");
        return true;
    }

    return false;
}

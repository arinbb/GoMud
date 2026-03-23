
// Obviously 5 Believers - Track 13
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The baby blue eyes watch you go. The amps keep humming. You dissolve back to the Grand Library, ears ringing pleasantly from nothing you can identify.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs out of the garage under five blue eyes, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "play" || cmd == "plug") {
        if (rest.indexOf("amp") >= 0 || rest.indexOf("guitar") >= 0 || rest == "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You find a guitar leaning against a Fender Twin and plug it in. The amp warms up with a hiss and then a hum and then you hit a chord and it fills the garage completely -- simple, loud, alive. The five blue eyes on the wall watch you without judgment. You play another chord. The song plays itself through you for a moment. This is what belief sounds like: three chords in a garage with no audience except walls that have been watching all night.</ansi>");
            return true;
        }
    }

    if (cmd == "count" || cmd == "look") {
        if (rest.indexOf("eye") >= 0) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You count the baby blue eyes on the walls and ceiling. One above the left amp stack. One on the back wall at head height. One on the right wall where the drywall starts. One in the far corner near the ceiling. One directly overhead, looking straight down. Five eyes. Five separate perspectives. Five believers in whatever this is. You are obviously not one of them. You are the thing being observed.</ansi>");
            return true;
        }
    }

    return false;
}

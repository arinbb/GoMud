
// The Snakes Rock
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You back away from the rock. The snake watches you go with no expression. The stars remain. The desert remains. You dissolve into library light.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs away from the rock and dissolves into starlight.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ask" && (rest.indexOf("home") >= 0 || rest.indexOf("return") >= 0 || rest.indexOf("send") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The snake uncoils one loop and regards you steadily. 'I can send anyone back to where they came from. It is a short journey.' Its tongue flickers. 'But yours,' it adds, 'is not the right kind of going home. Your way back is through the book, not through me.' The loop recoils. You are not entirely relieved.</ansi>");
        return true;
    }

    if (cmd == "ask" && (rest.indexOf("riddle") >= 0 || rest.indexOf("puzzle") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The snake does not offer riddles. The snake offers truths in the shape of riddles. 'I am more powerful than a king,' it says, 'more patient than a geographer, more certain than a businessman. What am I?' You do not answer. 'Precisely,' says the snake.</ansi>");
        return true;
    }

    if (cmd == "touch" || (cmd == "pet")) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You extend your hand toward the snake. It watches your hand approach with complete calm. You stop. Your hand knows something your courage does not. You withdraw. The snake's expression, if it has one, does not change.</ansi>");
        return true;
    }

    if (cmd == "listen" && rest.indexOf("snake") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The snake speaks quietly. 'Everything that shines is only the memory of something that burned here once. The stars you see tonight may already be gone. What you love is always partly made of what you fear losing.' It pauses. 'But that is the same thing, in the end,' it adds. It says nothing more.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(230) && user.GetMiscCharacterData("lp_visited_snake") != "yes") {
        user.SetMiscCharacterData("lp_visited_snake", "yes");
    }
    return false;
}

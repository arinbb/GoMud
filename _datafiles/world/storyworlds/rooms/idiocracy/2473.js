// Idiocracy -- Costco (2473)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The fluorescent aisle lighting fades and Costco recedes into projection white and then you are back in the Screening Room. Welcome to the Library. The Librarian does not love you in the corporate-mandated sense. But the Library is quiet and does not smell of bulk pretzels and the books here do not offer law degrees. You find this adequate.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits Costco and returns to a smaller, quieter building.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "welcome" || cmd == "love" || (cmd == "say" && (rest.toLowerCase().indexOf("welcome") >= 0 || rest.toLowerCase().indexOf("love") >= 0 || rest.toLowerCase().indexOf("i love you") >= 0))) {
        handleWelcomeEasterEgg(user, room);
        return true;
    }

    return false;
}

function handleWelcomeEasterEgg(user, room) {
    var key = "easter_idiocracy_welcome";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The greeter says it again. She means it the same amount she meant it before, which is the amount Costco trained her to mean it. That amount is not zero.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(150, "Welcome to Costco");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The greeter hears you say welcome and her face does the thing it does -- the trained warmth that starts behind the eyes and comes forward. 'WELCOME TO COSTCO,' she says. 'I LOVE YOU.' It is the seventeenth time she has said it this morning. She means it each time in the specific way that someone means something they have said so many times it has become true through repetition. You feel -- briefly, unexpectedly -- welcomed. You feel -- briefly, unexpectedly -- loved. It is Costco. It counts.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+150 XP: Welcome to Costco. I love you.)</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " says something to the greeter and is told, with absolute sincerity, I love you.", user.UserId());
}

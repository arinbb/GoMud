
// Matilda - Wormwood Living Room (entry room)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The television screen flickers and swells, filling your vision with white noise. The garish wallpaper peels away like pages turning backward, and the smell of cheap perfume and microwave dinners fades into the warm scent of old books. The Grand Library reassembles around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is swallowed by the television static, flickering and dissolving until only the smell of books remains.", user.UserId());
        user.SetTempData("visited_matilda", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "watch" && rest.indexOf("tv") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You sit on the sagging sofa and stare at the television. A game show host with an orange tan shrieks at contestants. Advertisements for used cars and hair products blare at maximum volume. Your brain begins to soften. You can feel your thoughts getting slower, duller, more Wormwood-like. This is how they spend every evening.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits on the sofa and stares slack-jawed at the television.", user.UserId());
        user.SetTempData("watched_tv", "yes");
        return true;
    }

    if ((cmd == "break" || cmd == "smash" || cmd == "destroy") && rest.indexOf("tv") >= 0) {
        if (user.GetTempData("watched_tv") != "yes") {
            SendUserMessage(user.UserId(), "Perhaps you should watch it first to understand why it needs breaking.");
            return true;
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You focus on the television with every ounce of concentration. Something inside you pushes outward — a force you cannot name. The screen bulges, distorts, and then EXPLODES in a shower of sparks and glass! The room goes dark. The silence is deafening. For the first time in years, the Wormwood living room is quiet.</ansi>");
        SendRoomMessage(room.RoomId(), "The television suddenly EXPLODES in a fountain of sparks! " + user.GetCharacterName(true) + " stands in the shower of glass, eyes blazing.", user.UserId());

        if (user.GetMiscCharacterData("matilda_tv_explode") != "found") {
            user.SetMiscCharacterData("matilda_tv_explode", "found");
            user.GrantXP(200, "exploding the Wormwood television");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Something awakens in you. A power. (+200 XP)</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_matilda";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">The smell of cheap hair dye and microwave dinners hits you like a wall. A television blares at deafening volume. You are standing in the most tasteless living room in England, surrounded by garish wallpaper and foil dinner trays. Welcome to the Wormwood household — where books are a waste of time and cleverness is a disease.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
        
        if (!user.HasQuest(100)) {
        user.GiveQuest(100);
        }
        
    }
    return true;
}

// Best in Show - Sherri Anns Suite
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Sherri Ann's suite dissolves gracefully -- the calla lilies, Rhapsody on her cushion, the silver photograph -- all folding back into film. The Grand Library returns, its air unscented by anything specifically Starbucks-adjacent.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips out of the suite quietly and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pet" || cmd == "pat") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You approach Rhapsody on her cushion. She watches you approach with the evaluating calm of a very large dog that has always been safe and therefore has no anxiety about strangers. She allows you to pet her. Her coat is extraordinary. Sherri Ann says, from across the room: 'She likes most people.' The qualifier 'most' is gentle but present.</ansi>");
        return true;
    }

    if (cmd == "ask" && rest.indexOf("sherri") >= 0 && (rest.indexOf("husband") >= 0 || rest.indexOf("leslie") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sherri Ann's expression stays exactly where it is. 'Leslie is very supportive,' she says, in the tone of a woman who has said this many times and has made peace with what it means. She picks up her glass of still water. The conversation has moved on.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("photo") >= 0 || cmd == "look" && rest.indexOf("picture") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You study the silver-framed photograph. Sherri Ann is wearing the blazer she describes as her 'lucky one,' though she doesn't believe in luck. She believes in Rhapsody, preparation, and Christy. In the photo, she looks like someone who came second and is already thinking about next year. She was right to think about next year.</ansi>");
        return true;
    }

    return false;
}

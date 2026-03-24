// Idiocracy -- Costco Law School (2485)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The laminator hum fades and the bulk toilet paper display dissolves and you are back in the Screening Room. The Library's quiet falls over you. You think about the Costco Law School and about Frito and about the afternoon he spent becoming a lawyer and the diploma that came out warm from the laminator and whether the warmth of it felt earned to him. You decide it did. You decide that in 2505 it was the most rigorous credential available and Frito used it in court and it was not laughed out of court, which means the credential worked, which means something you do not want to examine too closely.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits the law school and returns to a place with a different accreditation process.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "get" && rest.toLowerCase().indexOf("diploma") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You fill out the form. Name, signature, Costco membership number. The Dean takes the form without looking up from his hot dog. He types something on a keyboard so old it has no F7 key. He takes a piece of cardstock. He runs it through the laminator. It comes out warm and slightly glossy and official-smelling. He stamps it: CERTIFIED LAW GRADUATE. He hands it to you. You are now a Costco Law School graduate. The degree is fully accredited by the Costco Department of Educational Solutions. You are qualified to do law. Do not look too closely at what that means in the current legal landscape. It is plenty for 2505.</ansi>");
        return true;
    }

    if (cmd == "ask" && rest.toLowerCase().indexOf("enroll") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Dean puts down his hot dog. 'IT IS TWO COURSES,' he says. 'LAW 101 AND LAW 101 ADVANCED. EACH IS TWO HOURS. LUNCH IS INCLUDED.' You ask about the difference between the two courses. 'ADVANCED HAS MORE LAW,' he says. He picks up his hot dog again. Enrollment is complete.</ansi>");
        return true;
    }

    return false;
}

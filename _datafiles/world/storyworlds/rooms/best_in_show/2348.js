// Best in Show - The Show Ring
// COMMANDS: judge, best in show (easter egg 200 XP)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The show ring dissolves. The carpet, the lights, the bleachers -- all folding back into film. The Grand Library returns and it is very quiet here, the way places get quiet after something has mattered.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back from the ring and through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "judge" || (rest.indexOf("best in show") >= 0)) {
        var key = "easter_best_in_show_judge";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Show Ring judgment");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Dr. Millbank regards you with the composed authority of a man who has seen everything in thirty years of judging and remains unflappable about all of it.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">'You are not a dog,' he observes.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You agree. You are not a dog.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">'Nevertheless,' he says, and makes a note on his clipboard. He looks at you for a long moment with the evaluating eye of a man who has judged structure, movement, and overall balance in hundreds of animals, and then he makes one more small note. 'You move well enough,' he says. This is the highest compliment he will offer a human. You accept it.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: Judged by Dr. Millbank)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Dr. Millbank glances at you from his clipboard. He has already judged you. His assessment stands.</ansi>");
        }
        return true;
    }

    if (cmd == "gait" || cmd == "walk" || cmd == "run" || cmd == "trot") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You walk across the show carpet. The audience in the bleachers -- the ones who know what they're looking at -- watch with polite incomprehension. Dr. Millbank observes your movement with professional attention. His expression does not change. This is a kind of respect.</ansi>");
        return true;
    }

    if (cmd == "stack" || cmd == "stand" || cmd == "pose") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You attempt the free-stack: feet square, head up, absolutely still. You hold it for three seconds. Four. Five. Dr. Millbank watches. The audience in the bleachers is quiet. You are not a show dog, but in this moment you are trying very hard to be the best possible version of whatever you are, and there is something in that the room recognizes.</ansi>");
        return true;
    }

    return false;
}

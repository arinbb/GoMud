// Best in Show -- Hotel Room - The Swans (2349)
// COMMANDS: talk, beatrice, argue (easter egg 200 XP)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Swan room dissolves. The cold Starbucks, the self-help book, Beatrice on the bed -- all of it folds back into film. The Grand Library settles around you, a room that does not require therapy to exist in.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " backs slowly out of the Swan room and steps through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "talk" || cmd == "beatrice" || cmd == "argue") {
        var key = "easter_bis_swans";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Swan room communication");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You attempt to communicate your needs using the vocabulary both Swans have been practicing. It comes out as: 'I feel that this situation is -- I hear you saying -- what I am trying to express is --'</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Hamilton looks at you. Meg looks at you. They look at each other. Something shifts.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">'They get it,' Meg says quietly.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">'I know,' Hamilton says.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Beatrice wags her tail once. This is the highest endorsement she offers.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: Therapy-Fluent)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You have already done the emotional labor in this room. The Swans appreciate the effort. Beatrice acknowledges your return with a brief glance.</ansi>");
        }
        return true;
    }

    if (cmd == "pet" || cmd == "pat") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach toward Beatrice. She regards you with her grey eyes. She has made a decision about you and the decision is acceptable. She allows it. Both Swans watch with the pride of parents whose child has made a new friend at the right moment.</ansi>");
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("book") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You open the book to a random page. Chapter Seven: Saying What You Mean Without Meaning What You Say. The chapter is six pages long and contains forty-three instances of the phrase 'in a healthy way.' You close the book. You feel informed.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("mirror") >= 0 || rest.indexOf("note") >= 0 || rest.indexOf("sticky") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The sticky notes: I am worthy of love and I also believe in Beatrice (neat, blue pen). Below it: We are a team. We are a team. WE ARE A TEAM (emphatic, black pen). Two people, two moments, two pens. The notes are not contradictory. They are, somehow, the same note.</ansi>");
        return true;
    }

    return false;
}

// Best in Show -- The Judges Table (2347)
var LIBRARY_ROOM = 3;
var QUEST_ID = 400;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        var step = user.GetMiscCharacterData("bis_quest_step");
        if (step == "3") {
            user.SetMiscCharacterData("bis_quest_step", "4");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest: Best in Show -- You have met the judge. The Winners Circle is somewhere in the main show ring -- search carefully.)</ansi>");
        }
    }
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The judges table dissolves. Dr. Millbank's clipboard, the breed standards, the untouched water glass -- all folding back into film. The Grand Library settles around you, its air unscented by anything that required Cambridge to understand.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps back from the judges table and through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "judge" || (cmd == "ask" && rest.indexOf("judge") >= 0) || cmd == "talk") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Dr. Millbank regards you with the composed attention of a man who has time for direct questions and not much else at the moment. 'The standard is the standard,' he says. 'Everything else is subjectivity, and we are not here for subjectivity.' He makes a small note on his clipboard. Whether the note is about you or about a dog you cannot tell. With Dr. Millbank, it is probably about a dog.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("program") >= 0 || cmd == "read" && rest.indexOf("program") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The program lists tonight's entrants: a Vizsla, a Bloodhound, a Standard Schnauzer, a Norwich Terrier, a Standard Poodle, a Shih Tzu, a Border Collie. Seven group winners. Each one was, in their group, the best. Now they compete against each other, and the categories dissolve, and there is only the standard and one man's informed eye. One of them will be enough.</ansi>");
        return true;
    }

    if (cmd == "read" && rest.indexOf("clipboard") >= 0 || cmd == "look" && rest.indexOf("clipboard") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The clipboard is angled slightly away from you. Dr. Millbank notices you looking. He does not angle it further away. He simply looks at you with the patient expression of a man who would prefer you did not. You look away. This was the correct response. He makes a note. The note is probably not about you. Probably.</ansi>");
        return true;
    }

    return false;
}

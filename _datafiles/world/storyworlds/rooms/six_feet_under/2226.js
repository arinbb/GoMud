// Six Feet Under - The Fisher Living Room
// Room 2226
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Fisher living room fades. The wall of photographs, the couch, the empty armchair -- all of it softens and goes, and the Grand Library is around you again.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " gets up from the couch and fades from the Fisher living room.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || (cmd == "look" && rest.indexOf("couch") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit on the couch. The television murmurs. The empty armchair across the room holds its shape in the corner. This is what most of grief looks like, you think -- not the dramatic kind, but this. Sitting in the living room in the evening, the television on too low to make out, the house around you full of people who are all handling it differently and not really talking about how they are handling it.</ansi>");
        return true;
    }

    if (cmd == "sit" && rest.indexOf("chair") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You move toward Nathaniel Sr's armchair and then you stop. It would feel wrong. It is not yours to sit in, and it is not really empty -- it is full of absence, which is its own kind of presence. You leave it. Some things should stay where they are for as long as they need to.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("chair") >= 0 || rest.indexOf("armchair") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Nathaniel Sr's armchair. The leather is cracked at the armrests from years of his hands gripping it, watching television, reading the paper, holding court. Nobody has sat in it since he died. Nobody has said not to. The family just -- doesn't. The chair absorbs this attention and holds it, patient and present in its corner, doing the one thing it can still do for him.</ansi>");
        return true;
    }

    if (cmd == "watch" || cmd == "tv") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The television is on. A sitcom. The laugh track fires and the family doesn't react, not because it is not funny, but because the television is just sound right now, just a way for the house to not be completely quiet. You watch for a moment. Then you are watching the family not watching it, which is more interesting.</ansi>");
        return true;
    }

    return false;
}
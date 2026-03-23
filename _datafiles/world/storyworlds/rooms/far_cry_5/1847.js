// Far Cry 5 - The Seed Ranch
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">John Seed's smile follows you for a moment in the air, like the last frame of a film. Then the Grand Library resolves around you, warm and still. The sound of the sharpening knife fades.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the Seed Ranch, leaving behind only the faint sound of a knife being sharpened.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" && rest.indexOf("chair") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You sit in the confession chair. The leather restraints are within reach of your wrists. The camera light is red. John Seed would say: 'What is your sin?' He would wait. He is very patient. The chair is comfortable, which is the worst thing about it. You stand up quickly.</ansi>");
        return true;
    }

    if (cmd == "read" && rest.indexOf("book") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">John Seed's copy of the Book of Joseph, annotated in his cramped legal handwriting. The annotations are not devotional — they are analytical. He is reading Joseph's scripture the way a lawyer reads a contract: looking for utility, for leverage, for the clauses that serve his specific needs. He has found many. The notes in the margins are more disturbing than the text.</ansi>");
        return true;
    }

    return false;
}

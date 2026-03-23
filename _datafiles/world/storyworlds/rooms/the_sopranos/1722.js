
// The Sopranos - Tony's Den
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The paneled walls dissolve into strips of film. The Scotch glass, the Cohibas, the leather chair — each one becomes a frame, then nothing. The Grand Library returns.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flickers out of the den like a channel being changed.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || cmd == "sit" && rest.indexOf("recliner") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You lower yourself into the leather recliner. It is extremely comfortable. It is shaped to fit one specific body and that body is not yours. You sit in it anyway. After a moment you understand why Tony sits here as much as he does. From this chair the television fills your whole field of vision and you do not have to think about anything that is not directly in front of you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits in Tony's recliner. Bold move.", user.UserId());
        return true;
    }

    if (cmd == "read" && rest.indexOf("script") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You flip through the Cleaver script. It is a mob movie, obviously. The protagonist is called 'Tony' but that might be a coincidence. There are extensive notes in red pen. Most of them say things like 'this is wrong' and 'nobody talks like this' and 'I don't DO this.' One note on page forty-seven just says 'NO.' It is underlined three times.</ansi>");
        return true;
    }

    if (cmd == "light" || (cmd == "smoke" && rest.indexOf("cigar") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You light one of Tony's Cohibas. The smoke is dense and dark and slightly sweet. It fills the room with the smell of power and leisure, which is what Cuban cigars are designed to communicate. You feel, briefly, like a man with no problems. The feeling lasts until the ash falls.</ansi>");
        return true;
    }

    return false;
}

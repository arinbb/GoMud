// Idiocracy -- Carls Jr (2477)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The star logo fades. The children in their Carls Jr uniforms dissolve into projection white and then you are back in the Screening Room and there are no children here with welded pins and the books on the shelves have not signed over any rights to anyone. You breathe. You think about the word 'family' and what the Carls Jr Corporation has done with it and you sit with that thought for a while because it deserves to be sat with.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits Carls Jr before any further rights can be transferred.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("disclaimer") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You read the Child Welfare Agreement in full. It takes an hour. By section forty-seven you are crying. By section sixty-two you have stopped crying because you have run out of the resources to do it. Section eighty-nine, paragraph four begins: 'The Child, herein referred to as the Asset, shall receive daily nutritional support in the form of the Kids Meal product, which Carls Jr certifies as food.' Section one hundred and two is titled TERMS OF RELEASE and is entirely blank. You fold the document and put it back. You do not feel better. You were not supposed to.</ansi>");
        return true;
    }

    return false;
}

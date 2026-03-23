
// Seinfeld - J. Peterman Office
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Peterman office dissolves. The saddlebag, the catalog copy, the mahogany desk -- all of it fades. The Grand Library receives you back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits the Peterman office, having either just heard a story or narrowly avoided one.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && rest.indexOf("catalog") >= 0) {
        var entries = [
            "The Urban Sombrero. You have been to the city. You have also been to the places where the city is not. This hat is for both. It says: I am a man of the world, and the world has given me a hat.",
            "The Himalayan Walking Stick. It was carved by a man named Tensing who lives above the clouds and below the wind. He made it from wood that grew for eighty years and was harvested by moonlight. When you carry it, you carry Tensing.",
            "The Moroccan Peasant Blouse. It is not a blouse. It is a question that the wearer asks of every room they enter: what if comfort were a form of courage?",
            "The Spanish Riding Coat. The horse for which this coat was designed no longer exists. You still need the coat."
        ];
        var pick = Math.floor(Math.random() * entries.length);
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You read from the catalog: \"" + entries[pick] + "\"</ansi>");
        return true;
    }

    if (cmd == "dance" || (cmd == "look" && rest.indexOf("elaine") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Elaine dances. It is not a good dance. It is a dance that has become, over the years, the most famous bad dance in the history of television. She kicks. She throws her hands. She is completely committed to it. You cannot look away.</ansi>");
        return true;
    }

    return false;
}

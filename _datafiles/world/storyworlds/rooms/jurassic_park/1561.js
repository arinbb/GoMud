
// Jurassic Park - The Dining Room
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The ice cream melts into the china and the china into white light and the dining room recedes like a dream of a very expensive meal. The Grand Library is warm around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades like a dissolving meal into the air of the dining room.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "eat" && (rest.indexOf("ice") >= 0 || rest.indexOf("cream") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You try a spoonful of Hammond's ice cream. It's extraordinary — real vanilla, fresh cream, a sweetness that tastes like someone's memory of childhood. It is the single best thing you have eaten on this island. Hammond sits across the table from you and his face does something complicated. \"Spared no expense,\" he says quietly. He means it as a justification and also as a comfort and also, now, as a kind of apology. The ice cream is perfect.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits at Hammond's table and eats ice cream.", user.UserId());
        return true;
    }

    if (cmd == "read" && (rest.indexOf("menu") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The leather menu is embossed with the Jurassic Park amber logo. Inside: a full fine dining selection. Fresh yellowfin tuna. Braised short rib. A cheese course. And on the second page, the children's menu. Dinosaur-shaped chicken nuggets. A Brontosaurus burger. Pterodactyl cookies with a dipping sauce. You are somehow more moved by the children's menu than by anything else in this building.</ansi>");
        return true;
    }

    if (cmd == "say" && (rest.indexOf("spared") >= 0 || rest.indexOf("expense") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">\"Spared no expense,\" you say. Hammond sets down his spoon. \"No,\" he says quietly. \"I didn't.\" He picks up the spoon again. He keeps eating his ice cream. You get the sense this is how he is handling everything. One spoonful at a time. It is not a bad strategy.</ansi>");
        return true;
    }

    return false;
}

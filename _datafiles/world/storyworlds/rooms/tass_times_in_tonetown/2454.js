// Tass Times in Tonetown -- Ennios Bar (2454)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The amber light of Ennio's dims and the neon cocktails go dark. The bar dissolves and you are back in the Arcade, carrying the specific knowledge that Ennio's has the best drinks in any dimension you have visited.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades from the barstool at Ennio's like a customer who has paid their tab and moved on.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" || (cmd == "order" && rest.toLowerCase().indexOf("drink") >= 0)) {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">Ennio sets a glass on the rail in front of you without being asked. The liquid is a deep neon magenta with a garnish you cannot identify and do not need to. You drink. The taste is the color magenta translated into a sensation. It is cold and electric and exactly right. You feel, briefly, extremely tass.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " accepts a drink from Ennio and takes a long sip with the expression of someone experiencing the correct thing.", user.UserId());
        return true;
    }

    if (cmd == "sit") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">You take a stool at the bar. Ennio glances at you -- not evaluating the way downtown citizens evaluate, but the way a bartender clocks an arrival: what kind of night is this, what does this person need, what do I know that might help. His assessment is comprehensive and takes under a second. He sets a glass down and begins to fill it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes a seat at Ennio's bar with the ease of someone who knows they are in the right place.", user.UserId());
        return true;
    }

    return false;
}

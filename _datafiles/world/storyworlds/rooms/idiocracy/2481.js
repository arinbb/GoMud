// Idiocracy -- Brawndo HQ (2481)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Brawndo-green lighting fades and the fountain choreography dissolves and you are back in the Screening Room. You feel cleaner without the corporate warmth on you. Not much cleaner. But some. You think about a world where one company owns everything and markets it as care and you think that the insidious part is not that they are lying exactly -- the insidious part is that they believe their own branding. That is always the insidious part.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits Brawndo HQ and returns to an institution that is not publicly traded.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" || (cmd == "use" && rest.toLowerCase().indexOf("brawndo") >= 0) || (cmd == "taste" && rest.toLowerCase().indexOf("fountain") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You cup your hands under the Brawndo fountain. The liquid is yellow-green and cold and smells of citrus and something you cannot name but suspect is proprietary. You drink. It has electrolytes. You can taste the electrolytes. You do not know what electrolytes are. You are pretty sure they are not what plants crave in any meaningful agricultural sense. But the taste is -- it is not bad. It is very specifically designed to not be bad. Decades of market research went into not being bad. You drink another handful. You have become part of the data.</ansi>");
        return true;
    }

    return false;
}

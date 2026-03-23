// Best in Show - Taft Hotel Bar
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The bar fades to celluloid. The handlers and their dogs and their complicated feelings about tomorrow dissolve into the familiar warmth of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " drains their glass, sets it on the mahogany, and steps backward through the film.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "drink" || cmd == "order") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The bartender slides a glass your direction without comment. It is what you needed. Tonight, before the show, in a hotel bar in Philadelphia, surrounded by anxious handlers and their incredibly well-groomed dogs, it is exactly what you needed.</ansi>");
        return true;
    }

    if (cmd == "watch" || (cmd == "look" && rest.indexOf("tv") >= 0) || (cmd == "look" && rest.indexOf("television") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The field reporter outside the venue is explaining, to the camera and to nobody in particular, that the Mayflower Kennel Club Dog Show is a 'prestigious event' in a tone that suggests he had to look up what 'prestigious' meant in this context. The handlers at the bar regard him with the quiet contempt of people being misunderstood on local television.</ansi>");
        return true;
    }

    return false;
}

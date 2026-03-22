
// The Shining - The Colorado Lounge (typewriter easter egg)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The pages swirl up from the floor in a cyclone of typed words, each one reading the same terrible sentence. They spin faster and faster until they become frames of film, then static, then the warm amber light of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is engulfed by a whirlwind of typed pages and vanishes from the Overlook.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && (rest.indexOf("page") >= 0 || rest.indexOf("typewriter") >= 0)) {
        var easterKey = "shining_allwork";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(200, "discovering Jack's manuscript");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You pick up a page and read it. Then another. Then another. Every single page says the same thing, arranged in different formats — as prose, as poetry, as a screenplay, as a letter, centered, justified, stacked:</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">    All work and no play makes Jack a dull boy.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">    All work and no play makes Jack a dull boy.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">         All work and no play makes Jack a dull boy.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">  All work and no play makes Jack a dull boy.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">              All work and no play</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">              makes Jack a dull boy.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">Hundreds of pages. Thousands. All the same. The horror of it settles over you like snow.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+200 XP — You discovered the manuscript.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You already know what the pages say. Every one of them. All work and no play makes Jack a dull boy. You put the page down with trembling hands.</ansi>");
        }
        return true;
    }

    return false;
}

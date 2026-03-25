
// Seinfeld - Jerrys Apartment (entry room)
var LIBRARY_ROOM = 1;
var QUEST_ID = 280;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The apartment dissolves back into celluloid. The couch, the cereal, the Superman magnet -- all of it folds into a film canister and the Grand Library materializes around you, warm and quiet and full of books.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " gets up from the couch, says something observational about leaving, and steps through the screen back to the Grand Library.", user.UserId());
        user.SetTempData("visited_seinfeld", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && (rest.indexOf("machine") >= 0 || rest.indexOf("answering") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The answering machine blinks. You press play.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">BEEP. 'Jerry, it's George. Listen, I had an idea. What if we did a show -- just two guys talking? That's it. That's the show. Call me back. Actually, call me back soon. I'm at my parents. There's a situation.'  BEEP.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    var visitedKey = "visited_seinfeld";
    if (user.GetTempData(visitedKey) != "yes") {
        user.SetTempData(visitedKey, "yes");
        if (!user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
        }
        
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You thread the film reel. The NBC chime plays somewhere distant, three notes descending with the casual confidence of something that has always been true. Then: an apartment on the Upper West Side of Manhattan. A couch. A kitchen. A man in jeans and white sneakers doing a bit about nothing in particular, testing it against the air. The image sharpens until you can see the Superman magnet on the refrigerator. You step forward and the apartment is around you and the laugh track is somewhere just out of earshot, ready.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    }
    return true;
}

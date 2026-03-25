
// Seinfeld - The Soup Stand
var LIBRARY_ROOM = 1;
var QUEST_ID = 280;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The soup stand dissolves. No soup for you -- or rather, no soup stand. The Grand Library materializes around you and at least there is no line.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the soup stand and is not replaced.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "order" && rest.indexOf("soup") >= 0) {
        var rudeness = ["rudely", "badly", "wrong", "incorrectly", "please", "excuse me", "hey", "wait", "hold on", "what", "why", "how"];
        var wasRude = false;
        for (var i = 0; i < rudeness.length; i++) {
            if (rest.indexOf(rudeness[i]) >= 0) {
                wasRude = true;
                break;
            }
        }
        if (wasRude) {
            if (user.GetMiscCharacterData("seinfeld_soup_nazi") != "done") {
                user.SetMiscCharacterData("seinfeld_soup_nazi", "done");
                user.GrantXP(250, "No soup for you");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">Al Yeganeh fixes you with a look that has ended conversations faster and more permanently than you would have believed possible. He straightens. He points.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"NO SOUP FOR YOU!\"</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">You are somehow outside. You don't remember moving. The door is closed. The line has already filled the gap where you were. The soup is inside and you are outside and this is simply how it is.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+250 XP: No soup for you!)</ansi>");
                SendRoomMessage(room.RoomId(), "<ansi fg=\"yellow\">\"NO SOUP FOR YOU!\" Al Yeganeh points and " + user.GetCharacterName(true) + " is suddenly outside.</ansi>", user.UserId());
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">You have done this before. You do it again. The result is the same. \"NO SOUP FOR YOU.\" You are outside. The soup remains inside. The rules have not changed.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"NO SOUP FOR YOU!\"</ansi>");
            }
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step up. You have exact change. You say what you want clearly and without editorializing. A cup slides across the counter. The soup is extraordinary. You take it and move to the right.</ansi>");
            if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("seinfeld_q3")) {
                user.SetMiscCharacterData("seinfeld_q3", "done");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: Encountered the Soup Nazi.)</ansi>");
            }
        }
        return true;
    }

    if (cmd == "order" || cmd == "buy") {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You must say what you want. Specifically. 'order soup' is the command, and you should choose your words carefully when you do.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("soup") >= 0) {
        var soups = ["mulligatawny", "lobster bisque", "turkey chili", "french onion", "gazpacho", "corn chowder", "minestrone"];
        var pick = Math.floor(Math.random() * soups.length);
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Today's special is the " + soups[pick] + ". The smell alone is worth the compliance with the rules. The soup is that good. The soup has always been that good.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You are in the soup stand. The rules are posted. Move quickly. Have exact change. Do not make conversation. Do not ask about the bread unless you want the bread, and if you want the bread, ask for it correctly.</ansi>");
    return true;
}

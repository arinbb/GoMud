
// Seinfeld - Monks Cafe
var LIBRARY_ROOM = 1;
var QUEST_ID = 280;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The diner dissolves. The coffee, the vinyl booth, the laminated menu -- all of it fades into celluloid. The Grand Library is around you and the coffee smell is just a memory.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears from the diner mid-sentence, leaving a half-finished cup of coffee.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "order" || cmd == "eat" || cmd == "drink" || (cmd == "look" && rest.indexOf("coffee") >= 0)) {
        if (user.GetMiscCharacterData("seinfeld_monks_coffee") != "done") {
            user.SetMiscCharacterData("seinfeld_monks_coffee", "done");
            user.GrantXP(100, "Having coffee at Monks");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The waitress brings coffee without being asked. It arrives exactly as hot as it needs to be. You sit in the booth and hold the mug and feel the weight of every conversation that has ever happened here. Nothing is resolved. Everything is discussed. The coffee is perfect.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+100 XP: Having coffee at Monks)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The coffee comes again, hot and reliable. The waitress knows the order. She has always known the order. You sit and drink it and talk about nothing and it is enough.</ansi>");
        }
        if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("seinfeld_q2")) {
            user.SetMiscCharacterData("seinfeld_q2", "done");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: Had coffee at Monks Cafe.)</ansi>");
        }
        return true;
    }

    if (cmd == "look" && rest.indexOf("salad") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Big Salad. Not just a salad. A Big Salad. The distinction is important and should not have to be explained but will apparently always need to be explained.</ansi>");
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) && !user.GetMiscCharacterData("seinfeld_q2_visited")) {
        user.SetMiscCharacterData("seinfeld_q2_visited", "yes");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(You have arrived at Monks Cafe. Order something.)</ansi>");
    }
    return true;
}

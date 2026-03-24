// ZONE COMMANDS: name nuts (2344), say winky (2349 easter egg), announce (2348), stand still (2343), busy bee (2341 vendor area), return (all rooms)
// Best in Show -- Mayflower Kennel Club Entrance (entry room 2340)
var LIBRARY_ROOM = 3;
var QUEST_ID = 400;

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID) == false) {
        user.GiveQuest(QUEST_ID);
    }

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You thread the film reel. The image sharpens slowly: a convention center entrance in Philadelphia, November, fluorescent-lit, smelling of conditioning spray and dog treats. A Weimaraner near the registration desk stares at the volunteer with the focused patience of an apex predator told to sit and stay. A Bloodhound lumbers through the door with solemn purpose. Somewhere behind the banners a PA system crackles. The screen opens and you step forward and the smell is very specific and very real and you are in it now, in the middle of people who care enormously about dogs.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    return false;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The entrance dissolves. The banners, the schedule board, the dogs on leads -- all folding back into celluloid. The Grand Library settles in around you, quiet and dogless.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips past the registration table and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "register" || (cmd == "check" && rest.indexOf("in") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The registration volunteer looks up. 'Name and breed?' You realize you do not have a dog. She waits. 'Observer,' you say. She makes a note. She has seen this before. 'Enjoy the show,' she says, and means it.</ansi>");
        return true;
    }

    if (cmd == "read" && rest.indexOf("board") >= 0 || cmd == "look" && rest.indexOf("schedule") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The schedule: Sporting 9 AM, Hound 11 AM, Working 1 PM, Terrier 2 PM, Non-Sporting 3 PM, Toy 4 PM, Herding 5 PM. Then, in larger type: BEST IN SHOW, 7 PM, Main Ring. The gold star beside it seems entirely sincere.</ansi>");
        return true;
    }

    if (cmd == "pet" || cmd == "pat") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach down to pat a passing dog. It acknowledges you briefly, professionally, and moves on. It is working. You respect this.</ansi>");
        return true;
    }

    return false;
}

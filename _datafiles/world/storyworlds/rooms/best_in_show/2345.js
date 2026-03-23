// Best in Show - Mayflower Kennel Club Entrance
var LIBRARY_ROOM = 3;
var QUEST_ID = 400;

function onEnter(user, room) {
    // Quest step: arrive at the venue
    if (user.HasQuest(QUEST_ID)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest: Best in Show -- You have arrived at the Mayflower Kennel Club. Explore the grooming area, the show ring, and meet the competitors.)</ansi>");
    }
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Mayflower entrance dissolves. The banners, the schedule board, the dogs on leads -- all of it folding back into the film canister. The Grand Library settles in around you, quiet and dogless.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips past the registration table and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && rest.indexOf("board") >= 0 || cmd == "look" && rest.indexOf("schedule") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The schedule: Sporting Group 9 AM, Hound Group 11 AM, Working Group 1 PM, Terrier Group 2 PM, Non-Sporting Group 3 PM, Toy Group 4 PM, Herding Group 5 PM -- and then, in a typeface slightly larger than the rest: BEST IN SHOW, 7 PM, Main Ring. The gold star beside it seems entirely sincere.</ansi>");
        return true;
    }

    if (cmd == "register" || (cmd == "check" && rest.indexOf("in") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The registration volunteer looks up. 'Name and breed?' You realize you do not have a dog. She waits. 'Observer,' you say. She makes a note. She has seen this before. 'Enjoy the show,' she says, and means it.</ansi>");
        return true;
    }

    return false;
}

// ZONE COMMANDS: name nuts (2344), list nuts (2344), judge (2348), announce (2349), argue (2342), busy bee (2350)
// Best in Show - Taft Hotel Lobby (entry room)
var LIBRARY_ROOM = 3;
var QUEST_ID = 400;

function onEnter(user, room) {

    if (!user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You thread the film reel. The image sharpens slowly: a hotel lobby, Philadelphia, the evening before a dog show. Every chair has a dog in it. A Weimaraner is staring at the front desk clerk with the fixed intensity of an apex predator who has been told to sit and stay. A Standard Poodle in a travel crate has more composure than anyone else in the room. Somewhere upstairs, a couple is arguing about something their therapist said. You step forward and the lobby closes around you and you are here, in this, in the middle of people who care enormously about dogs.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The hotel lobby dissolves back into celluloid. The dogs, the handlers, the weary front desk clerk -- all of it folds into a canister and the Grand Library materializes around you, warm and quiet and blessedly free of competitive dog grooming.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " looks around the lobby one last time, pats an imaginary dog, and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pet" || cmd == "pat") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach down and pat a passing Norwich Terrier. It wags its tail with full sincerity. It is unclear what this dog's owner would think about strangers touching the merchandise, but the dog has no reservations at all.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("dale") >= 0 || rest.indexOf("clerk") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Dale has the look of a man who went into hotel management for the stability. He finds the Mayflower weekend, in his words, 'not what he expected when he took the job, which was also not what he expected, but less so now.'</ansi>");
        return true;
    }

    return false;
}

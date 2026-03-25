
// On the Road - Des Moines Bus Station
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fluorescent lights dim slowly, their buzzing resolving into the quiet of the Library. The hard plastic bench dissolves. The janitor and his mop dissolve. The clock stops at 3:15 and fades into white. The Des Moines bus station returns to the page where it lives, and you are back in the Grand Library, the 3am loneliness still sitting with you, which is as it should be.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades into the fluorescent light and vanishes back into the pages of the novel.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "wait" || cmd == "sit") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You wait. You sit on the hard bench and wait. The clock on the wall says 3:15 and then 3:16 and the fluorescent lights buzz their single endless note and the janitor makes his rounds and someone is sleeping across the waiting room with their head on their bag. Outside, the buses come and go in the dark and you are the exact center of the continent and it is 3 in the morning.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">This is the moment in the book where Sal Paradise has gone so far from home that home does not seem real anymore, and the road does not seem real, and he himself seems slightly unreal, a ghost in a bus station in Iowa, sixteen dollars in his pocket, nobody expecting him anywhere. The loneliness is total and clean. It is the loneliness that lives on the other side of joy, the valley between the peaks of the road.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You wait. The clock moves. You are here and it is real. That is enough. It is more than enough. It is the whole book in a moment.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits on the bench and waits, very still, at 3 in the morning.", user.UserId());

        if (user.GetMiscCharacterData("road_3am_wait") != "found") {
            user.SetMiscCharacterData("road_3am_wait", "found");
            user.GrantXP(200, "waiting out the 3am loneliness in the Des Moines bus station");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">[ You earned 200 XP for sitting with the 3am loneliness. Some things can only be learned by waiting. ]</ansi>");
        }

        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }
    return true;
}

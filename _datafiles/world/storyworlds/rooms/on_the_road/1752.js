
// On the Road - New Orleans, Old Bull Lee's House
var LIBRARY_ROOM = 1;
var QUEST_ID = 170;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Old Bull Lee finishes his sentence about consciousness and the sentence keeps going through the wall of the novel and out into the white space beyond. His garden dissolves into a chapter heading. The pistol shots fade into periods at the end of sentences. New Orleans folds back into the pages and you are back in the Grand Library, the strange knowledge of having been there sitting in you like good whiskey.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the New Orleans heat and vanishes back into the pages of the novel.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "ask" || cmd == "talk") {
        var target = rest.toLowerCase();
        if (target.indexOf("lee") >= 0 || target.indexOf("bull") >= 0 || target.indexOf("burroughs") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Old Bull Lee regards you for a long moment. He has the stillness of someone who has been very far inside himself and come back with a detailed report.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">\"The road,\" he says. \"Everyone talks about the road. Dean talks about the road, Sal writes about the road. You know what the road is? It is the American way of not thinking about where you are. Motion as philosophy. Speed as solution. Go fast enough and you cannot feel anything. Go far enough and you cannot be found.\"</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">He takes a drink. \"I understand it. I have sympathy for it. I merely observe that the thing you are running from is also moving, and it is faster than any Hudson.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " listens to Old Bull Lee, expression quiet and considering.", user.UserId());
            return true;
        }
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(QUEST_ID)) {
        user.GiveQuest(QUEST_ID);
    }
    return true;
}

// The Sandlot -- The Treehouse (2430)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The oak tree and the treehouse plans and the telescope fade. You are back in the Screening Room, the projector still warm.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " descends the ladder and vanishes from the oak tree.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look" && rest.toLowerCase().indexOf("telescope") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You put your eye to the telescope. The field of view swings south across rooftops and trees to settle -- with Squints' careful adjustment -- on the public pool. Wendy Peffercorn is in her chair. She adjusts her sunglasses. She picks up her paperback, then puts it down. She surveys the pool. From this distance, through this lens, she looks like the entire point of summer. You understand Squints Palledorous completely now. This changes everything about how you see the plans on the wall.</ansi>");
        return true;
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("plans") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The plans detail an incredible variety of retrieval schemes. There is a fishing rod with a ball retriever on the end. There is a pulley system of impractical complexity. There is a drawing of a dog harness that was abandoned after someone had to explain to their dad why they needed thirty feet of rope. The newest plan is the most ambitious -- and, below the diagram, in careful letters: BENNY'S PLAN. No details. Just those two words. That is confidence.</ansi>");
        return true;
    }

    return false;
}

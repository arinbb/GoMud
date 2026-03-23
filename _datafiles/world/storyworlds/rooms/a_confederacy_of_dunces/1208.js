
// Levy Pants Office - return handler + read memo easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The fluorescent lights flicker one last time, the filing cabinets dissolve into paragraphs, and the Levy Pants office folds back into the novel like a memo filed in the wrong drawer. You are in the Grand Library again.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " is filed away into the pages of the story and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read") {
        var target = rest.toLowerCase();
        if (target.indexOf("memo") >= 0) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You read the memo pinned to the wall:</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">WORKERS OF LEVY PANTS!</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"white\">The CRUSADE FOR MOORISH DIGNITY calls upon you! Too long have the forces of commercial vulgarity and spiritual bankruptcy ground you beneath their heels. Too long have you labored in this factory of philistinism, producing garments that offend both theology and geometry. I, Ignatius J. Reilly, your spiritual and intellectual leader, summon you to RISE! Throw off the chains of your wage slavery! Demand dignity! Demand Moorish dignity specifically! The details of what this means will be supplied at a later date.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">The memo is simultaneously a brilliant parody of radical manifestos and a completely sincere expression of Ignatius's belief in his own genius. It inspired a brief uprising that ended in a small fire and several terminations.</ansi>");

            if (user.GetMiscCharacterData("dunces_memo_read") != "found") {
                user.SetMiscCharacterData("dunces_memo_read", "found");
                user.GrantXP(200, "reading the Crusade for Moorish Dignity memo");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">[ You earned 200 XP for reading the manifesto of the Crusade for Moorish Dignity. The revolution will not be organized by Ignatius J. Reilly. ]</ansi>");
            }

            return true;
        }
    }

    return false;
}

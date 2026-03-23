// Best in Show - Vendor Hall
// COMMANDS: buy bee, busy bee (easter egg 200 XP)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The vendor hall dissolves. The conditioning sprays, the portrait artist, the table of toys -- all folding back into film. The Grand Library is around you again, and somewhere in your memory a rubber bumblebee makes its sound.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sets down a Busy Bee and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "buy" && rest.indexOf("bee") >= 0 || (cmd == "busy" && rest.indexOf("bee") >= 0) || (cmd == "squeeze" && rest.indexOf("bee") >= 0) || cmd == "busybee") {
        var key = "easter_best_in_show_busybee";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Busy Bee purchase");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up a Busy Bee from the table. It weighs almost nothing. You squeeze it.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">It makes a sound between a honk and a wheeze.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">From somewhere in the building -- from the grooming area, specifically, from the part of the grooming area where a Weimaraner named Beatrice is being prepared -- there is a sudden commotion. It lasts about thirty seconds. Then it stops.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The vendor looks at you. 'Two dollars,' he says. You pay two dollars. He hands you a receipt. The receipt says 'Busy Bee x1. $2.00.' This document is more historically important than it appears.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: The Bee Heard Round the Grooming Area)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You squeeze another Busy Bee. The sound carries. Somewhere, Beatrice perks up.</ansi>");
        }
        return true;
    }

    if (cmd == "buy" || cmd == "shop" || cmd == "browse") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You browse the vendor hall. There are conditioning sprays here that cost more per ounce than perfume and are, according to the handlers using them, worth every cent. There are show leads in materials you cannot identify. There is a portrait artist who would paint your dog from a photograph in a style she calls 'impressionistic realism' for fifty dollars. You do not have a dog. She offers to paint you. You decline politely.</ansi>");
        return true;
    }

    if (cmd == "look" && rest.indexOf("portrait") >= 0 || cmd == "look" && rest.indexOf("painting") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The impressionistic realism portraits are technically accomplished and emotionally unsettling. The dogs in them appear to exist slightly out of phase with reality, their forms suggested more than stated. They look as if they are remembering being dogs rather than currently being dogs. The handler who commissioned one is looking at it with an expression you cannot read.</ansi>");
        return true;
    }

    return false;
}

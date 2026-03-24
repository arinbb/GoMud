// Best in Show -- The Vendors Hall (2351)
// COMMANDS: buy bee, busy bee, squeeze bee (easter egg 200 XP)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The vendor hall dissolves. The conditioning sprays, the portrait artist, the Busy Bee table -- all folding back into film. The Grand Library is around you, and somewhere in your memory a rubber bumblebee makes its sound.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sets down a Busy Bee and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "buy" && rest.indexOf("bee") >= 0) || (cmd == "busy" && rest.indexOf("bee") >= 0) || (cmd == "squeeze" && rest.indexOf("bee") >= 0) || cmd == "busybee") {
        var key = "easter_bis_busybee";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Busy Bee incident");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pick up a Busy Bee from the table. It weighs almost nothing. You squeeze it.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">It makes a sound between a honk and a wheeze.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">From somewhere in the building -- from the direction of the hotel lobby, specifically -- there is a sudden commotion. It lasts about thirty seconds. Then it stops. Several people in the vendor hall look up. The vendor looks at you. 'Two dollars,' he says. You pay two dollars. He gives you a receipt. The receipt says 'Busy Bee x1. $2.00.' This document is more historically significant than it appears.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: The Bee Heard Through the Lobby)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You squeeze another Busy Bee. The sound carries. Somewhere, Beatrice perks up. This never gets old.</ansi>");
        }
        return true;
    }

    if (cmd == "buy" || cmd == "shop" || cmd == "browse") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You browse the vendor hall. There are conditioning sprays here that cost more per ounce than perfume and are, according to the handlers using them, worth every cent. There is a portrait artist who will paint your dog from a photograph in a style she describes as impressionistic realism for fifty dollars. You do not have a dog. She offers to paint you. You decline politely. She makes a note in her sketchbook anyway. This is unnerving.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("portrait") >= 0 || rest.indexOf("painting") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The impressionistic realism portraits are technically accomplished and emotionally unsettling. The dogs in them appear to exist slightly out of phase with reality, their forms suggested more than stated. They look like they are remembering being dogs rather than currently being dogs. The handler who commissioned one is looking at it with an expression you cannot fully read.</ansi>");
        return true;
    }

    return false;
}

// Best in Show -- The Flecks Station Wagon (2346)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The station wagon dissolves. The crate, the catalog, the two left shoes under the seat -- all folding back into film. The Grand Library returns, and you carry with you the image of a Norwich Terrier watching a parking lot with complete and total patience.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " watches Winky watch the parking lot, then steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pet" || cmd == "pat") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach toward Winky's crate. He leans forward and sniffs your hand with complete professionalism. He makes a decision. The decision is positive. His tail moves twice. His ears stay up. He is on duty, but he has made an exception for you.</ansi>");
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("catalog") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You look at the fly-fishing catalog. The circled items: an Elk Hair Caddis (good general-purpose dry fly), a Parachute Adams (classic), and a Blue-Winged Olive nymph (for when the Adams is not working). Someone -- Gerry, obviously -- has written a small note in the margin: 'better for Beaver Ck? spring hatch.' This question has not yet been resolved. It will probably be resolved during a long drive home, and the answer will be correct.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("shoes") >= 0 || rest.indexOf("feet") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Two left shoes under the passenger seat. Both of them for the left foot. Cookie Fleck has two left feet, which is a real medical thing, and she walks just fine in shoes that are correctly made for the shape of her actual feet. Gerry found a catalog from a place in Vermont. He drove there to pick them up. He has never mentioned this as exceptional. It was exceptional.</ansi>");
        return true;
    }

    if (cmd == "wave" && rest.indexOf("winky") >= 0 || cmd == "talk" && rest.indexOf("winky") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You wave at Winky through the crate door. He tilts his head fifteen degrees. His ears tilt with him. This is the most concentrated attention you have ever received from another living creature. He has decided you are fine. Being decided fine by Winky is not nothing.</ansi>");
        return true;
    }

    return false;
}

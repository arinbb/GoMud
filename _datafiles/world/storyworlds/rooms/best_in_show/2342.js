// Best in Show -- The Parking Lot (2342)
// COMMANDS: look wagon, two left feet (easter egg 200 XP)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The parking lot dissolves. The amber lights, the cars, the dogs in their crates -- all folding back into celluloid. The Grand Library settles around you, warm and permanent, and you carry with you the image of a Norwich Terrier watching a parking lot with infinite patience.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " watches the last headlights sweep across the lot and steps back through the screen to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "look" && rest.indexOf("wagon") >= 0) || cmd == "two" || (cmd == "look" && rest.indexOf("fleck") >= 0)) {
        var key = "easter_bis_wagon";
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "Fleck station wagon");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You walk over to the Flecks station wagon. Winky the Norwich Terrier tracks your approach with both ears at full deployment. Through the glass you can see the back seat: a show lead hung on the headrest, a thermos with a sticker of a fish on it, a copy of a fly-fishing catalog with three pages turned down, and two shoes on the floor that are, now that you look at them, both left shoes. Both of them. For the left foot. There is something about this car that is entirely, irreducibly fine.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+200 XP: Two Left Feet)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Winky is still watching from the crate. He has been watching this whole time. He is extremely good at watching. His ears are at full alert. He will wait as long as it takes.</ansi>");
        }
        return true;
    }

    if (cmd == "wave" && rest.indexOf("winky") >= 0 || cmd == "pet" || cmd == "knock") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You wave at Winky through the glass. He tilts his head exactly seventeen degrees to one side. His ears tilt with him. This is the most interested another creature has ever looked at you.</ansi>");
        return true;
    }

    return false;
}

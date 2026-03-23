
// Billy Madison - Madison Mansion (entry room)
// ZONE COMMANDS: return (all rooms), talk penguin/ernie (2361), eat paste/glue (2363),
//   dodgeball (2365), lunch lady/sloppy joe (2370), answer/industrial revolution (2371),
//   odoyle rules (2372)
var LIBRARY_ROOM = 1;

function onEnter(user, room) {

    if (!user.HasQuest(410)) {
        user.GiveQuest(410);
    }

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The film canister clatters open and a reel threads itself into the projector with the enthusiasm of a movie that knows exactly what it is. The screen fills with a New Jersey estate in the middle of a perfect afternoon -- too big, too clean, too expensive, and somehow completely lovable. Billy Madison materializes in the foyer holding a juice box and a half-eaten candy bar, squinting at you with the guileless suspicion of a golden retriever encountering a stranger. 'Hey,' he says. 'You're not supposed to be here. Actually, wait, that's fine. Hey!' The mansion wraps around you. The school is somewhere out there. The penguin is somewhere around here too, probably. Welcome to the world of a man who is trying very hard to learn things he should have learned fifteen years ago. Good for him. Sincerely.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Type 'return' at any time to go back to the Grand Library.)</ansi>");
    return false;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The mansion shimmers and fades like a movie you've seen a hundred times -- the marble floor, the chandelier, the juice box smell. Billy waves from the foyer. 'You can do it!' he shouts, with total conviction. The Grand Library reassembles itself around you out of warm light and old paper.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shimmers and vanishes from the Madison Mansion like someone pressed rewind.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

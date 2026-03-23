// The Sandlot -- The Vacant Lot (2432)
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The weeds and goldenrod fade into the warm light of the Screening Room. The apple tree is the last thing to go.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " disappears into the tall goldenrod and doesn't come back.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "climb" && rest.toLowerCase().indexOf("tree") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You climb the apple tree. The branches are the right shape for climbing, as if the tree had this in mind when it was growing. From the top, eight feet up, you can see over the weeds to the neighborhood beyond -- the bike path, the pool fence, the rooftops. You eat one of the hard sour apples. It is not good. It is perfect. You stay up there for a while, looking at everything that belongs to this summer.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs the apple tree and surveys the neighborhood from the top.", user.UserId());
        return true;
    }

    return false;
}

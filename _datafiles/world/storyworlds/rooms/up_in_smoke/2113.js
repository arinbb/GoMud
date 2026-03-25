// Up in Smoke - The Beach
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The orange Pacific sunset deepens to the amber of library lamplight. The salt air becomes the scent of old paper. The sound of wheels on the boardwalk fades. The Grand Library closes around you. You are back.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " skates off down the boardwalk and does not come back. The roller skater waves.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "skate" || cmd == "roll") {
        if (user.GetMiscCharacterData("uis_skate_easter") != "found") {
            user.SetMiscCharacterData("uis_skate_easter", "found");
            user.GrantXP(100, "skated Venice Beach");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">You skate down the Venice Beach boardwalk as the sun goes orange behind you. The wheels are smooth. The air tastes like salt. Everyone you pass gives you the look of someone who recognizes a fellow traveler. This is exactly what the 1970s were for. <ansi fg=\"10\">(+100 XP)</ansi></ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " skates down the boardwalk with impeccable form as the sunset goes full orange. The roller skater applauds.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "You skate the boardwalk again. The sunset cooperates. Venice Beach is always this.");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    return true;
}

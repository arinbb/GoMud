
// Harold and Maude - Maudes Railroad Car
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The railroad car -- the paintings, the plants, the banjo, the phonograph -- blurs and dissolves in a warm shimmer of color. Maude waves, once, as if she knew you were leaving. The library closes around you, warm and quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the railroad car in a shimmer of color and paint and flower smell.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "dance" || cmd == "sing" || (cmd == "smell" && rest.indexOf("flower") >= 0) || cmd == "flowers") {
        if (user.GetMiscCharacterData("ham_maude_easter") != "found") {
            user.SetMiscCharacterData("ham_maude_easter", "found");
            user.GrantXP(200, "Harold and Maude: dancing in the railroad car");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">Maude takes your hands and spins you around the railroad car, past the paintings and the plants and the phonograph. The music gets louder. The flowers blur into color. You dance badly and it does not matter at all -- Maude dances as if dancing badly is exactly what she had planned. She smells of flowers and paint and something like sunlight if sunlight had a smell. This is what it means to be alive. (+200 XP)</ansi>");
            SendUserMessage(user.UserId(), "");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dances with Maude in the railroad car, spinning past the paintings and the plants. The phonograph plays louder.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">Maude takes your hands again and pulls you into a spin. The flowers blur. The phonograph plays. This is, you decide, one of the better uses of a railroad car.</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {

    // Quest step 3: visit Maude's railroad car
    if (user.HasQuest(290) && !user.GetTempData("ham_maude_car")) {
        user.SetTempData("ham_maude_car", "visited");
        user.Command("questadvance 290");
    }

    return false;
}


// World 1-1 Underground - Easter egg: pipe warp zone
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The underground echoes fade. The brick ceiling rises and lightens into sky. You are back in the Arcade, the chiptune underground music still looping faintly in memory.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "look" || cmd == "enter" || cmd == "examine" || cmd == "go") && rest.indexOf("pipe") >= 0) {
        if (user.GetMiscCharacterData("mario_warp_found") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You crouch over the pipe and peer into the darkness. The rumble of distant coins and the smell of cool stone rises up. You already know what the warp zones are down there. Some things you only discover once. The memory is the reward.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " peers into the underground pipe.", user.UserId());
            return true;
        }
        user.SetMiscCharacterData("mario_warp_found", "true");
        user.GrantXP(200, "discovering the underground warp zone");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You crouch and look into the pipe. The pipe breathes cool air at you, mineral and ancient. Then, in the darkness below, you see something impossible: a chamber lit by torchlight, and on every wall, more pipes, each one labeled -- WORLD 2, WORLD 3, WORLD 4. A warp zone. The game had been hiding this the entire time, in the first underground level, past the first Piranha Plant, through the most obvious pipe. Every time you played World 1-1, it was here. You just had to look.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">+200 XP for discovering the underground warp zone!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " peers into a pipe and goes very still with the particular stillness of someone who has just discovered a secret.", user.UserId());
        return true;
    }

    if (user.HasQuest(210)) {
        if (cmd == "east" || cmd == "go") {
            user.Command("questadvance 210");
        }
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(210)) {
        user.Command("questadvance 210");
    }
    return true;
}

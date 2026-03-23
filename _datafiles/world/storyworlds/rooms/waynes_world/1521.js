
// Wayne's World - The Mirthmobile
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Mirthmobile's radio cuts to static and the AMC Pacer dissolves into film grain around you. The last thing you hear is a Queen cassette rewinding. The library assembles itself from warmth and old paper.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into static like a bad cable signal and vanishes from the Mirthmobile.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sing" || cmd == "headbang" || (cmd == "play" && rest.toLowerCase().indexOf("queen") >= 0) || (cmd == "sing" && rest.toLowerCase().indexOf("bohemian") >= 0)) {
        var key = "waynes_world_bohemian_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The radio changes. Just like that. From whatever it was to the unmistakable piano intro of Bohemian Rhapsody. Your head begins to move before you consciously decide to headbang. The bass hits and the whole car seems to pulse.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"IS THIS THE REAL LIFE? IS THIS JUST FANTASY?\"</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " headbangs in the Mirthmobile as Bohemian Rhapsody erupts from the speakers.", user.UserId());
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The whole car rocks. The fuzzy dice swing. The cassette tapes rattle. This is what the Mirthmobile was built for. GALILEO. GALILEO. GALILEO FIGARO — MAGNIFICO.</ansi>");
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(300, "bohemian rhapsody easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+300 XP — GALILEO FIGARO! MAGNIFICO!)</ansi>");
        }
        return true;
    }

    if (cmd == "radio" || (cmd == "turn" && rest.toLowerCase().indexOf("radio") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You reach for the radio. It is already at maximum volume. There is no maximum volume. You turn it up anyway. Classic rock pours into the Aurora afternoon.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " cranks the Mirthmobile radio. Classic rock fills the driveway.", user.UserId());
        return true;
    }

    return false;
}

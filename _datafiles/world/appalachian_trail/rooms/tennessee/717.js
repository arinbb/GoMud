// Watauga Lake Shelter - Mile 426, Elev 2200'
// TODO_RESEARCH: Verify exact mile marker and elevation

var TRAIL_DATA = {
    mile: 426,
    elevation: 2200,
    state: "Tennessee",
    section: "Tennessee",
    waterSource: "Stream near shelter - reliable",
    shelter: "Watauga Lake Shelter - sleeps 8, privy, bear box, lake views",
    nearestTown: "Hampton, TN (3mi by road)",
    terrain: "Wooded hillside above TVA reservoir. Lake views. Popular stop.",
    cellService: "Weak/intermittent",
    ahead: "Vandeventer Shelter (8mi), Iron Mountain",
    behind: "Laurel Fork Shelter (8mi)"
};

function onCommand(cmd, rest, user, room) {
    if (cmd == "mileage" || cmd == "mile" || cmd == "miles") {
        var toKatahdin = 2190.0 - TRAIL_DATA.mile;
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Trail Position ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Mile " + TRAIL_DATA.mile + " | Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">From Springer: " + TRAIL_DATA.mile + " mi | To Katahdin: " + toKatahdin.toFixed(1) + " mi</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">State: " + TRAIL_DATA.state + " | Section: " + TRAIL_DATA.section + "</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }
    if (cmd == "guide" || cmd == "info" || cmd == "trailinfo") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Trail Guide ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Terrain: " + TRAIL_DATA.terrain + "</ansi>");
        if (TRAIL_DATA.waterSource) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Water: " + TRAIL_DATA.waterSource + "</ansi>"); }
        if (TRAIL_DATA.shelter) { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Shelter: " + TRAIL_DATA.shelter + "</ansi>"); }
        if (TRAIL_DATA.nearestTown) { SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Town: " + TRAIL_DATA.nearestTown + "</ansi>"); }
        if (TRAIL_DATA.cellService) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Cell: " + TRAIL_DATA.cellService + "</ansi>"); }
        SendUserMessage(user.UserId(), "");
        return true;
    }
    if (cmd == "ahead") { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Ahead (NOBO): " + TRAIL_DATA.ahead + "</ansi>"); return true; }
    if (cmd == "behind") { SendUserMessage(user.UserId(), "<ansi fg=\"green\">Behind (SOBO): " + TRAIL_DATA.behind + "</ansi>"); return true; }
    if (cmd == "weather") {
        var isDay = UtilIsDay();
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain dimples the surface of Watauga Lake. The mountains disappear in gray.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sunlight glitters on the lake surface. A perfect blue day.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Stars reflect in the still lake. The mountains are dark silhouettes.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    if (cmd == "sign" || cmd == "register") {
        var key = "register_r" + room.RoomId() + "_" + user.UserId();
        if (room.GetPermData(key) != "") { SendUserMessage(user.UserId(), "<ansi fg=\"8\">You already signed this shelter register.</ansi>"); }
        else { var name = user.GetCharacterName(false); room.SetPermData(key, name); SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " was here.\"</ansi>"); SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId()); user.GrantXP(15, "signing a shelter register"); }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Watauga Lake at sunset. Worth every mile. - Lake Effect\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Old town of Butler is under there somewhere. Spooky to think about. - Diver\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Swam in the lake. The water is warmer than the mountain creeks. Luxury. - Swimmer\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Damascus is getting close. Virginia is getting close. New state energy. - Border Runner\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You settle onto the platform with a view of the lake through the trees. Moonlight silvers the water. Somewhere below that surface, a town sleeps forever.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "swim") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You hike down to the lake shore and wade in. The water is warmer than the mountain creeks but still refreshing. You float on your back, looking up at the mountains ringing the reservoir. Somewhere beneath you, the streets of old Butler lie silent.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " goes for a swim in Watauga Lake.", user.UserId());
        return true;
    }
    if (cmd == "filter") { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the stream. Clear and cool.</ansi>"); return true; }
    return false;
}

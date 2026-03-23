// Mountaineer Falls Shelter - Mile 400, Elev 3900'
// TODO_RESEARCH: Verify exact mile marker, elevation, and falls details

var TRAIL_DATA = {
    mile: 400,
    elevation: 3900,
    state: "Tennessee",
    section: "Tennessee",
    waterSource: "Mountaineer Falls - reliable year-round, dramatic",
    shelter: "Mountaineer Falls Shelter - sleeps 8, privy, bear box, near waterfall",
    nearestTown: "Hampton, TN (12mi by road)",
    terrain: "Rocky terrain near waterfall. Hemlock and rhododendron. Perpetually damp.",
    cellService: "None",
    ahead: "Moreland Gap Shelter (8mi), Laurel Fork Gorge",
    behind: "Roan High Knob Shelter (21mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain adds to the falls. The roar intensifies. Everything is soaked.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Mist from the falls catches the sunlight, throwing tiny rainbows.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The falls roar in the darkness. Spray drifts like cold ghosts.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    if (cmd == "sign" || cmd == "register") {
        var key = "register_r" + room.RoomId() + "_" + user.UserId();
        if (room.GetPermData(key) != "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You already signed this shelter register.</ansi>");
        } else {
            var name = user.GetCharacterName(false);
            room.SetPermData(key, name);
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " was here.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId());
            user.GrantXP(15, "signing a shelter register");
        }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Best water source on the trail. A literal waterfall. Filter from the pool. - Hydrated\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Swam in the pool. Lasted about 30 seconds. Cold enough to stop your heart. - Polar Bear\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Everything is damp. Sleeping bag is damp. Register is damp. I am damp. - Moist\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You settle onto the slightly damp platform. The waterfall roars its endless song. The mist keeps everything cool and green. Sleep comes slowly but deeply.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "swim") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You wade into the pool at the base of the falls. The water is shockingly cold\x97snowmelt cold\x97and takes your breath away. You last maybe a minute before scrambling out, gasping and grinning.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " plunges into the pool and scrambles out almost immediately.", user.UserId());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the pool at the base of the falls. Cold, clear, and plentiful.</ansi>");
        return true;
    }
    return false;
}

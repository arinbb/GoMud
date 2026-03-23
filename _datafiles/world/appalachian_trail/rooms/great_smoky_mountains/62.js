// Thunderhead Mountain / Silers Bald - Mile 190-200, Elev 5000-5527'
// Data sourced from ATC publications and NPS resources

var TRAIL_DATA = {
    mile: 195.0,
    elevation: 5400,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "Springs at shelters only (Derrick Knob, Silers Bald, Double Spring Gap)",
    shelter: "Derrick Knob (mi 190), Silers Bald (mi 196), Double Spring Gap (mi 198)",
    nearestTown: "Townsend, TN (no easy access) / Bryson City, NC (no easy access)",
    terrain: "High-elevation ridgeline. Rocky summits. Spruce-fir forest. Exposed weather.",
    cellService: "None",
    ahead: "Kuwohi summit (5.0mi), Mt. Collins Shelter (8.1mi)",
    behind: "Spence Field Shelter (11.0mi), Thunderhead summit (5.0mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain and wind batter the exposed ridge. The dead firs groan and creak.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Cloud has settled on the ridge. The ghost trees loom out of the mist like sentinels.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sun breaks through the spruce canopy in shafts of dusty gold. The dead firs cast long shadows.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The dead firs are silhouettes against the stars. The wind moans through their bare branches.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft | Temps 10-15 degrees cooler than valleys.</ansi>");
        return true;
    }
    // Easter egg: sing Rocky Top
    if (cmd == "sing") {
        if (rest.indexOf("rocky") >= 0 || rest.indexOf("top") >= 0) {
            if (user.GetMiscCharacterData("easter_rockytop") != "found") {
                user.SetMiscCharacterData("easter_rockytop", "found");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You belt out a few bars on the actual Rocky Top. The wind carries your voice across the Tennessee Valley. Somewhere, a University of Tennessee alumnus sheds a tear.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sings Rocky Top on the actual Rocky Top. It echoes across the valley.", user.UserId());
                user.GrantXP(50, "singing Rocky Top on Rocky Top");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sing it again. The wind does not mind.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sings Rocky Top again.", user.UserId());
            }
            return true;
        }
    }
    return false;
}

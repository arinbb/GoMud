// Mollies Ridge / Spence Field - Mile 178-190, Elev 4500-5000'
// Data sourced from ATC publications and NPS resources

var TRAIL_DATA = {
    mile: 184.0,
    elevation: 4900,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "Springs at each shelter (check seasonal reliability)",
    shelter: "Mollies Ridge (mi 178), Russell Field (mi 181), Spence Field (mi 184)",
    nearestTown: "Fontana Village, NC (18mi S) / Townsend, TN (no easy access)",
    terrain: "High ridgeline walking. Grassy balds. Exposed to weather. Rocky in places.",
    cellService: "Occasional signal on exposed ridges, mostly none",
    ahead: "Thunderhead Mountain (4.0mi), Derrick Knob Shelter (6.1mi)",
    behind: "Fontana Dam (18.0mi), Birch Spring Shelter (6.0mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Wind-driven rain lashes the exposed ridgeline. The balds are lost in cloud.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Cloud has settled on the ridge. The grass is wet and the world shrinks to thirty feet.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sun and wind on the open bald. The views stretch fifty miles in every direction.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Stars blaze above the open bald. The Milky Way arches overhead, impossibly bright at this elevation.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft | Exposed ridgeline - wind chill significant.</ansi>");
        return true;
    }
    return false;
}

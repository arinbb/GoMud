// Erwin, TN / Unaka Mountains - Mile 330, Elev 1700' (town) to 5180' (Unaka Mtn)
// Data sourced from ATC publications and USFS
// TODO_RESEARCH: Verify exact mile markers for Erwin section

var TRAIL_DATA = {
    mile: 330,
    elevation: 1700,
    state: "Tennessee",
    section: "Tennessee",
    waterSource: "Nolichucky River (town), springs near shelters, unreliable on ridges",
    shelter: "Flint Mountain Shelter (side trail), Hogback Ridge Shelter (side trail), Bald Mountain Shelter (side trail), No Business Knob Shelter (side trail)",
    nearestTown: "Erwin, TN (on trail)",
    terrain: "River gorge descent to town, then steep climb into Unaka Mountains. Dense spruce-fir forest. Exposed ridges.",
    cellService: "Good in town, none on ridges",
    ahead: "Roan Highlands (20mi), Cherry Gap Shelter",
    behind: "Max Patch (22mi), Jerry Cabin Shelter"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain hammers the Unaka ridgeline. The spruce trees drip steadily.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Fog fills the Nolichucky gorge and wraps the Unaka peaks in gray.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sun breaks through the spruce canopy in narrow shafts of light.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The Unaka ridgeline is dark and silent. Wind moves through the spruce.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    if (cmd == "resupply" || cmd == "shop" || cmd == "buy") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Erwin has a full grocery store, several restaurants, and Uncle Johnny's hostel with a gear shop. The post office holds resupply boxes. Good place to zero.</ansi>");
        return true;
    }
    if (cmd == "history") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Erwin History ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Erwin grew up around the Clinchfield Railroad, which pushed through the Nolichucky gorge in the early 1900s. The town has a complicated relationship with its most famous story\x97the 1916 hanging of Mary the circus elephant.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The Unaka Mountains above town take their name from the Cherokee word for white, referring to the light-colored rocks exposed on the peaks.</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }
    return false;
}

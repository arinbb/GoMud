// Watauga Lake / Iron Mountain - Mile 400-470, Elev varies
// Data sourced from ATC publications and USFS

var TRAIL_DATA = {
    mile: 435,
    elevation: 3500,
    state: "Tennessee",
    section: "Tennessee",
    waterSource: "Laurel Fork (reliable), Watauga Lake (treat), springs near shelters",
    shelter: "Mountaineer Falls, Moreland Gap, Laurel Fork, Watauga Lake, Vandeventer, Iron Mountain, Double Springs shelters (all on side trails)",
    nearestTown: "Hampton, TN (3mi from Watauga Lake); Damascus, VA (ahead)",
    terrain: "Laurel Fork Gorge with waterfalls. Watauga Lake crossing area. Iron Mountain ridgeline to Virginia border.",
    cellService: "Intermittent near lake, none on ridges",
    ahead: "Damascus, VA (35mi) - Trail Town, USA!",
    behind: "Roan Highlands (21mi), Roan High Knob Shelter"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain sweeps across the lake and hammers the Iron Mountain ridgeline.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Fog rises from Watauga Lake, filling the valleys between the ridges.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sunlight sparkles on Watauga Lake. The Iron Mountain ridge is clear and green.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Stars reflect in the still surface of Watauga Lake. The ridgeline is a dark silhouette.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    if (cmd == "history") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Overmountain Men ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">In September 1780, a militia force of frontiersmen gathered at Sycamore Shoals (near present-day Elizabethton, TN) and marched east across these mountains to fight the British loyalist forces at Kings Mountain, South Carolina.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Their victory at Kings Mountain on October 7, 1780 was a turning point of the Revolutionary War in the South. The Overmountain Victory National Historic Trail follows their route, which overlaps with the AT through this section.</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }
    return false;
}

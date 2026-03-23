// Roan Highlands - Mile 379, Elev 6285' (Roan High Knob)
// Data sourced from ATC publications and USFS

var TRAIL_DATA = {
    mile: 379,
    elevation: 6285,
    state: "North Carolina / Tennessee",
    section: "Tennessee",
    waterSource: "Spring near Roan High Knob Shelter (piped), springs along ridge (seasonal)",
    shelter: "Curley Maple Gap Shelter (side trail), Cherry Gap Shelter (side trail), Clyde Smith Shelter (side trail), Roan High Knob Shelter (side trail - highest on AT)",
    nearestTown: "Roan Mountain, TN (8mi by road from Carvers Gap)",
    terrain: "High-elevation ridgeline above 5000'. Open grassy balds. Dense spruce-fir forest. Exposed and windy.",
    cellService: "Intermittent on balds, none in forest",
    ahead: "Watauga Lake (21mi), Mountaineer Falls Shelter",
    behind: "Erwin, TN (20mi), No Business Knob Shelter"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain and wind lash the exposed ridgeline. Visibility is near zero on the balds.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Cloud engulfs the Roan Highlands. The balds have vanished into gray nothing.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Clear skies over the Roan Highlands. The views from the balds are extraordinary.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Stars blaze above the open balds. The wind is cold and relentless at this elevation.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    if (cmd == "bloom" || cmd == "flowers") {
        SendUserMessage(user.UserId(), "<ansi fg=\"magenta\">The Catawba rhododendron bloom is one of the great natural spectacles of the Appalachian Trail. In June, acres of mountainside turn pink and purple. The gardens at Roan Mountain have been a destination since the 1870s.</ansi>");
        return true;
    }
    if (cmd == "history") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Roan Highlands History ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">In 1877, General John T. Wilder built the Cloudland Hotel on the summit of Roan Mountain, straddling the NC/TN state line. Guests could sleep with their head in one state and their feet in another. The hotel operated until 1910.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The Roan High Knob fire warden cabin was built in 1933 by the CCC and later converted into the highest shelter on the Appalachian Trail at 6,275 feet.</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }
    return false;
}

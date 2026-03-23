// Cable Gap Shelter - Mile 159.4, Elev 2880'
// Named for logging cable operations, near Fontana

var TRAIL_DATA = {
    mile: 159.4,
    elevation: 2880,
    state: "North Carolina",
    section: "Cheoah Mountains",
    waterSource: "Creek nearby - reliable year-round, filter required",
    shelter: "Cable Gap Shelter - sleeps 10, privy, bear box",
    nearestTown: "Fontana Village, NC (8mi)",
    terrain: "Low gap in recovering forest. Former logging area. Creek nearby.",
    cellService: "None",
    ahead: "Fontana Dam (6.9mi), Great Smoky Mountains NP (8mi)",
    behind: "Sassafras Gap Shelter (15.4mi), Cheoah Bald (10mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain falls heavily at this low elevation. The creek is running high and muddy.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The low gap is warm and humid. Sunlight filters through the recovering canopy.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The gap is warm for a shelter night. The creek gurgles in the darkness. Fireflies blink in the undergrowth.</ansi>"); }
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
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Found an old logging cable in the brush. Rusted solid. This forest has stories. - Rust\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Fontana tomorrow. Hot showers. HOT. SHOWERS. I cannot overstate this. - Fragrant\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Copperhead on the trail near the creek. Beautiful and terrifying in equal measure. - Careful\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Last shelter before the Smokies. Next stop: the big mountains. Ready or not. - Nervous\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You stretch out on the platform in the low gap. The air is warm and damp, the creek loud. Fireflies blink in the undergrowth. Tomorrow, Fontana Dam. The day after, the Smokies. For now, just the creek and the warm night and the slow recovery of a body that has been climbing and descending all day. Sleep comes with the water.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the creek. Warmer than the high-elevation springs, with a slightly earthy taste.</ansi>");
        return true;
    }
    return false;
}

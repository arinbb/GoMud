// Mollies Ridge Shelter - Mile 178.0, Elev 4570'
// Data sourced from ATC publications and NPS resources

var TRAIL_DATA = {
    mile: 178.0,
    elevation: 4570,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "Spring below shelter - reliable, filter required",
    shelter: "Mollies Ridge Shelter - reservation required, sleeps 12, chain-link fence, privy",
    nearestTown: "Fontana Village, NC (12mi S)",
    terrain: "High ridgeline. Exposed to weather. Hardwood-to-spruce transition zone.",
    cellService: "None",
    ahead: "Russell Field Shelter (3.1mi), Spence Field Shelter (6.0mi)",
    behind: "Birch Spring Shelter (6.5mi), Fontana Dam (12.0mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain hammers the tin roof like a drum line. The chain-link fence streams with water.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sunlight slants through the trees around the shelter. The ridge wind keeps the bugs down.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Darkness and wind. The shelter creaks. Something rustles in the brush outside the fence.</ansi>"); }
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
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " - First night in the Smokies. The fence is weird.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId());
            user.GrantXP(15, "signing a shelter register");
        }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Day 12. The chain-link fence makes me feel like a zoo animal. Bears are the visitors. - Trailmouse\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Woke up to a bear trying the latch at 3am. He gave up. I did not go back to sleep. - Nope Rope\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Spring water is cold and good. Mouse stole my tortilla. Balance of nature. - Zen Hiker\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Wind was 40mph all night. Thought the roof was leaving. It stayed. - Lucky\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You claim a spot on the platform, unroll your pad behind the chain-link fence, and try to sleep. The wind howls along the ridge. The mice begin their nightly patrol. The fence rattles. Somewhere outside, a bear tests the perimeter. Welcome to the Smokies.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night behind the bear fence.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the spring below the shelter. Cold and clean, piped from the hillside.</ansi>");
        return true;
    }
    return false;
}

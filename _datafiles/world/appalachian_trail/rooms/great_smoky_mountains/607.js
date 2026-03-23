// Icewater Spring Shelter - Mile 211.1, Elev 5920'

var TRAIL_DATA = {
    mile: 211.1,
    elevation: 5920,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "Icewater Spring - extremely cold, reliable year-round, filter required",
    shelter: "Icewater Spring Shelter - reservation required, sleeps 12, chain-link fence, privy",
    nearestTown: "Gatlinburg, TN (16mi via Newfound Gap Rd)",
    terrain: "High-elevation ridge. Spruce-fir forest. Near Charlie's Bunion.",
    cellService: "Occasional on ridge, unreliable",
    ahead: "Pecks Corner Shelter (7.4mi), Tricorner Knob Shelter (12.6mi)",
    behind: "Newfound Gap (4.1mi), Mt. Collins Shelter (8.0mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain and wind on the exposed ridge. The shelter is a welcome refuge.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The ridge catches full sun. Charlie's Bunion is stark and dramatic against the blue sky.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Stars above the ridge. The spring trickles in the darkness. A crowded shelter breathes and murmurs.</ansi>"); }
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
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " - Icewater Spring. The name is not metaphorical. My teeth still ache.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId());
            user.GrantXP(15, "signing a shelter register");
        }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Charlie's Bunion at sunrise. Best view of the trip. Named for a man's foot. This trail. - Sunrise\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Day-hikers asked if I carry a shower. I said I AM the shower, after two weeks of rain. - Drippy\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Spring water so cold I got brain freeze. From drinking WATER. - Slurpee\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"18 people in a 12-person shelter. We fit. Barely. Nobody slept. - Sardine\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You squeeze onto the crowded platform and lie there listening to twelve strangers breathe, shift, snore, and rustle. The spring trickles outside. The fence rattles in the wind. Somewhere in the spruce forest, a screech owl trembles. You sleep in fits and starts, which is par for the course at the most popular shelter in the Smokies.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from Icewater Spring. The name is honest\x97the water is barely above freezing. Your hands go numb in seconds.</ansi>");
        return true;
    }
    return false;
}

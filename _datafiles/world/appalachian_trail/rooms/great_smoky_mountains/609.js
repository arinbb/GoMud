// Tricorner Knob Shelter - Mile 223.7, Elev 5920'

var TRAIL_DATA = {
    mile: 223.7,
    elevation: 5920,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "Spring via steep rough side trail - reliable, very cold, filter required",
    shelter: "Tricorner Knob Shelter - reservation required, sleeps 12, chain-link fence, privy",
    nearestTown: "No easy town access. Newfound Gap (16mi S on trail)",
    terrain: "High-elevation ridge junction. Dense spruce-fir forest. Very remote.",
    cellService: "None",
    ahead: "Cosby Knob Shelter (7.7mi), Davenport Gap (16.3mi)",
    behind: "Pecks Corner Shelter (5.2mi), Icewater Spring Shelter (12.6mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain and wind from three directions. The knob catches every storm that crosses the ridge.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Thin light filters through the spruce canopy. The lichen glows faintly green.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Absolute darkness at 5,920 feet. The wind sounds different up here\x97thinner, colder, more insistent.</ansi>"); }
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
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " - Three ridges, one knob, zero cell service. Perfection.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId());
            user.GrantXP(15, "signing a shelter register");
        }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Farthest from a road I have ever been. 16 miles in every direction. - Navigator\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Frost on my sleeping bag in July. JULY. At nearly 6,000 feet the rules are different. - Frosty\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Saw-whet owl kept me up all night. Beep. Beep. Beep. All. Night. - Sleepless\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"The trail to the spring would make a good horror movie set. Bring your headlamp. - Indiana Jones\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sleep at the convergence of three ridges, nearly 6,000 feet above the sea. The wind finds the shelter from every angle. Frost forms on the fence by midnight. The saw-whet owl beeps from the darkness like a biological smoke detector. This is backcountry at its most genuine.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You pick your way down the rough, root-tangled side trail to the spring. The water is ice cold. The climb back up with full bottles leaves you winded at this elevation.</ansi>");
        return true;
    }
    return false;
}

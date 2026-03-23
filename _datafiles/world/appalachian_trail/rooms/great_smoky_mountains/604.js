// Silers Bald Shelter - Mile 195.8, Elev 5460'

var TRAIL_DATA = {
    mile: 195.8,
    elevation: 5460,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "Spring south of shelter - reliable, very cold, filter required",
    shelter: "Silers Bald Shelter - reservation required, sleeps 12, chain-link fence, privy",
    nearestTown: "No easy town access",
    terrain: "High-elevation spruce-fir forest. Near overgrown bald. Damp and cool.",
    cellService: "None",
    ahead: "Double Spring Gap Shelter (1.7mi), Kuwohi summit (4.2mi)",
    behind: "Derrick Knob Shelter (5.7mi), Thunderhead Mountain (10.0mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain and mist merge into a single wet envelope around the shelter. Everything drips.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Filtered light through dense spruce. The air is damp and cool even in direct sun.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The spruce forest is pitch dark. The lichen-draped branches seem to close in.</ansi>"); }
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
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " - The bald is becoming forest. Time moves differently up here.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId());
            user.GrantXP(15, "signing a shelter register");
        }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Mow the bald! Maintain the views! The Park Service is letting history disappear! - View Seeker\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Let the forest return. It was forest before us and will be again. - Tree Hugger\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Spring water so cold it made me yelp. Worth it. - Icicle\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Old man's beard lichen everywhere. This forest looks like Middle-earth. - Frodo\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sleep in a cloud of balsam scent, the dripping spruce boughs providing a lullaby of condensation. The air is cold, even in your bag. This is what sleeping at a mile above sea level feels like.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the spring. It is so cold it makes your hands ache.</ansi>");
        return true;
    }
    return false;
}

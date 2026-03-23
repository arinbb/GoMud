// Entering the Smokies / Fontana Dam North - Mile 166.0, Elev 1800'
// Data sourced from ATC publications and NPS resources

var TRAIL_DATA = {
    mile: 166.0,
    elevation: 1800,
    state: "North Carolina / Tennessee",
    section: "Great Smoky Mountains",
    waterSource: "Fontana Dam facilities (last reliable before Birch Spring, 4.5mi)",
    shelter: "Birch Spring Shelter (4.5mi N)",
    nearestTown: "Fontana Village, NC (2mi S via road)",
    terrain: "Steep climb from dam into park. Hardwood forest, rhododendron understory.",
    cellService: "Limited at dam, none once in park",
    ahead: "Mollies Ridge Shelter (12.0mi), Spence Field Shelter (18.0mi)",
    behind: "Fontana Dam / Fontana Village (2.0mi)"
};

function onEnter(user, room) {
    if (user.GetMiscCharacterData("visited_smokies") != "true") {
        user.SetMiscCharacterData("visited_smokies", "true");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">========================================</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">  GREAT SMOKY MOUNTAINS NATIONAL PARK</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">========================================</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">You step across the park boundary. The air changes. The forest closes in.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Seventy miles of ridgeline walking lie ahead\x97the longest stretch of</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">trail above 5,000 feet on the entire AT.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">PERMIT REQUIRED: All backcountry camping in the Smokies requires a permit.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">Shelters require reservations. No stealth camping.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Cherokee called these mountains Shaconage\x97place of blue smoke.</ansi>");
        SendUserMessage(user.UserId(), "");
        user.GrantXP(75, "entering Great Smoky Mountains National Park");
    }
    return false;
}

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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain falls in sheets, turning the steep trail into a creek. The dam below vanishes in mist.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The famous Smoky Mountain haze has thickened to true fog. You can barely see the next blaze.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Hazy sunshine filters through the canopy. The blue smoke of the Smokies fills every hollow.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Darkness swallows the forest. Fontana Lake glimmers faintly far below.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    // REGISTER at kiosk
    if (cmd == "register" || cmd == "sign") {
        if (rest.indexOf("kiosk") >= 0 || rest.indexOf("permit") >= 0 || rest == "") {
            var key = "smokies_permit_" + user.UserId();
            if (user.GetMiscCharacterData(key) == "registered") {
                SendUserMessage(user.UserId(), "<ansi fg=\"8\">You already registered your thru-hiker permit for the Smokies.</ansi>");
            } else {
                user.SetMiscCharacterData(key, "registered");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You fill out the self-registration form at the kiosk, noting your planned shelter stops through the park. Permit secured.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fills out a backcountry permit at the kiosk.", user.UserId());
                user.GrantXP(25, "registering for a Smokies backcountry permit");
            }
            return true;
        }
    }
    return false;
}

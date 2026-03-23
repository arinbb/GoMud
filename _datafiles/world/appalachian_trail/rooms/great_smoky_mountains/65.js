// Tricorner Knob to Davenport Gap - Mile 220-240, Elev 1975-5920'
// Data sourced from ATC publications and NPS resources

var TRAIL_DATA = {
    mile: 232.0,
    elevation: 3500,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "Springs at shelters. Pigeon River at Davenport Gap.",
    shelter: "Tricorner Knob (mi 224), Cosby Knob (mi 231)",
    nearestTown: "Standing Bear Farm hostel (0.8mi from Davenport Gap)",
    terrain: "Remote ridge walking. Dense spruce forest. Steep descent to Davenport Gap.",
    cellService: "None until Davenport Gap, then sporadic",
    ahead: "Standing Bear Farm (0.8mi from gap), Max Patch (22mi)",
    behind: "Pecks Corner Shelter (14.0mi), Newfound Gap (22.0mi)"
};

function onEnter(user, room) {
    // Leaving the Smokies message (heading north)
    if (user.GetMiscCharacterData("exiting_smokies_msg") != "shown") {
        user.SetMiscCharacterData("exiting_smokies_msg", "shown");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You are approaching the eastern boundary of Great Smoky Mountains National Park.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Seventy miles of ridgeline. The longest stretch above 5,000 feet on the entire AT.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Davenport Gap and the world beyond lie to the north.</ansi>");
        SendUserMessage(user.UserId(), "");
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain drips from every branch. The steep descent to the gap is treacherous with slick roots and mud.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Fog fills the forest. The Cammerer fire tower is invisible. Trail blazes appear and vanish in the mist.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Filtered sunlight reaches the trail floor in scattered patches. The forest is dense and green.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Total darkness under the canopy. The sounds of the forest are amplified\x97every rustle, every crack, every distant call.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: variable, 1975-5920 ft across this section.</ansi>");
        return true;
    }
    // CLIMB fire tower
    if (cmd == "climb" || cmd == "ascend") {
        if (rest.indexOf("tower") >= 0 || rest.indexOf("cammerer") >= 0 || rest.indexOf("fire") >= 0) {
            if (user.GetMiscCharacterData("easter_cammerer_tower") != "found") {
                user.SetMiscCharacterData("easter_cammerer_tower", "found");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You climb the stone steps of the Mt. Cammerer fire tower, built by CCC boys in the 1930s. The stone walls are solid, the timber framing weathered but sound. At the top, the panoramic windows frame a view that takes your breath away\x97the French Broad River valley spreads below, and mountains stretch to every horizon. The young men who built this tower hauled every stone up the mountain on their backs and on the backs of mules, earning thirty dollars a month during the Depression. Their craftsmanship has outlasted most of the things built in their century.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs to the top of the Mt. Cammerer fire tower.", user.UserId());
                user.GrantXP(50, "climbing the CCC-built Mt. Cammerer fire tower");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You climb the tower again. The CCC boys built it to last, and it has.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs the fire tower.", user.UserId());
            }
            return true;
        }
    }
    return false;
}

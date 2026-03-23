// Blood Mountain Summit - Mile 28.9, Elev 4461'
// Data sourced from FarOut (formerly Guthook) and ATC publications

var TRAIL_DATA = {
    mile: 28.9,
    elevation: 4461,
    lat: 34.7398,
    lon: -83.9369,
    state: "Georgia",
    section: "Georgia",
    waterSource: "NO WATER on summit. Nearest: spring 1mi north toward Neel Gap, or Woods Hole spring 1.2mi south",
    shelter: "Blood Mountain Shelter (on summit, mile 28.9) - CCC stone shelter, no privy",
    nearestTown: "Blairsville, GA (15mi); Dahlonega, GA (20mi)",
    terrain: "Exposed rocky summit. 360-degree views. Very windy. Ice possible in cold months. Steep descent north to Neel Gap.",
    cellService: "Good - summit exposure",
    ahead: "Neel Gap / Mountain Crossings (2.7mi), Whitley Gap Shelter (9.1mi)",
    behind: "Woods Hole Shelter (1.2mi), Woody Gap (8.4mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain and wind lash the exposed summit. Visibility is near zero. Dangerous conditions.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The summit is socked in with fog. The panoramic views are completely hidden.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Clear skies over Blood Mountain! The 360-degree views are spectacular.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Stars blaze overhead on the exposed summit. The Milky Way arcs across the sky.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft - Highest point on the AT in Georgia</ansi>");
        return true;
    }
    return false;
}

// Visor overlay data
var VISOR_DATA = {
    history: "Blood Mountain's name likely comes from a legendary battle between the Cherokee and Muscogee Creek nations. The Cherokee considered this mountain sacred — home of the Nunnehi, the 'Immortals' or spirit people who lived in great townhouses in the highlands. The CCC-built stone shelter on the summit dates to the 1930s and is one of the oldest structures on the Georgia AT. The Cherokee avoided killing the red wolves (wa'ya) that once roamed these ridges.",
    plants: "At 4,461 ft, the summit supports a montane oak forest of chestnut oak and northern red oak, stunted by wind exposure. Catawba rhododendron (Rhododendron catawbiense) blooms purple-pink in June. Mountain laurel (Kalmia latifolia) flowers white-pink in May. The exposed rock supports crustose lichens and rock tripe (Umbilicaria spp.). Before the blight, American chestnuts towered here — their root systems still send up doomed sprouts.",
    animals: "Peregrine falcons (Falco peregrinus) hunt from the exposed summit — reintroduced after DDT nearly wiped them out. Black bears forage on the slopes below. Timber rattlesnakes den in the rocky crevices (watch your step on warm days). Dark-eyed juncos (Junco hyemalis) hop among the rocks year-round. In fall, broad-winged hawks (Buteo platypterus) migrate along this ridgeline by the thousands.",
    trail: "Mile 28.9. Elevation 4,461 ft. Highest point on the AT in Georgia. The CCC stone shelter has no water source — the nearest reliable water is a spring about 1 mile north toward Neel Gap. Blood Mountain is where many thru-hikers first feel the reality of what they have undertaken. The steep descent north to Neel Gap (2.7 mi, 1,400 ft drop) is notorious for knee punishment. Maintained by the Georgia Appalachian Trail Club.",
    geology: "Blood Mountain is composed of Blood Mountain Gneiss — a distinctive Precambrian metamorphic rock roughly 1 billion years old, formed deep in the earth's crust under extreme heat and pressure. The exposed summit bedrock shows foliation bands of dark biotite and light feldspar. Quartz veins intrude through fractures. The rounded summit profile reflects hundreds of millions of years of erosion — these mountains were once Himalayan in scale during the Alleghenian orogeny."
};

function onEnter(user, room) {
    showVisorOverlays(user);
    return false;
}

function showVisorOverlays(user) {
    var shown = false;
    if (user.GetMiscCharacterData("visor_history") == "on" && VISOR_DATA.history) {
        if (!shown) { SendUserMessage(user.UserId(), ""); shown = true; }
        SendUserMessage(user.UserId(), "<ansi fg=\"214\">[Heritage] " + VISOR_DATA.history + "</ansi>");
    }
    if (user.GetMiscCharacterData("visor_plants") == "on" && VISOR_DATA.plants) {
        if (!shown) { SendUserMessage(user.UserId(), ""); shown = true; }
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">[Botanist] " + VISOR_DATA.plants + "</ansi>");
    }
    if (user.GetMiscCharacterData("visor_animals") == "on" && VISOR_DATA.animals) {
        if (!shown) { SendUserMessage(user.UserId(), ""); shown = true; }
        SendUserMessage(user.UserId(), "<ansi fg=\"12\">[Naturalist] " + VISOR_DATA.animals + "</ansi>");
    }
    if (user.GetMiscCharacterData("visor_trail") == "on" && VISOR_DATA.trail) {
        if (!shown) { SendUserMessage(user.UserId(), ""); shown = true; }
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">[Trail Guide] " + VISOR_DATA.trail + "</ansi>");
    }
    if (user.GetMiscCharacterData("visor_geology") == "on" && VISOR_DATA.geology) {
        if (!shown) { SendUserMessage(user.UserId(), ""); shown = true; }
        SendUserMessage(user.UserId(), "<ansi fg=\"brown\">[Geologist] " + VISOR_DATA.geology + "</ansi>");
    }
    if (shown) { SendUserMessage(user.UserId(), ""); }
}

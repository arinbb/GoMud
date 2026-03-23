// Springer Mountain Summit - Mile 0.0 - Southern Terminus
// Trail data sourced from FarOut (formerly Guthook) and ATC publications

var TRAIL_DATA = {
    mile: 0.0,
    elevation: 3782,
    lat: 34.6273,
    lon: -84.1935,
    state: "Georgia",
    section: "Springer Mountain",
    waterSource: "Springer Mountain Shelter spring, 0.2 mi N on side trail",
    shelter: "Springer Mountain Shelter 0.2 mi N (built 1993, sleeps 12, privy, bear box)",
    nearestTown: "Amicalola Falls SP, 8.8 mi S via Approach Trail",
    terrain: "Forested summit, hardwood canopy, rocky",
    cellService: "Unreliable - occasional Verizon signal",
    ahead: "Springer Mtn Shelter (0.2 mi), Stover Creek Shelter (2.8 mi), Three Forks (4.3 mi)",
    behind: "Approach Trail to Amicalola Falls (8.8 mi S)"
};

function onEnter(user, room) {
    if (user.GetMiscCharacterData("visited_springer") != "true") {
        user.SetMiscCharacterData("visited_springer", "true");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You touch the bronze plaque. Mile 0. Katahdin is 2,190 miles north.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The Appalachian Trail begins here.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Trail commands: 'mileage' for position, 'guide' for trail info, 'ahead'/'behind' for what's next, 'weather' for conditions.</ansi>");
        SendUserMessage(user.UserId(), "");
        // Give the player the AT Visor Pack
        if (!user.HasItemId(15)) {
            user.GiveItem(CreateItem(15));
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">A trail volunteer hands you an AT Visor Pack — five AR overlays for history, plants, animals, trail data, and geology.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type 'visor' to see your visors, 'visor all' to enable all overlays, or 'visor history/plants/animals/trail/geology' to toggle individual layers.</ansi>");
            SendUserMessage(user.UserId(), "");
        }
        user.GrantXP(50, "reaching Springer Mountain");
    }
    // Always check for visor pack (in case player missed it on first visit)
    if (!user.HasItemId(15)) {
        user.GiveItem(CreateItem(15));
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">A trail volunteer hands you an AT Visor Pack — five AR overlays for history, plants, animals, trail data, and geology.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">Type 'visor' to see your visors, 'visor all' to enable all overlays, or 'visor history/plants/animals/trail/geology' to toggle individual layers.</ansi>");
        SendUserMessage(user.UserId(), "");
    }
    // Visor overlays - show extra info based on active visors
    showVisorOverlays(user);
    return false;
}

// Visor overlay data for this room - each room customizes these
var VISOR_DATA = {
    history: "The Cherokee called this mountain Walasi-Yi's southern guardian. Springer became the AT's southern terminus in 1958, replacing Mt. Oglethorpe after development encroached on the original endpoint. The bronze plaque was placed by the Georgia Appalachian Trail Club. Benton MacKaye, who proposed the AT in 1921, never hiked its full length.",
    plants: "The summit is dominated by northern red oak (Quercus rubra), chestnut oak (Q. montana), and hickory (Carya spp.). Mountain laurel (Kalmia latifolia) and rhododendron (Rhododendron maximum) form dense thickets. Before the 1920s blight, American chestnut (Castanea dentata) dominated here — ghost stumps are still visible. Galax (Galax urceolata) carpets the forest floor.",
    animals: "Black bears (Ursus americanus) are common — this is their core Appalachian habitat. Eastern chipmunks (Tamias striatus) are abundant on the summit. Red-tailed hawks (Buteo jamaicensis) and turkey vultures (Cathartes aura) ride thermals above the ridge. At night, barred owls (Strix varia) call from the hardwoods. Timber rattlesnakes (Crotalus horridus) den in rocky outcrops nearby.",
    trail: "Mile 0.0. Elevation 3,782 ft. The AT was originally proposed by Benton MacKaye in 1921 and completed in 1937. Springer Mountain became the southern terminus in 1958. The Georgia Appalachian Trail Club (GATC) maintains the trail from here to Bly Gap at the NC border. Thru-hiker completion rate is estimated at 25-30%. Most NOBOs start between late February and early April.",
    geology: "Springer Mountain is composed of Precambrian metamorphic rock — primarily biotite gneiss and schist, roughly 1 billion years old. The Appalachians formed during the Alleghenian orogeny (~300 million years ago) when Africa collided with North America. These mountains were once as tall as the Himalayas. Quartz veins run through the gneiss, visible in exposed rock faces."
};

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

var VISOR_KEYS = [
    {key: "visor_history", name: "Heritage", color: "yellow", label: "history"},
    {key: "visor_plants", name: "Botanist", color: "green", label: "plants"},
    {key: "visor_animals", name: "Naturalist", color: "blue", label: "animals"},
    {key: "visor_trail", name: "Trail Guide", color: "white", label: "trail"},
    {key: "visor_geology", name: "Geologist", color: "red", label: "geology"}
];

function handleVisorCommand(rest, user) {
    var arg = rest.toLowerCase().trim();
    // visor (no args) - show status
    if (arg == "" || arg == "status") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">--- AT Visor Pack ---</ansi>");
        for (var i = 0; i < VISOR_KEYS.length; i++) {
            var state = user.GetMiscCharacterData(VISOR_KEYS[i].key);
            var status = (state == "on") ? "<ansi fg=\"10\">ON</ansi>" : "<ansi fg=\"8\">OFF</ansi>";
            SendUserMessage(user.UserId(), "  <ansi fg=\"" + VISOR_KEYS[i].color + "\">" + VISOR_KEYS[i].name + " Visor</ansi> [" + VISOR_KEYS[i].label + "]: " + status);
        }
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">Commands: visor all | visor none | visor [type]</ansi>");
        SendUserMessage(user.UserId(), "");
        return true;
    }
    // visor all
    if (arg == "all" || arg == "on") {
        for (var i = 0; i < VISOR_KEYS.length; i++) { user.SetMiscCharacterData(VISOR_KEYS[i].key, "on"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">All visors activated. Full interpretive overlay enabled.</ansi>");
        return true;
    }
    // visor none
    if (arg == "none" || arg == "off") {
        for (var i = 0; i < VISOR_KEYS.length; i++) { user.SetMiscCharacterData(VISOR_KEYS[i].key, "off"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">All visors deactivated.</ansi>");
        return true;
    }
    // visor <specific>
    for (var i = 0; i < VISOR_KEYS.length; i++) {
        if (arg == VISOR_KEYS[i].label || arg == VISOR_KEYS[i].name.toLowerCase()) {
            var current = user.GetMiscCharacterData(VISOR_KEYS[i].key);
            if (current == "on") {
                user.SetMiscCharacterData(VISOR_KEYS[i].key, "off");
                SendUserMessage(user.UserId(), "<ansi fg=\"" + VISOR_KEYS[i].color + "\">" + VISOR_KEYS[i].name + " Visor deactivated.</ansi>");
            } else {
                user.SetMiscCharacterData(VISOR_KEYS[i].key, "on");
                SendUserMessage(user.UserId(), "<ansi fg=\"" + VISOR_KEYS[i].color + "\">" + VISOR_KEYS[i].name + " Visor activated.</ansi>");
            }
            return true;
        }
    }
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">Usage: visor [all|none|history|plants|animals|trail|geology]</ansi>");
    return true;
}

function onCommand(cmd, rest, user, room) {

    // === VISOR COMMAND ===
    if (cmd == "visor" || cmd == "visors") {
        return handleVisorCommand(rest, user);
    }

    // === MILEAGE COMMAND ===
    if (cmd == "mileage" || cmd == "mile" || cmd == "miles") {
        var toKatahdin = 2190.0 - TRAIL_DATA.mile;
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Trail Position ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Mile " + TRAIL_DATA.mile + " | Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">From Springer: " + TRAIL_DATA.mile + " mi | To Katahdin: " + toKatahdin.toFixed(1) + " mi</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">State: " + TRAIL_DATA.state + " | Section: " + TRAIL_DATA.section + "</ansi>");
        if (TRAIL_DATA.lat && TRAIL_DATA.lon) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">GPS: " + TRAIL_DATA.lat + ", " + TRAIL_DATA.lon + "</ansi>");
        }
        SendUserMessage(user.UserId(), "");
        return true;
    }

    // === GUIDE / INFO COMMAND ===
    if (cmd == "guide" || cmd == "info" || cmd == "trailinfo") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Trail Guide ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Terrain: " + TRAIL_DATA.terrain + "</ansi>");
        if (TRAIL_DATA.waterSource) {
            SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Water: " + TRAIL_DATA.waterSource + "</ansi>");
        }
        if (TRAIL_DATA.shelter) {
            SendUserMessage(user.UserId(), "<ansi fg=\"green\">Shelter: " + TRAIL_DATA.shelter + "</ansi>");
        }
        if (TRAIL_DATA.nearestTown) {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Town: " + TRAIL_DATA.nearestTown + "</ansi>");
        }
        if (TRAIL_DATA.cellService) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Cell: " + TRAIL_DATA.cellService + "</ansi>");
        }
        SendUserMessage(user.UserId(), "");
        return true;
    }

    // === AHEAD / BEHIND ===
    if (cmd == "ahead") {
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">Ahead (NOBO): " + TRAIL_DATA.ahead + "</ansi>");
        return true;
    }
    if (cmd == "behind") {
        SendUserMessage(user.UserId(), "<ansi fg=\"green\">Behind (SOBO): " + TRAIL_DATA.behind + "</ansi>");
        return true;
    }

    // === WEATHER ===
    if (cmd == "weather") {
        var isDay = UtilIsDay();
        if (room.HasMutator("rain")) {
            SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain falls steadily through the canopy. The trail is muddy and slick.</ansi>");
        } else if (room.HasMutator("fog")) {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Dense fog wraps the summit. Visibility is barely twenty feet.</ansi>");
        } else if (isDay) {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Clear skies over the summit. The sun filters through the hardwood canopy.</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Stars visible through the bare branches. The summit is quiet and cold.</ansi>");
        }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft | Temp drops ~3.5F per 1,000ft gain.</ansi>");
        return true;
    }

    // === SIGN / REGISTER (Springer has a summit register) ===
    if (cmd == "sign" || cmd == "register") {
        var key = "register_springer_" + user.UserId();
        if (room.GetPermData(key) != "") {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You already signed the Springer Mountain register.</ansi>");
        } else {
            var name = user.GetCharacterName(false);
            room.SetPermData(key, name);
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " - NOBO - See you at Katahdin.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " signs the Springer Mountain register.", user.UserId());
            user.GrantXP(25, "signing the Springer Mountain register");
        }
        return true;
    }

    // === READ REGISTER ===
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Springer Mountain Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Trail Snail - NOBO Class of 2026. Let's do this.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Blueberry & Hotdog - Married at the plaque yesterday. Katahdin or bust.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Gandalf - Day 1. I didn't quit my job for nothing. 2,190 to go.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Moonshine - SOBO flip-flop, finishing here. 167 days. I did it.\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Compass Rose - Section hiker, GA to NC. Third year. Almost done with this state.\"</ansi>");
        return true;
    }

    // === TOUCH/RUB PLAQUE (easter egg) ===
    if (cmd == "touch" || cmd == "rub") {
        if (rest.indexOf("plaque") >= 0) {
            if (user.GetMiscCharacterData("easter_plaque") != "found") {
                user.SetMiscCharacterData("easter_plaque", "found");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You press your palm flat against the bronze plaque. It's cold and smooth, worn by thousands of hands before yours. A warmth spreads through your chest. This is real. You are doing this.</ansi>");
                user.GrantXP(50, "touching the Springer Mountain plaque");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The plaque is smooth and cold. You remember the feeling from the first time.</ansi>");
            }
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " places a hand on the Springer Mountain plaque.", user.UserId());
            return true;
        }
    }

    return false;
}

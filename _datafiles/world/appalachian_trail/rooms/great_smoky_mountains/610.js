// Cosby Knob Shelter - Mile 231.4, Elev 4740'

var TRAIL_DATA = {
    mile: 231.4,
    elevation: 4740,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "Spring near shelter - reliable, filter required",
    shelter: "Cosby Knob Shelter - reservation required, sleeps 12, chain-link fence, privy",
    nearestTown: "Standing Bear Farm hostel (9mi N via Davenport Gap)",
    terrain: "Transitional forest. Hardwoods replacing spruce. Descending toward park boundary.",
    cellService: "None",
    ahead: "Davenport Gap/park boundary (8.6mi), Standing Bear Farm (9.4mi)",
    behind: "Tricorner Knob Shelter (7.7mi), Pecks Corner Shelter (12.9mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain patters on the hardwood leaves with a richer, fuller sound than the spruce forests above.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Sunlight filters through the transitional canopy\x97broader, warmer light than the dark spruce forests.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Your last night behind the chain-link fence. The wood thrush sings its evening farewell.</ansi>"); }
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
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " - Last night in the Smokies. Seventy miles of ridgeline. I will miss the fence. Almost.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId());
            user.GrantXP(15, "signing a shelter register");
        }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Last night behind the fence. I hated it at first. Now I will miss it. Stockholm syndrome? - Caged Bird\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Standing Bear Farm tomorrow. Pizza. Shower. Laundry. I can smell civilization from here. - Stinky\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Seventy miles. Ten shelters. One permit. Zero regrets. The Smokies delivered. - Ridgerunner\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Wood thrush singing at dusk. Best bird on the trail. @ me. - Birder\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Your last night in the Smokies. The hardwood forest is warmer and softer than the spruce ridges above. Fireflies drift outside the fence like green stars. The wood thrush sings until full dark. Tomorrow you descend to Davenport Gap, leaving behind the chain-link fences, the mandatory reservations, and seventy miles of the finest ridge walking on the Appalachian Trail. You sleep well.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the last night in the Smokies.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the spring. Warmer than the high-elevation springs\x97merely cold rather than numbing. You have descended from the boreal zone.</ansi>");
        return true;
    }
    return false;
}

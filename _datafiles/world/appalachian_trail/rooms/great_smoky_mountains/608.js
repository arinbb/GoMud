// Pecks Corner Shelter - Mile 218.5, Elev 5280'

var TRAIL_DATA = {
    mile: 218.5,
    elevation: 5280,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "Spring below shelter via steep side trail - reliable, filter required",
    shelter: "Pecks Corner Shelter - reservation required, sleeps 12, chain-link fence, privy",
    nearestTown: "No easy town access. Hughes Ridge Trail to Smokemont (emergency)",
    terrain: "Remote ridge junction. Spruce-fir transitioning to hardwoods. Deep backcountry.",
    cellService: "None",
    ahead: "Tricorner Knob Shelter (5.2mi), Cosby Knob Shelter (12.9mi)",
    behind: "Icewater Spring Shelter (7.4mi), Newfound Gap (11.5mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain falls on the remote ridge. No escape from it here\x97miles from any road in every direction.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The forest canopy filters the light into green-gold shafts. The junction clearing is bright and calm.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Total isolation in the dark. No lights anywhere. No sound but wind and forest.</ansi>"); }
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
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " - Deep backcountry. Haven't seen another human in two days.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId());
            user.GrantXP(15, "signing a shelter register");
        }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Most remote I've felt on the AT. No roads. No people. Just forest and ridge. - Hermit\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Hughes Ridge Trail: 10 miles to a road if you need to bail. Steep. Not fun. - Experience\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Bear came to the spring while I was filtering. We shared. He was very polite. - Bear Whisperer\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">Deep backcountry silence. No road noise, no distant engines, no human sounds at all beyond the shelter. You sleep the sleep of genuine isolation, wrapped in forest and darkness and the faint sound of wind through spruce.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You scramble down the steep side trail to the spring, fill your bottles, and scramble back up. The water is cold and the climb is steep. Such is life in the backcountry.</ansi>");
        return true;
    }
    return false;
}

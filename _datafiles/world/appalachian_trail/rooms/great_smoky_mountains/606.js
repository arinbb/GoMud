// Mt. Collins Shelter - Mile 203.1, Elev 5870'

var TRAIL_DATA = {
    mile: 203.1,
    elevation: 5870,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "Spring below shelter - strong and reliable year-round, filter required",
    shelter: "Mt. Collins Shelter - reservation required, sleeps 12, chain-link fence, privy",
    nearestTown: "Gatlinburg, TN (20mi via Newfound Gap Rd)",
    terrain: "High-elevation spruce-fir forest. Perpetually damp. Near Kuwohi summit.",
    cellService: "None",
    ahead: "Newfound Gap (4.0mi), Icewater Spring Shelter (8.0mi)",
    behind: "Kuwohi summit (3.1mi), Double Spring Gap Shelter (5.6mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain and cloud merge. The distinction is academic at this elevation. Everything is water.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Thin light through dense spruce. The moss glows green. Everything drips anyway.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Absolute darkness in the spruce forest. The spring is the only sound that is not wind.</ansi>"); }
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
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register in pencil (pens don't work up here): \"" + name + " - Everything is moss. I am becoming moss.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId());
            user.GrantXP(15, "signing a shelter register");
        }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Summited Kuwohi today. Highest point on the AT. Cried a little. Don't judge. - Waterfall\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"This shelter has been in a cloud for three straight days according to previous entries. - Soggy\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Moss is growing on my pack. I have been here one night. - Chia Pet\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Spring water is the best on the trail. Ice cold from nearly 6,000 feet. - Aquaman\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sleep in a world of moisture and moss, the spring providing a steady soundtrack, the cloud wrapping the shelter in cotton silence. Your sleeping bag absorbs the damp. Everything you own is slightly wet. This is life at nearly 6,000 feet in the Smokies.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from the rock-face spring. The coldest water you have tasted on the trail.</ansi>");
        return true;
    }
    return false;
}

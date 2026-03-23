// Double Spring Gap Shelter - Mile 197.5, Elev 5505'

var TRAIL_DATA = {
    mile: 197.5,
    elevation: 5505,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "Two springs flanking shelter - both reliable, filter required",
    shelter: "Double Spring Gap Shelter - reservation required, sleeps 12, chain-link fence, privy",
    nearestTown: "No easy town access",
    terrain: "High-elevation spruce-fir forest. Narrow gap between peaks. Perpetually damp.",
    cellService: "None",
    ahead: "Kuwohi summit (2.5mi), Mt. Collins Shelter (5.6mi)",
    behind: "Silers Bald Shelter (1.7mi), Derrick Knob Shelter (7.4mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain merges with the perpetual dripping of the spruce forest. Everything is water.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Thin sunlight reaches the gap through the spruce canopy. The lichen glows faintly green.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The gap is utterly dark. The springs are the only sound. The lichen-draped trees are invisible sentinels.</ansi>"); }
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
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You sign the register: \"" + name + " - Two springs. Luxury. Kuwohi tomorrow.\"</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " writes in the shelter register.", user.UserId());
            user.GrantXP(15, "signing a shelter register");
        }
        return true;
    }
    if (cmd == "read" && rest.indexOf("register") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">--- Shelter Register ---</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Kuwohi tomorrow! Highest point on the AT! Can't sleep from excitement. - Summit Seeker\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"This forest is from the ice age. Think about that. - Deep Thoughts\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Two springs = never running out of water. This is what wealth feels like on trail. - Camel\"</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">\"Junco stole my ramen. Sat on the fence and ate it piece by piece while I watched. - Robbed\"</ansi>");
        return true;
    }
    if (cmd == "sleep" || cmd == "rest") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You fall asleep to the stereo sound of the double springs, one on each side of the gap. The air is cold and thin. Tomorrow you will stand on the highest point of the entire Appalachian Trail. For now, you sleep in a cloud forest that has not changed since the last ice age.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " settles in for the night.", user.UserId());
        user.AddHealth(user.GetHealthMax());
        return true;
    }
    if (cmd == "filter") {
        SendUserMessage(user.UserId(), "<ansi fg=\"blue\">You filter water from one of the double springs. Cold enough to numb your fingers.</ansi>");
        return true;
    }
    return false;
}

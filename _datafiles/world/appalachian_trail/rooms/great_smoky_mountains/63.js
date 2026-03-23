// Kuwohi Summit - Mile 200.0, Elev 6,643' - HIGHEST POINT ON THE AT
// Data sourced from ATC publications, NPS resources, and Cherokee cultural records

var TRAIL_DATA = {
    mile: 200.0,
    elevation: 6643,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "No water at summit. Mt. Collins Shelter spring (3.1mi S)",
    shelter: "Mt. Collins Shelter (3.1mi S, mi 203)",
    nearestTown: "Gatlinburg, TN (23mi via Newfound Gap Rd)",
    terrain: "High-elevation summit. Spruce-fir ghost forest. Observation tower. Paved access road.",
    cellService: "Possible on clear days from tower",
    ahead: "Newfound Gap (7.0mi), Icewater Spring Shelter (11.1mi)",
    behind: "Double Spring Gap Shelter (2.5mi), Silers Bald Shelter (4.2mi)"
};

function onEnter(user, room) {
    if (user.GetMiscCharacterData("visited_kuwohi") != "true") {
        user.SetMiscCharacterData("visited_kuwohi", "true");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">===============================================</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">         K U W O H I   S U M M I T</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">         6,643 feet above sea level</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">   HIGHEST POINT ON THE APPALACHIAN TRAIL</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">===============================================</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">You have reached the rooftop of the AT. No point on the trail's</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">2,190-mile journey from Springer to Katahdin stands higher than</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">where you are standing right now.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Cherokee called this mountain Kuwahi\x97the mulberry place\x97</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">and believed it was home to the White Bear chief.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The name was officially restored in September 2024.</ansi>");
        SendUserMessage(user.UserId(), "");
        user.GrantXP(150, "reaching Kuwohi, the highest point on the Appalachian Trail");
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
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">*** HIGHEST POINT ON THE APPALACHIAN TRAIL ***</ansi>");
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain and wind at 6,643 feet. The observation tower sways perceptibly. Visibility is zero.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">You are standing inside a cloud. The tower vanishes ten feet up. This is the norm here\x97clear days are the exception.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A rare clear day on Kuwohi. The view extends a hundred miles. Mountains upon mountains upon mountains, fading from green to blue to gray.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The stars above Kuwohi are staggering\x97you are a mile and a quarter above sea level, above most of the atmosphere's dust and light pollution. The Milky Way is a river of light.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft | Temps 20+ degrees cooler than Gatlinburg.</ansi>");
        return true;
    }
    // CLIMB TOWER
    if (cmd == "climb" || cmd == "ascend") {
        if (rest.indexOf("tower") >= 0 || rest.indexOf("ramp") >= 0) {
            if (user.GetMiscCharacterData("easter_kuwohi_tower") != "found") {
                user.SetMiscCharacterData("easter_kuwohi_tower", "found");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You climb the spiral ramp of the observation tower, fifty-four feet above the summit. At the top, the world opens in every direction. Mountains extend to every horizon\x97row after row of ridges fading from green to blue to pale gray to nothing. You can see into five states. The wind is ferocious up here, tugging at your clothes. Far below, the ghost forest of dead firs surrounds the summit like a silver crown.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs to the top of the Kuwohi observation tower.", user.UserId());
                user.GrantXP(50, "climbing the Kuwohi observation tower");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You climb the tower again. The view is no less breathtaking the second time.</ansi>");
                SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " climbs the observation tower.", user.UserId());
            }
            return true;
        }
    }
    // TOUCH PLAQUE (easter egg)
    if (cmd == "touch" || cmd == "rub") {
        if (rest.indexOf("plaque") >= 0) {
            if (user.GetMiscCharacterData("easter_kuwohi_plaque") != "found") {
                user.SetMiscCharacterData("easter_kuwohi_plaque", "found");
                SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You place your hand on the summit plaque. 6,643 feet. The highest point you will touch on the entire Appalachian Trail. The bronze is cold, beaded with condensation from the clouds that live here. For a moment the fog parts and you glimpse the mountains stretching away forever in every direction, and you understand why the Cherokee considered this place sacred.</ansi>");
                user.GrantXP(75, "touching the Kuwohi summit plaque at the AT highpoint");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The plaque is cold and wet. The mountain remembers you.</ansi>");
            }
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " places a hand on the Kuwohi summit plaque.", user.UserId());
            return true;
        }
    }
    // PRAY / MEDITATE (honoring Cherokee sacred site)
    if (cmd == "pray" || cmd == "meditate") {
        if (user.GetMiscCharacterData("easter_kuwohi_meditate") != "found") {
            user.SetMiscCharacterData("easter_kuwohi_meditate", "found");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sit quietly on the summit of Kuwohi, the mulberry place, dwelling of the White Bear chief. The wind dies for a moment. The clouds thin. Something old and vast and patient seems to regard you from the mountain itself. Then the wind returns, the clouds close in, and the moment passes\x97but you carry it with you.</ansi>");
            user.GrantXP(50, "meditating on the sacred summit of Kuwohi");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You sit quietly. The mountain is listening.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits in quiet contemplation on the summit.", user.UserId());
        return true;
    }
    return false;
}

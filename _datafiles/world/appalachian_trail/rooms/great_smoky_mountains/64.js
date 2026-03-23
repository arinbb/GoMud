// Newfound Gap / Charlie's Bunion - Mile 207-220, Elev 5046-5800'
// Data sourced from ATC publications, NPS resources, and park history

var TRAIL_DATA = {
    mile: 210.0,
    elevation: 5046,
    state: "NC/TN Border",
    section: "Great Smoky Mountains",
    waterSource: "Icewater Spring at shelter (reliable). No water at Newfound Gap.",
    shelter: "Icewater Spring (mi 211), Pecks Corner (mi 219)",
    nearestTown: "Gatlinburg, TN (15mi W via US 441) / Cherokee, NC (18mi S via US 441)",
    terrain: "Road crossing at gap. Rocky ridge to Charlie's Bunion. Spruce-fir forest.",
    cellService: "Good at Newfound Gap parking lot, fades quickly on trail",
    ahead: "Pecks Corner Shelter (9.0mi), Tricorner Knob Shelter (14.0mi)",
    behind: "Kuwohi summit (7.0mi), Mt. Collins Shelter (7.0mi)"
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
        if (room.HasMutator("rain")) { SendUserMessage(user.UserId(), "<ansi fg=\"blue\">Rain sweeps across Newfound Gap. The parking lot is nearly empty. The ridge trail is a river.</ansi>"); }
        else if (room.HasMutator("fog")) { SendUserMessage(user.UserId(), "<ansi fg=\"8\">Cloud fills the gap, reducing visibility to car lengths. Headlights crawl along the road.</ansi>"); }
        else if (isDay) { SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Clear skies over the gap. The parking lot is packed. Charlie's Bunion is visible on the ridge to the northeast.</ansi>"); }
        else { SendUserMessage(user.UserId(), "<ansi fg=\"8\">The parking lot is empty and dark. The road is a ribbon of gray. Gatlinburg glows faintly to the northwest.</ansi>"); }
        SendUserMessage(user.UserId(), "<ansi fg=\"white\">Elevation: " + TRAIL_DATA.elevation + " ft</ansi>");
        return true;
    }
    // HITCH to town
    if (cmd == "hitch" || cmd == "hitchhike" || cmd == "thumb") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You stick out your thumb at the Newfound Gap parking lot. A minivan slows, the driver eyeing your pack and dirty clothes. Gatlinburg is fifteen miles west; Cherokee eighteen miles south. Both have food, showers, and outfitters. But the trail goes north. It always goes north.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sticks out a thumb at the edge of the parking lot.", user.UserId());
        return true;
    }
    // TOUCH memorial / READ memorial
    if (cmd == "touch" || cmd == "read") {
        if (rest.indexOf("memorial") >= 0 || rest.indexOf("rockefeller") >= 0 || rest.indexOf("plaque") >= 0) {
            if (user.GetMiscCharacterData("easter_rockefeller") != "found") {
                user.SetMiscCharacterData("easter_rockefeller", "found");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You read the Rockefeller Memorial plaque. Five million dollars in 1928 to help buy this land from the logging companies that were cutting it bare. Unlike Yellowstone or Yosemite, every acre of the Smokies was purchased from private owners. The plaque is simple, the story behind it anything but.</ansi>");
                user.GrantXP(40, "reading the Rockefeller Memorial at Newfound Gap");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The memorial stands quiet and dignified among the tourist chaos. Five million dollars, 1928. A forest saved.</ansi>");
            }
            return true;
        }
        if (rest.indexOf("bunion") >= 0 || rest.indexOf("charlie") >= 0) {
            if (user.GetMiscCharacterData("easter_bunion") != "found") {
                user.SetMiscCharacterData("easter_bunion", "found");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You study the rocky outcrop of Charlie's Bunion, jutting from the ridge like a geological afterthought. In the 1920s, hiker Charlie Conner showed his sore, swollen foot to Horace Kephart. Kephart looked at the rock formation above, looked back at the foot, and said he would get the name on a government map. He was a man of his word. The name stuck, and now a million people a year know this rock by the name of a man's podiatric complaint.</ansi>");
                user.GrantXP(40, "learning the story of Charlie's Bunion");
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">Charlie's Bunion. Named for a man's sore foot. Preserved on a government map. This is the AT at its finest.</ansi>");
            }
            return true;
        }
    }
    return false;
}

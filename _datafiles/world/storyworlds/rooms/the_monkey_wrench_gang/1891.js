
// The Dam Base - blow the dam easter egg
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The canyon walls shimmer and blur, the smell of sage fading back into the smell of old paper and library dust. The Colorado River recedes like a dream you can almost hold. The red rock dissolves into sentences, the blue sky into margins, and then you are standing in the Grand Library with a sun-bleached paperback in your hands.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands very still for a moment, the desert light fading from their skin, then dissolves into the pages of a paperback and is gone.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "blow" || cmd == "explode" || cmd == "destroy" || cmd == "dynamite") {
        var target = rest.toLowerCase();
        if (target.indexOf("dam") >= 0 || target == "" || target.indexOf("wall") >= 0 || target.indexOf("concrete") >= 0) {
            var key = "mwg_dam_dream";
            if (user.GetMiscCharacterData(key) != "done") {
                user.SetMiscCharacterData(key, "done");
                user.GrantXP(300, "the dream of dreams");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You close your eyes and let Hayduke's dream run. The charges set in the penstock tunnels, the primacord running back up through the canyon, the long drive to the mesa top to watch. The detonator. The pause. And then -- the sound first, a deep crack that the canyon amplifies into something geological, and then the concrete beginning to fail along the fault lines in the arch, and then the water, the full weight of Lake Powell finding the failure and enlarging it, and then the roar, the enormous roar, and the Colorado River running red and wild and free again through the gorge, finding its old canyon, remembering its old shape, the red mud filling the canyon below and the canyon walls of Glen Canyon emerging slowly from the retreating lake like a face rising from water. It is a beautiful dream. It is the most beautiful dream any of them have. It has not happened yet. It will not happen in this book. But somewhere in the future, if the water goes low enough and the will goes high enough, the river might get its canyon back by other means. The dream keeps you warm on cold nights in the canyon. It is enough, for now.</ansi>");
                SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+300 XP -- the dream of the gang)</ansi>");
                if (user.HasQuest(220)) {
                    var step = user.GetMiscCharacterData("quest_220_step");
                    if (step == "4" || step == "3" || step == "2" || step == "1") {
                        user.SetMiscCharacterData("quest_220_step", "5");
                        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest: The Monkey Wrench Gang -- stood at the dam.)</ansi>");
                    }
                }
            } else {
                SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The dam still stands. The dream still runs. Let it run.</ansi>");
            }
            return true;
        }
    }

    return false;
}

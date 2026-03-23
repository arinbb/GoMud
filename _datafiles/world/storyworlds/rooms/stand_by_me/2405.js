// Stand By Me -- The Railroad Bridge (2405)
// ZONE COMMANDS: train / run (easter egg, 250 XP)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The bridge sways once and the image collapses. The river sound fades. You are back in the Grand Library, slightly breathless.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the bridge like a cloud shadow passing over water.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "train" || cmd == "run") {
        handleTrain(user, room);
        return true;
    }

    return false;
}

function handleTrain(user, room) {
    var key = "easter_sbm_bridge";
    if (user.GetMiscCharacterData(key) == "found") {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You remember the sound of that train. You will always remember the sound of that train.</ansi>");
        return;
    }
    user.SetMiscCharacterData(key, "found");
    user.GrantXP(250, "running the bridge");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The train horn sounds again. Closer. Much closer. The bridge begins to vibrate -- you feel it in your feet before you hear it, a deep rhythmic shudder building through the iron rails. Then you see it coming around the bend: a freight engine, enormous, filling the tunnel of trees, horn screaming.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"15\">'TRAIN!' Vern screams. You run. Everyone runs. The planking blurs under your feet. The train is louder than everything -- louder than thought, louder than fear. You reach the south end and throw yourself off the track bed and the train passes six inches from your heels, the wind of it rolling you over in the gravel, and then it is past and the bridge is empty and everyone is alive.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">You lie in the gravel catching your breath. You are twelve years old and you have never been more alive than this moment. You will never be this alive again. You will always remember this.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(+250 XP: You ran the bridge.)</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sprints across the bridge as a freight train bears down on them, throwing themselves clear at the last second.", user.UserId());
}


// Forbidden Planet - Altairas Garden
// Quest step 3: explore the garden
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The impossible garden fades petal by petal. Altaira's voice becomes the rustle of pages. The crystalline blooms dissolve into the amber light of the Grand Library.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " fades like morning dew among Altaira's flowers, dissolving back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pet" || (cmd == "touch" && rest.indexOf("tiger") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">You reach out toward the tiger. It turns its enormous head and regards you with amber eyes that contain no hostility and no uncertainty. It allows you to touch its striped brow. The fur is warm and dense. The tiger exhales once, a rumbling sound from deep in its chest that is more engine than purr. It has never known a reason to be afraid of anything. You feel, for a moment, what that might be like.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " touches the tiger. It endures this with regal patience.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(270) && user.GetMiscCharacterData("fp_q3_garden") != "done") {
        user.SetMiscCharacterData("fp_q3_garden", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest update: You have explored Altaira's garden.)</ansi>");
    }
    return true;
}

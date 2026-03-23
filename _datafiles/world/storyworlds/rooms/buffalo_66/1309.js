
// Buffalo '66 - Photo Booth Alcove
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The warm light of the photo booth flickers and the alcove folds away like a closing curtain. The Grand Library opens around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes behind the photo booth curtain and does not come back out.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "pose" || cmd == "smile" || cmd == "sit") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">You pull the curtain shut and sit on the narrow bench. The booth is small and warm and close. The light is soft, almost kind — the kindest light in all of Buffalo.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">You look into the camera lens. It is just a machine, just glass and light, but for a moment it feels like the only thing in the world that is looking at you without judgment. You do not have to perform. You do not have to explain. You just have to sit here and be whoever you are.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">The flash goes off. Once. Twice. Three times. Four times. Four frames. In the first you look startled. In the second you look lost. In the third you look like you might be about to cry. In the fourth — in the fourth you are almost smiling. Almost. It is the closest you have come in a long time.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The strip of photos slides out of the slot, still warm and damp from the chemicals. Four small frames of a face learning how to be human again.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sits in the photo booth. The flash goes off four times.", user.UserId());

        if (user.GetMiscCharacterData("buffalo66_photo") != "found") {
            user.SetMiscCharacterData("buffalo66_photo", "found");
            user.GrantXP(200, "taking a photo booth picture");

            var item = CreateItem(165);
            if (item) {
                user.GiveItem(item);
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You take the photo strip. Four frames of something real. [+200 XP] [Received: photo booth strip]</ansi>");
            }
        }
        return true;
    }

    return false;
}

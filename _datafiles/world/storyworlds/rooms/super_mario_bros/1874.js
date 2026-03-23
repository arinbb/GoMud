
// Bowsers Bridge - Easter egg: cut bridge / hit axe
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The bridge fades. The lava dims. Bowser's silhouette dissolves into pixel static. You are back in the Arcade, your heart rate returning to normal, the final castle receding into memory where it belongs.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " pixelates in the lava-light of Bowser's bridge and vanishes back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if ((cmd == "cut" && rest.indexOf("bridge") >= 0) ||
        (cmd == "hit" && (rest.indexOf("axe") >= 0 || rest.indexOf("bridge") >= 0)) ||
        (cmd == "use" && rest.indexOf("axe") >= 0) ||
        (cmd == "take" && rest.indexOf("axe") >= 0) ||
        (cmd == "grab" && rest.indexOf("axe") >= 0)) {
        if (user.GetMiscCharacterData("mario_axe_hit") == "true") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You slam the axe again. The bridge begins to fall away, plank by plank, chains snapping. Bowser drops into the lava with a tremendous splash. The princess is through the door ahead. It works every time. It has always worked every time. The axe is the oldest solution in the Mushroom Kingdom.</ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " hits the axe. The bridge falls. Bowser drops with a roar into the lava below.", user.UserId());
            return true;
        }
        user.SetMiscCharacterData("mario_axe_hit", "true");
        user.GrantXP(300, "hitting the axe and bringing down Bowsers bridge");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You sprint across the bridge while Bowser advances, fire breath scorching the planks behind you. Your hand hits the axe at full speed. The chains snap immediately, the sound enormous in the stone corridor, and the bridge planks fall away one by one in a cascade of collapsing wood. Bowser has a single moment of pure surprise -- his expression, even in pixelated form, readable as: oh. Then he drops. A tremendous splash from the lava below. The roar cuts off. The lava settles. The door ahead opens.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">+300 XP for bringing down Bowsers bridge with the axe!</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " hits the axe at a full sprint. The bridge collapses. Bowser drops into the lava with a roar. The door to the throne room opens.", user.UserId());
        return true;
    }

    return false;
}

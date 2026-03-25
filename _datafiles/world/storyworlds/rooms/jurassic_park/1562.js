
// Jurassic Park - The Kitchen
// Easter egg: "hide" triggers raptor hunting sequence, first time = 300 XP
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(130) && !user.GetMiscCharacterData("jp_quest_kitchen")) {
        user.SetMiscCharacterData("jp_quest_kitchen", "true");
        // Quest step 5: Survive the kitchen raptor encounter
        user.Command("quest advance 130");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Quest updated: You have survived the kitchen.)</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You duck under a prep table and the steel surface above you becomes the projector screen and the screen becomes white light and the kitchen is gone and the Library is around you, still and safe and smelling of old paper instead of cold storage and predator.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slides under a prep table and does not reappear.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "hide") {
        var easterKey = "jp_kitchen_hide";
        if (user.GetMiscCharacterData(easterKey) != "found") {
            user.SetMiscCharacterData(easterKey, "found");
            user.GrantXP(300, "surviving the kitchen raptor sequence");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You press yourself against the far side of the prep table and breathe through your mouth. Very slowly.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The footfall is quiet and deliberate. One talon-click. Silence. Then another, from a different angle. It's circling. It uses geometry. The raptor uses geometry.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">The reflection in the oven door shows the kitchen behind you. The reflection shows the raptor. The raptor is six feet from you. Its head is low. Its eye is amber and fixed.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You do not breathe. You do not move. The raptor's head tilts — that precise, bird-like angle, processing. A long moment. Geological time.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">Then a ladle somewhere in the kitchen sways and clinks against its neighbor and the raptor's head snaps toward the sound with a velocity that the eye can barely follow. It moves. You run.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+300 XP — You survived the kitchen.)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"red\">You press against the prep table and watch the oven door reflection. The raptor circles. You hold your breath. It has been here before. So have you. You know the ladle will eventually swing. You wait for the ladle.</ansi>");
        }
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flattens against a prep table and goes completely still.", user.UserId());
        return true;
    }

    if (cmd == "look" && (rest.indexOf("oven") >= 0 || rest.indexOf("reflection") >= 0 || rest.indexOf("door") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">The stainless steel oven door is a mirror. You see yourself in it, distorted by the curve of the metal. You see the kitchen behind you. For a moment you think you see something else — a shape at the far end of the kitchen, low, watching the space you just looked away from. The reflection shows you looking at the reflection. The reflection might show something else.</ansi>");
        return true;
    }

    if (cmd == "take" && (rest.indexOf("ladle") >= 0 || rest.indexOf("pot") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">You reach for the ladle. Your hand brushes the rack. Three ladles swing. They ring against each other in the silence of the kitchen with the volume of a cathedral bell. Everything in the room that was waiting becomes something that is moving. Toward you. Very fast.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " knocks a ladle off the pot rack. The clattering echoes through the kitchen.", user.UserId());
        return true;
    }

    return false;
}

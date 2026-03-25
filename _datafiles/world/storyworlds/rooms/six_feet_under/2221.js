// Six Feet Under - The Arrangement Room
// Room 2221
var LIBRARY_ROOM = 3;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The arrangement room softens. The casket samples fade. The cream tablecloth dissolves into warm light and the Grand Library forms around you.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " slips quietly out of the arrangement room.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "sit" || (cmd == "look" && rest.indexOf("chair") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You sit in one of the upholstered chairs. The chair is comfortable in a deliberate way -- not luxurious, just supportive. The kind of chair that says: you can stay here as long as you need. The tissue box is within reach. The brochures are in front of you. Someone has thought carefully about what a grieving person needs in a room, and this room is the answer.</ansi>");
        return true;
    }

    if (cmd == "look" && (rest.indexOf("casket") >= 0 || rest.indexOf("caskets") >= 0 || rest.indexOf("coffin") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You run a hand along the edge of the display model nearest you. The wood is smooth. Someone has polished it. The brass fittings are solid and cool. This is an object that has been made with craft and care, and its purpose is to hold someone's body while the people who loved them say goodbye. You feel the weight of that.</ansi>");
        return true;
    }

    if (cmd == "read" || (cmd == "look" && rest.indexOf("brochure") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">The brochure lays out options in clean, neutral language. 'Traditional Service.' 'Direct Cremation.' 'Personalized Memorial.' Each option has a price and a description of what is included. What is not included is the part where you go home afterward and the house is different and always will be. That part is not in the brochure.</ansi>");
        return true;
    }

    if (cmd == "quest" || cmd == "advance") {
        if (user.HasQuest(360) && !user.GetMiscCharacterData("sfu_quest_arrangement")) {
            user.SetMiscCharacterData("sfu_quest_arrangement", "done");
        }
        return false;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(360) && !user.GetMiscCharacterData("sfu_quest_arrangement")) {
        user.SetMiscCharacterData("sfu_quest_arrangement", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have visited the arrangement room. The quest advances.</ansi>");
    }
    return true;
}
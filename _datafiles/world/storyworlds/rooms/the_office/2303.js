// The Office - The Bullpen
// EASTER EGG: 'look dwight' then 'put stapler in jello' or just 'jello' -- 200 XP
var LIBRARY_ROOM = 1;
var QUEST_ID = 380;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You walk south through reception and back through the lobby into the Grand Library. Jim gives you a look on the way out that says he wishes he could do the same.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " heads south through reception. Jim watches them go with an expression of philosophical longing.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Easter egg: look dwight triggers hint
    if (cmd == "look" && (rest.indexOf("dwight") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You examine Dwight's desk closely. The nameplate. The beet calendar. The bobblehead. And there -- the stapler. Just sitting there, completely unprotected, surrounded by everything a mischievous person would need. Jim looks up at you from across the aisle with the faintest possible smile.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">(Jim once said: 'I saw on the internet that you can suspend a stapler in jello.' He was not speaking hypothetically.)</ansi>");
        return true;
    }

    // Easter egg: put stapler in jello / jello
    if (cmd == "jello" || (cmd == "put" && rest.indexOf("stapler") >= 0 && rest.indexOf("jello") >= 0) || (cmd == "stapler" && rest.indexOf("jello") >= 0)) {
        if (user.GetMiscCharacterData("office_easter_jello") != "found") {
            user.SetMiscCharacterData("office_easter_jello", "found");
            user.GrantXP(200, "Jello prank");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You acquire a box of lime jello from somewhere, dissolve it in the break room, and carefully set Dwight's stapler inside before it sets. You carry it back to his desk and place it perfectly. Jim watches the whole operation from behind his monitor. When it is done, he swivels his chair toward the camera and raises his coffee cup in a small toast.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"10\">You feel 200 years younger and significantly more mischievous. (+200 XP)</ansi>");
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">Dwight's stapler is already in jello. You did this. He knows it was someone. He will never be able to prove it.</ansi>");
        }
        return true;
    }

    return false;
}

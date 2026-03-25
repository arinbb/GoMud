
// Forbidden Planet - The Tempest (secret room)
// Quest step 7: discover the truth
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The island that was never an island dissolves. The light that came from nowhere goes back to nowhere. You are left, for a moment, in complete darkness -- and then the Grand Library appears around you, every lamp lit, every book in its place. You are back. You know what you know.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " steps out of the metaphor and returns to the Grand Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "read" && rest.indexOf("book") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">You open the book on the lectern. The page shows, in handwriting that is part Morbius and part yours and part neither, the complete truth:</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Krell completed their machine and forgot one final variable. They forgot about the id. The dark, primitive, inaccessible part of the mind that knows nothing of civilization, morality, or restraint. The machine amplified their intellects but also their unconscious. Their monsters came for them in the night. In one catastrophic twenty-four hours, the greatest civilization in the galaxy was destroyed by its own sleeping minds.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"15\">Morbius used the machine. Morbius's intellect was tripled. Morbius's id was also connected to the machine. When the colony threatened his solitude -- when they wanted to leave and take Altaira with them -- Morbius's sleeping mind sent a monster. He does not know. He will not believe. The monster is as real as Caliban is real, which is to say: entirely.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reads from the book on the lectern with an expression of terrible clarity.", user.UserId());
        return true;
    }

    return false;
}

function onEnter(user, room) {
    if (user.HasQuest(270) && user.GetMiscCharacterData("fp_q7_truth") != "done") {
        user.SetMiscCharacterData("fp_q7_truth", "done");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You have found the room behind the study, the truth behind the scholarship, the Caliban behind the Prospero.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(Quest update: You have discovered the truth.)</ansi>");

        var allSteps = user.GetMiscCharacterData("fp_q2_robby") == "done" &&
                       user.GetMiscCharacterData("fp_q3_garden") == "done" &&
                       user.GetMiscCharacterData("fp_q4_lab") == "done" &&
                       user.GetMiscCharacterData("fp_q5_shaft") == "done" &&
                       user.GetMiscCharacterData("fp_q6_attack") == "done";

        if (allSteps) {
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The quest is complete. The full truth of Altair IV has been witnessed.</ansi>");
            user.GrantXP(5000, "completing Monsters from the Id");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+5000 XP -- Monsters from the Id completed!)</ansi>");
            var disc = CreateItem(255);
            user.GiveItem(disc);
            user.SetMiscCharacterData("souvenir_forbidden_planet", "collected");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">A small disc of Krell metal appears in your hand. It is warm. On one face, the Krell script for something Morbius translated as: what we have made must not be what we are.</ansi>");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(You receive: a Krell metal disc.)</ansi>");
        }
    }
    return true;
}


// Matilda - The Chokey (Easter Egg: stand still)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The Chokey door swings open on its own, and beyond it is not the corridor but a warm golden light. You step through, leaving the darkness and the nails and the glass behind. The Grand Library wraps around you like a blanket after a nightmare.</ansi>");
        SendRoomMessage(room.RoomId(), "The Chokey door opens and golden light floods in. " + user.GetCharacterName(true) + " steps through and is gone. The door swings shut again.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "stand" && rest.indexOf("still") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"8\">You stand perfectly still in the darkness. You cannot sit — the nails prevent it. You cannot lean — the glass prevents it. You can only stand, rigid, arms pressed to your sides, breathing shallow breaths of stale air. Minutes pass. They feel like hours. The darkness is total. You hear your own heartbeat, your own breathing, and the faintest sound of a child crying somewhere — or maybe that is you. This is what the Trunchbull does to children who displease her. This is the Chokey. This is real.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " stands perfectly still in the Chokey, rigid and trembling in the darkness.", user.UserId());

        if (user.GetMiscCharacterData("matilda_chokey_still") != "found") {
            user.SetMiscCharacterData("matilda_chokey_still", "found");
            user.GrantXP(100, "enduring the Chokey");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You understand now. This is what they endure. (+100 XP)</ansi>");
        }

        if (user.HasQuest(100)) {
            user.GiveQuest(100);
        }

        return true;
    }

    return false;
}

// MTVs The State - Porcupine Racetrack (2384)
// Quest step: attend the porcupine race
// Easter egg: 'bet' or 'race' => 200 XP
var LIBRARY_ROOM = 1;

function onEnter(user, room) {
    if (user.HasQuest(420) && user.GetMiscCharacterData("the_state_quest_race") != "done") {
        user.SetMiscCharacterData("the_state_quest_race", "done");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">The announcer's voice rises: \"AND THEY ARE OFF! Quilliam takes an early lead with characteristic aggression! Spinal running a conservative second! And what is this — Needlepoint has stopped to sniff something on the turn! Needlepoint! THIS IS NOT THE TIME!\" You have attended a porcupine race.</ansi>");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Quest updated: Attend the porcupine race.)</ansi>");
        user.Command("quest", 0);
    }
    return true;
}

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The racetrack fades. The announcer's voice follows you out: '...and I'm outta heeere!' You are back in the Grand Library. You are changed.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " vanishes from the racetrack. The porcupines do not notice.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "bet") {
        var key = "the_state_race_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You place a bet on Needlepoint. The odds are 4 to 1. The Porcupine Announcer notes your bet with professional approval.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " places a bet. The Porcupine Announcer nods gravely.", user.UserId());
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">Needlepoint surges from the gate with an energy that surprises everyone, especially Needlepoint.</ansi>");
        if (user.GetMiscCharacterData(key) != "found") {
            user.SetMiscCharacterData(key, "found");
            user.GrantXP(200, "porcupine race easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">(+200 XP — Needlepoint wins!)</ansi>");
        }
        return true;
    }

    if (cmd == "race") {
        var key2 = "the_state_race_egg";
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You attempt to enter the race. The Porcupine Announcer consults the rulebook at length. The rulebook does not technically prohibit this. A gate is opened.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " enters the porcupine race. The crowd of eight reacts with the volume of forty.", user.UserId());
        SendUserMessage(user.UserId(), "<ansi fg=\"11\">You do not win. You come in third. Behind Quilliam and a porcupine you cannot identify. This is still remarkable.</ansi>");
        if (user.GetMiscCharacterData(key2) != "found") {
            user.SetMiscCharacterData(key2, "found");
            user.GrantXP(200, "porcupine race easter egg");
            SendUserMessage(user.UserId(), "<ansi fg=\"11\">(+200 XP — A creditable third place.)</ansi>");
        }
        return true;
    }

    return false;
}

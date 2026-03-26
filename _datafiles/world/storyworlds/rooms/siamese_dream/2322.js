// ZONE COMMANDS:
//   ask jimmy (2322) - talk to Jimmy about the sessions, tracks quest progress
//   return - goes back to Grand Library

var LIBRARY_ROOM = 1;
var QUEST_ID = 390;
var SOUVENIR_ID = 315;
var LAYERS_KEY = "siamese_layers_heard";
var JIMMY_TALKED_KEY = "siamese_jimmy_talked";

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"13\">The guitar layers peel away one by one until there is nothing left but tape hiss, and the hiss fades to silence, and you are back in the Grand Library with the smell of warm electronics still in your nose.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into a wash of purple guitar distortion, fading back to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    return false;
}

function onIdle(room) {
    var players = room.GetPlayers();
    var i;
    for (i = 0; i < players.length; i++) {
        var user = GetUser(players[i]);
        if (!user) {
            continue;
        }

        if (!user.HasQuest(QUEST_ID)) {
            continue;
        }

        var layers = parseInt(user.GetTempData(LAYERS_KEY)) || 0;
        var talked = user.GetTempData(JIMMY_TALKED_KEY);

        if (layers >= 4 && talked == "true") {
            if (user.GetMiscCharacterData("souvenir_siamese_dream") != "collected") {
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"13\">You have heard both sides of it now. The impossible beauty of the layered guitars in the live room -- the wall of sound built one track at a time, hundreds of takes stacked into a cathedral of distortion. And here, the human cost. Jimmy on the curb, struggling. The band fracturing. The people breaking down while the music gets better and better.</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"13\">This is what Siamese Dream is. Not just an album. A document of people pushing past what they could survive to make something that would outlast all of it -- the addiction, the depression, the broken air conditioning, the broken friendships. The music was worth it. The cost was real.</ansi>");
                SendUserMessage(user.UserId(), "");
                SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">A battered Big Muff Pi distortion pedal appears in your hands, the gain knob all the way up. This is the sound of Siamese Dream. Everything beautiful filtered through fuzz until it becomes something new.</ansi>");
                user.GiveItem(CreateItem(SOUVENIR_ID));
                user.SetMiscCharacterData("souvenir_siamese_dream", "collected");
            }
        }
    }
    return false;
}

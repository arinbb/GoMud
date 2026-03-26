// The Loft - Blonde on Blonde (1702)
// ZONE COMMANDS: return (exit zone), search (reveal secret exit to Chelsea Hotel), look johanna (shifting descriptions)
var LIBRARY_ROOM = 1;

var johannaDescriptions = [
    "<ansi fg=\"cyan\">You turn to look at Johanna and she is the candlelight -- not standing in it but made of it, flickering at the edges, warm and impossible to hold. She was there a moment ago. She is there now. But 'there' keeps moving.</ansi>",
    "<ansi fg=\"cyan\">Johanna is at the window. No -- she is the window, or the light through it, or the city beyond it seen through old warped glass. She has the shape of a woman the way a song has the shape of a feeling. You cannot look at her directly. You can only see her in the spaces she has just left.</ansi>",
    "<ansi fg=\"cyan\">For one moment Johanna is completely visible -- dark hair, a face that holds every face Dylan ever wrote about, eyes that are simultaneously looking at you and through you and at something behind you that you will never see. Then a candle gutters and she is the room again.</ansi>",
    "<ansi fg=\"cyan\">Johanna is in the painting. No -- she is reflected in the window glass. No -- she is the sound the heat pipes make when they knock. She is everywhere the song put her, which is everywhere, which is nowhere you can reach.</ansi>",
    "<ansi fg=\"cyan\">You look at Johanna and for one vertiginous second you understand the whole album -- every song is about this, about the gap between presence and absence, about the person who fills the room by not being in it. Then the understanding passes and she is just candlelight again.</ansi>"
];

function onEnter(user, room) {
    var loftKey = "bob_visited_loft";
    if (user.GetTempData(loftKey) != "yes") {
        user.SetTempData(loftKey, "yes");
        user.SetTempData("johanna_look_index", "0");
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You climb into the loft and the air changes -- warmer, closer, lit by candles instead of fluorescent tubes. This is the room the song lives in. Louise on the mattress. The painting on the wall that will not hold still. And Johanna -- Johanna is here the way a memory is here, filling every corner, present in the flicker of every candle, gone the moment you try to focus on her. The visions of Johanna have taken this place.</ansi>");
    }
    return true;
}

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The candles go out one by one, and in the darkness between the last flame and the first breath of library air, you think you see Johanna clearly for the first time. Then the loft is gone and you are home.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves into the candlelight like a vision that was never quite there.", user.UserId());
        user.SetTempData("visited_blonde_on_blonde", "");
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "look") {
        var target = rest.toLowerCase();
        if (target.indexOf("johanna") >= 0) {
            var indexStr = user.GetTempData("johanna_look_index");
            var index = 0;
            if (indexStr != "") {
                index = parseInt(indexStr, 10);
                if (isNaN(index)) {
                    index = 0;
                }
            }
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), johannaDescriptions[index]);
            index = (index + 1) % johannaDescriptions.length;
            user.SetTempData("johanna_look_index", String(index));
            return true;
        }
    }

    if (cmd == "search") {
        if (user.GetTempData("bob_found_chelsea") != "yes") {
            user.SetTempData("bob_found_chelsea", "yes");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You search the loft -- behind the painting, under the mattress, along the baseboards. Near the far wall, behind a curtain you had not noticed before, there is a door. It was not there a moment ago, or it was always there and you could not see it until you looked. The door is old wood with a brass room number that keeps changing. Through it: the smell of a different city, a different building, a different year. The Chelsea Hotel.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"3\">You have discovered a secret exit: <ansi fg=\"secret-exit\">door</ansi></ansi>");
            SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " finds something hidden behind the curtain -- a door that was not there before.", user.UserId());
        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">The door to the Chelsea Hotel is there behind the curtain, its brass room number still shifting. You have already found it.</ansi>");
        }
        return true;
    }

    return false;
}

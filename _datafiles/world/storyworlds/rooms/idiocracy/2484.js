// Idiocracy -- The White House Lawn (2484)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The lawn and the monster trucks and the Brawndo flag fade to the Screening Room's quieter light. You are back in the Library. You think about the White House -- the building, the shape of it, the way it held its gravity despite everything done to it. Some buildings carry meaning through time whether or not the people inside them do. You think about that. You think about what it takes to be a shape that means something. You don't arrive anywhere with this thought but you carry it anyway.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " leaves the White House lawn and returns to the Library.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "stand" && rest.toLowerCase().indexOf("podium") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step behind the presidential podium. The Presidential Seal catches the sun. The index cards say: ELECTROLYTES. WE GOT THIS. FIRE WEAPON. AMERICA. The press corps cameras turn toward you because you are at the podium and the cameras always turn toward the podium. You stand there for a moment. You are not President. Nobody out here knows that. You look out at the lawn and the monster trucks and the half-pipe and the Brawndo sprinkler watering nothing. You do not say anything. The cameras keep rolling. This is the most powerful silence anyone has maintained at this podium in at least forty years.</ansi>");
        return true;
    }

    if (cmd == "skate" || cmd == "halfpipe") {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You drop into the half-pipe. The presidential half-pipe, installed as a recreational initiative by the Camacho administration and maintained by the Department of Athletic Wellness. You ride it for a minute. It is a good half-pipe actually. Well-maintained. The transition is smooth. The Secret Service watches from the perimeter. One of them gives you a thumbs up. This is the best thing that has happened to you in 2505.</ansi>");
        return true;
    }

    return false;
}

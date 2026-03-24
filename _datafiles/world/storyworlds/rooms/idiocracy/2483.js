// Idiocracy -- The Time Machine (2483)
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The alley and the silver porta-potty and Frito's confident nod fade to projection white and you are back in the Screening Room. The time machine did not work. It was never going to work. But Frito believed in it completely and built it with his own hands and labeled it and stood next to it waiting for evidence of its function with a patience that is almost admirable. You think about what it means to believe completely in something that does not work. You decide this is too close to several things you know and you stop thinking about it.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " exits the alley before the time machine can fail to do anything at them.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "use" || cmd == "enter") {
        var target = rest.toLowerCase();
        if (target.indexOf("machine") >= 0 || target.indexOf("time") >= 0 || target.indexOf("booth") >= 0 || target.indexOf("potty") >= 0 || cmd == "enter") {
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You step inside the time machine. The door closes. The smell inside is -- you do not investigate the smell. You press some buttons on the CB radio keypad. You wait. The toaster does not heat up. The CB crackles. A voice says '-- BRAWNDO -- IT'S GOT --' and then static. The door opens again. You are in the same alley. Frito nods at you from outside. 'DID IT WORK?' he asks. You consider your answer carefully. 'Not yet,' you say. Frito nods more. 'YEAH,' he says. 'SOMETIMES IT TAKES TWO TRIPS.'</ansi>");
            return true;
        }
    }

    if (cmd == "read" && rest.toLowerCase().indexOf("sign") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">TIME MASHEEN -- DO NOT TUCH. PROPERTY OF FRITO PENDEJO ESQ -- COSTCO LAW DEGREE CERTIFIED OWNER. IF YOU ARE FROM THE PAST PLEASE TAKE ME WITH YOU I HAVE MONEY. You read this three times. The MASHEEN. The ESQ. The money he would bring. You think about the hope in the last line -- the careful articulation of value, I have money, as if whoever came from the past would need to be convinced, as if the argument for rescue is economic. This is Frito. This is exactly Frito.</ansi>");
        return true;
    }

    return false;
}

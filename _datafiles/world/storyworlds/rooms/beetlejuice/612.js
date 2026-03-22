
// The Waiting Room - ticket assignment on enter, interactions
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {
    if (cmd == "return") {
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The waiting room number display spins wildly, the numbers blurring. When it stops, the counter reads \"LIBRARY\" and you're standing in one.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + "'s number is called -- but instead of going to a window, they vanish entirely.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    // Ring the bell at the counter
    if (cmd == "ring" && rest.indexOf("bell") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You ring the brass bell on the counter. It makes a flat, sad sound. Miss Argentina looks up with the expression of someone who has been interrupted for the nine millionth time.</ansi>");
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">\"Do you have an appointment? No? Then take a number and SIT DOWN.\" She points a green finger at the bench. \"Juno's through that door if you're feeling brave, but don't say I didn't warn you.\"</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " rings the bell at the counter. Miss Argentina does not look pleased.", user.UserId());
        return true;
    }

    // Take a number / take ticket
    if (cmd == "take" && (rest.indexOf("number") >= 0 || rest.indexOf("ticket") >= 0)) {
        var ticketNum = Math.floor(Math.random() * 900000) + 9000000;
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You pull a ticket from the dispenser. It reads: #" + ticketNum + ". The display currently shows #3,457,893. You do the math. The math is not encouraging.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes a number from the dispenser and stares at it with dawning horror.", user.UserId());
        return true;
    }

    // Read magazines
    if (cmd == "read" && rest.indexOf("magazine") >= 0) {
        SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You flip through a copy of \"Afterlife Weekly.\" The cover promises \"Interview with the Headless Horseman: 'I've Really Lost My Head Over This Career.'\" The articles inside include tips on maintaining your ectoplasmic form and a recipe column called \"Cooking for the Dead (You Won't Taste It Anyway).\" It's dated 1987.</ansi>");
        return true;
    }

    // Try the unmarked door
    if (cmd == "open" && (rest.indexOf("unmarked") >= 0 || rest.indexOf("wrong") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"red\">Miss Argentina's head snaps up. \"I wouldn't open that door if I were you, honey. That's not where you want to go. Trust me.\" She pauses. \"It's Saturn. Sandworms. Very unpleasant. Very fatal. Well, more fatal.\"</ansi>");
        return true;
    }

    return false;
}

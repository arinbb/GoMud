
// Souvenir: Lunch Bag with a Note from Carl (Billy Madison)

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You open the lunch bag. The fold at the top gives way with a small paper sound. Inside: a perfect peanut butter sandwich on whole wheat in a little plastic bag. Extra chips. An apple juice box. And the note, folded in quarters.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You unfold the note. Carl's block capitals, dark and even: YOU CAN DO IT.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You read it again. YOU CAN DO IT. You believe it. You believe it completely. The sandwich is perfect. The chips are extra. The juice box is cold somehow. You eat and you believe it.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " opens a brown paper lunch bag and reads a small note inside with an expression of sincere conviction.", user.UserId());
    return true;
}

function onCommand_open(user, item, room) {
    return onCommand_use(user, item, room);
}

function onCommand_read(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The note is folded in quarters. You unfold it carefully. Carl's block capitals, written with a good pen on lined paper: YOU CAN DO IT. Below that, smaller: I MADE EXTRA CHIPS TODAY. Below that, even smaller: -- CARL.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " reads a folded note from a lunch bag.", user.UserId());
    return true;
}

function onCommand_eat(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The peanut butter sandwich is on whole wheat, cut diagonally, which is the right way to cut it. The chips are extra. The juice box is apple. It is the best lunch. It is always the best lunch. Carl knows what he's doing.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " eats a peanut butter sandwich from a brown paper bag with total contentment.", user.UserId());
    return true;
}

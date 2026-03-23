
function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You raise the World's Best Boss mug and take a sip. The coffee is lukewarm. It has always been lukewarm -- not cold enough to be bad, not hot enough to be right, precisely in the middle range where things that have been good are becoming something else. You feel, holding this mug, a warmth that is genuinely complicated: the warmth of someone who loves completely and without reservation and sometimes without self-awareness, and whose love is real despite every obstacle the universe has placed between it and expression.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">You feel like you could manage a regional branch of a mid-size paper company. With heart.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " takes a sip from the World's Best Boss mug. The expression is hard to describe.", user.UserId());
    return true;
}

function onCommand_read(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">'World's Best Boss.' In plain black text on white ceramic. No asterisk. No citation. No hedging. Michael Scott read this and said: yes, that's right, and he has never questioned it, and the remarkable thing is that by the end of nine seasons of television, you find that you do not entirely disagree.</ansi>");
    return true;
}

function onCommand_drink(user, item, room) {
    return onCommand_use(user, item, room);
}

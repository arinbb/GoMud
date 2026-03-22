
function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You squeeze the tiny handlebars and the miniature horn lets out a surprisingly loud HONK HONK! The white streamers flutter cheerfully.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " <ansi fg=\"yellow\">squeezes a tiny bicycle horn. HONK HONK!</ansi>", user.UserId());
    return true;
}

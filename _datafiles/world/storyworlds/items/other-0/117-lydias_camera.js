
// Lydia's Camera
// Usable item - "photographs" the room, revealing ghostly details

function onCommand_use(user, item, room) {

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You raise the camera to your eye and peer through the viewfinder.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"14\">Through the viewfinder, you see the room as it truly is -- shadows deeper,</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"14\">colors stranger. Figures flicker at the edges of the frame that weren't</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"14\">there a moment ago. Faint outlines of people who once stood here linger</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"14\">like afterimages. The walls seem thinner, as if the space between the</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"14\">living world and whatever lies beyond it is barely there at all.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">The camera clicks and whirs, advancing the film on its own.</ansi>");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">When you lower it, everything looks normal again. But you know what you saw.</ansi>");

    SendRoomMessage(room.RoomId(), user.GetCharacterName(true)+" raises <ansi fg=\"item\">Lydia's vintage camera</ansi> and takes a photograph. The flash illuminates the room in a cold, pale light for just an instant.", user.UserId());

    return true;
}

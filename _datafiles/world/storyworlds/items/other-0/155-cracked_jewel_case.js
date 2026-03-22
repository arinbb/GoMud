
function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">You flip through the liner notes — Kurt's handwriting is almost illegible, crossed out and rewritten, honest and raw. A small sunflower is pressed between the pages.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " flips through the liner notes of a cracked jewel case, reading intently.", user.UserId());
    return true;
}

function onCommand_read(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">The track listing: Serve the Servants, Scentless Apprentice, Heart-Shaped Box, Rape Me, Frances Farmer Will Have Her Revenge on Seattle, Dumb, Very Ape, Milk It, Pennyroyal Tea, Radio Friendly Unit Shifter, tourette's, All Apologies. Twelve songs. No filler. No compromise.</ansi>");
    return true;
}

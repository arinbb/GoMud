
// Souvenir: Green Hunting Cap from A Confederacy of Dunces

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"11\">You put on the green hunting cap. The earflaps settle against your cheeks like warm, greasy hands. Immediately, the world seems louder, more offensive, more WRONG. Your stomach tightens. Is that your pyloric valve? You didn't even know you HAD a pyloric valve. You feel a powerful urge to write an angry letter to someone — anyone — about the decline of Western civilization.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " puts on a green hunting cap with the earflaps down. For a moment, they look like the angriest person in the room.", user.UserId());
    return true;
}

function onCommand_look(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"11\">The cap is green felt with earflaps that fold down. It has been worn extensively — the inside band is dark with hair tonic and the brim is slightly crushed. It smells of Dr. Nut soda, chicory coffee, and righteous indignation. A small tag inside reads: 'One size fits all, even the largest heads.' Someone has written underneath in pencil: 'ESPECIALLY the largest heads.'</ansi>");
    return true;
}

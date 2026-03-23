// Far Cry 5 - The Compound
var LIBRARY_ROOM = 1;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">The compound PA crackles and Joseph Seed's voice rises and dissolves into static. The razor wire fades. The Grand Library appears around you, quiet and real and free of razor wire entirely.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " dissolves from the compound in a crackle of PA static, gone before the next scripture reading.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "listen" || (cmd == "hear" && rest.indexOf("pa") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The PA crackles and Joseph Seed's voice fills the compound: 'The world beyond these gates is dying. The signs are everywhere. We built the Gate so that the worthy would have somewhere to go when the Collapse comes. We are not afraid of the Collapse. We have been preparing. You are prepared. You are chosen.' His voice is calm and warm and completely certain. The certainty is the thing. The certainty is what people came for.</ansi>");
        return true;
    }

    if (cmd == "read" && (rest.indexOf("sign") >= 0 || rest.indexOf("fence") >= 0)) {
        SendUserMessage(user.UserId(), "<ansi fg=\"10\">The signs on the fence: 'EDEN'S GATE — MEMBERS ONLY.' 'THE COLLAPSE IS COMING. ARE YOU PREPARED?' 'JOSEPH SEED PROTECTS US.' 'ONLY THE CHOSEN WILL SURVIVE.' Below one of them, someone has written in small letters with what might have been a rock: 'WE WERE WRONG.' The letters are barely visible. Someone tried to scratch them out. They didn't try hard enough.</ansi>");
        return true;
    }

    return false;
}

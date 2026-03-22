
// Beetlejuice's Business Card
// Readable item - displays the card with ANSI formatting

function onCommand_read(user, item, room) {

    SendRoomMessage(room.RoomId(), user.GetCharacterName(true)+" squints at a grimy <ansi fg=\"item\">business card</ansi>.", user.UserId());

    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">╔══════════════════════════════════════════════╗</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║                                              ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║      <ansi fg=\"green\">██████ ███████ ████████ ███████</ansi>       ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║           <ansi fg=\"green\">B E T E L G E U S E</ansi>              ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║                                              ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║          <ansi fg=\"yellow\">~ Bio-Exorcist ~</ansi>                 ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║              Freelance                       ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║                                              ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║   Will Scare the Living Out of Your Home     ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║                                              ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║         <ansi fg=\"green\">Say my name three times.</ansi>           ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║                                              ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║  <ansi fg=\"8\">Not responsible for any chaos, property</ansi>     ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║  <ansi fg=\"8\">damage, sandworm attacks, or forced</ansi>        ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║  <ansi fg=\"8\">marriages resulting from services rendered.</ansi> ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">║                                              ║</ansi>");
    SendUserMessage(user.UserId(), "  <ansi fg=\"white\" bg=\"black\">╚══════════════════════════════════════════════╝</ansi>");
    SendUserMessage(user.UserId(), "");

    return true;
}

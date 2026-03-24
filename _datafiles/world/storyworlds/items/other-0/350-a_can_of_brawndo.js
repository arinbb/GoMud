// Souvenir: A Can of Brawndo from Idiocracy

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You crack open the Brawndo. The top pops with a hiss of pressurized electrolytes. The smell is aggressively citrus -- more citrus than citrus, the way everything in 2505 is more of itself than the original thing. You drink. It has electrolytes. You can taste the electrolytes -- bright and metallic and absolutely confident, the taste of a product that has never once doubted itself. You do not know what electrolytes are. You have looked it up and found mostly Brawndo marketing materials. You know what electrolytes are not: they are not what plants crave in any meaningful agricultural sense. The crops in the Dust Bowl understood this. You understand this. You and the crops. Against the whole century.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " cracks open a can of Brawndo and drinks it with the philosophical air of someone who knows exactly what electrolytes are not.", user.UserId());
    return true;
}

function onCommand_drink(user, item, room) {
    return onCommand_use(user, item, room);
}

function onCommand_shake(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">You shake the can. You can feel the electrolytes. They slosh around in there -- those electrolytes, those minerals, those salts -- sloshing with the absolute conviction of a product that replaced an entire agricultural system. The can is cold. The Brawndo logo catches the light. IT'S GOT ELECTROLYTES. You know. You know it has them. You know what plants actually crave. That knowledge, in 2505, made you the most dangerous man in the hemisphere.</ansi>");
    SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " shakes the Brawndo can and listens to the electrolytes.", user.UserId());
    return true;
}

function onCommand_look(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">The can is dented -- from the journey, from 2505, from the future. The label is intact. BRAWNDO THE THIRST MUTILATOR. IT'S GOT ELECTROLYTES. ELECTROLYTES ARE WHAT PLANTS CRAVE. You read it three times, the way you always read things three times in 2505 because the first two times you thought you had misread it. You had not misread it. Electrolytes are what plants crave, according to Brawndo, which is also the company that replaced water in agriculture, which is also the company that caused the Dust Bowl, which is also the company that made the can you are holding. The label does not mention any of this. The label is very focused on the electrolytes.</ansi>");
    return true;
}

function onFound(user, item) {
    user.SetMiscCharacterData("souvenir_idiocracy", "collected");
    SendUserMessage(user.UserId(), "<ansi fg=\"3\">(Souvenir collected: a can of Brawndo from Idiocracy.)</ansi>");
}

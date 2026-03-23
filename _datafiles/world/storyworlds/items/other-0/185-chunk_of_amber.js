
// Souvenir Item: Chunk of Amber with Mosquito
// Quest reward for Jurassic Park (quest 130)

function onCommand_examine(user, item, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You hold the amber up to the light. The mosquito inside is perfect — forty million years old, perfectly preserved, every detail intact from the compound eye to the curl of the proboscis. Inside the mosquito, invisible but real, the blood of something that no longer exists. Dinosaur blood. The starting point of everything.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">The amber is warm in your hand. It always feels warm. You suspect it always will.</ansi>");
    return true;
}

function onCommand_use(user, item, room) {
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You hold the amber and think about the island. The Brachiosaurus meadow. The water glass vibrating. The kitchen and the raptor's amber eye. The whole improbable impossible real thing.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"10\">Life found a way. It always does.</ansi>");
    return true;
}

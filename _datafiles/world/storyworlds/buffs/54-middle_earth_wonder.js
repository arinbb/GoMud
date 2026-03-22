
function onStart(actor) {
    SendUserMessage(actor.UserId(), "<ansi fg=\"green\">The ancient world of Middle-earth settles around you like a cloak. Your senses sharpen — you hear the deep song of the earth, see the faint glow of old enchantments woven into stone and tree. The magic here is older than the sun and moon, and it knows you are here.</ansi>");
}

function onEnd(actor) {
    SendUserMessage(actor.UserId(), "<ansi fg=\"15\">The magic of Middle-earth fades like a half-remembered dream. The ancient song grows quiet. Your senses dull to their ordinary state, and the world feels a little smaller, a little less wondrous than it was a moment ago.</ansi>");
}

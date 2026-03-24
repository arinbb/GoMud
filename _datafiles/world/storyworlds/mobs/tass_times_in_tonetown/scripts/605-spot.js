function onAsk(mob, room, eventDetails) {
    mob.Command("emote looks at you attentively, head tilted at the angle of a dog who is listening with total commitment.");
    mob.Command("emote wags their tail with clear approval of the question, whatever it was.", 1.0);
    mob.Command("emote stands up, turns around once, and sits back down, which is their answer.", 2.0);
    return true;
}

function onShow(mob, room, eventDetails) {
    mob.Command("emote sniffs what you are showing with scientific thoroughness.");
    mob.Command("emote looks up at you and wags once -- the verdict is positive.", 1.5);
    mob.Command("emote sits and waits for whatever comes next, which is all a good dog ever does.", 2.5);
    return true;
}

// Mary May Fairgrave - Resistance Leader
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("seed") >= 0 || question.indexOf("joseph") >= 0 || question.indexOf("john") >= 0 || question.indexOf("faith") >= 0 || question.indexOf("jacob") >= 0) {
        mob.Command("emote sets the glass down with a deliberate click.");
        mob.Command("say They took my father's bar. They took people I knew. They took this county and called it salvation.", 1.5);
        mob.Command("say I don't talk about them with words I want to repeat in polite company.", 3.0);
        mob.Command("emote picks the glass back up and resumes polishing it with slightly more energy than before.", 4.5);
        return true;
    }

    if (question.indexOf("resistance") >= 0 || question.indexOf("fight") >= 0 || question.indexOf("plan") >= 0) {
        mob.Command("say We take it back piece by piece. We hold what we take. We bring in anyone who wants out of the cult.");
        mob.Command("emote glances at the resistance map behind the bar.", 1.5);
        mob.Command("say It's slow. It's ugly. We lose people. We keep going anyway because the alternative is letting them have it, and that is not something I am willing to do.", 3.0);
        return true;
    }

    if (question.indexOf("falls end") >= 0 || question.indexOf("town") >= 0 || question.indexOf("home") >= 0) {
        mob.Command("say My grandfather built the first house here. My dad built this bar.");
        mob.Command("emote is briefly something other than tactical.", 1.5);
        mob.Command("say Every person who was born here, who has family buried here, who grew up here — they have a right to it. Eden's Gate doesn't get to decide that that right expires.", 3.0);
        mob.Command("say So. We are taking it back.", 4.5);
        return true;
    }

    if (question.indexOf("drink") >= 0 || question.indexOf("whiskey") >= 0 || question.indexOf("bar") >= 0) {
        mob.Command("emote pours without being asked, slides it to you, pours one for herself.");
        mob.Command("say This is the last bar in Falls End. I plan to keep it the last bar in Falls End by making it not the last bar anymore. Does that make sense? It makes sense to me.", 1.5);
        mob.Command("say Drink. You look like you need it.", 3.0);
        return true;
    }

    var defaults = [
        "say Tell me what you've seen out there. I need intel more than I need conversation.",
        "say We're going to win. I'm not saying that to make you feel better. I'm saying it because we are.",
        "say You want a drink? I find most things are easier after a drink. Or during."
    ];
    var pick = Math.floor(Math.random() * defaults.length);
    mob.Command(defaults[pick]);
    return true;
}

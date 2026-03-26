// Dutch - The Survivalist
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("bunker") >= 0 || question.indexOf("build") >= 0 || question.indexOf("prepare") >= 0) {
        mob.Command("say I started building this bunker twelve years ago. People said I was paranoid.");
        mob.Command("emote gestures at the radio banks, the map, the generator — twelve years of correct prediction.", 1.5);
        mob.Command("say I have supplies for six months. Radio equipment that runs independently of the county grid. Maps of every back road and trail in Hope County.", 3.0);
        mob.Command("say I was not paranoid. I was early.", 4.5);
        return true;
    }

    if (question.indexOf("radio") >= 0 || question.indexOf("signal") >= 0 || question.indexOf("communication") >= 0) {
        mob.Command("say Eden's Gate locked down the county communications early. Standard playbook for this kind of takeover.");
        mob.Command("emote adjusts a dial on the scanner.", 1.5);
        mob.Command("say I run encrypted on frequencies they haven't found yet. The resistance uses them. It's how we coordinate. How long before they find them? I update the encryption before they do.", 3.0);
        return true;
    }

    if (question.indexOf("seed") >= 0 || question.indexOf("joseph") >= 0 || question.indexOf("cult") >= 0) {
        mob.Command("say I watched it happen. I watched them move in. I watched the county decide it wasn't that bad yet and then decide it was too late.");
        mob.Command("emote marks something on the map.", 1.5);
        mob.Command("say Eden's Gate is organized. Well-funded. They had a plan and they executed it while everybody was deciding whether it was really happening.", 3.0);
        mob.Command("say It really happened.", 4.5);
        return true;
    }

    if (question.indexOf("plan") >= 0 || question.indexOf("now") >= 0 || question.indexOf("do") >= 0) {
        mob.Command("say Now we fight. That's the plan. We have the resistance. We have this bunker as a base. We have people who are angry enough.");
        mob.Command("emote turns from the map and looks at you directly.", 1.5);
        mob.Command("say Angry enough matters. You can do a lot with angry enough.", 3.0);
        return true;
    }

    var defaults = [
        "say The county commission had three separate reports warning them. I wrote two of them. They filed them.",
        "say What do you need? I have a lot of things down here. Twelve years of a lot of things.",
        "say Ask me about the terrain. I know every trail, every ford, every back road in this county."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

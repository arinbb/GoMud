
function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("drink") >= 0 || question.indexOf("absinthe") >= 0 || question.indexOf("wine") >= 0) {
        mob.Command("say Absinthe? Wine? I have both. The absinthe glows green in the gaslight. The wine is red as these walls.");
        mob.Command("say Monsieur Vincent drinks too much of both. But then, who am I to judge? I pour, they drink. That is the arrangement.");
        return true;
    }

    if (question.indexOf("cafe") >= 0 || question.indexOf("night") >= 0 || question.indexOf("place") >= 0) {
        mob.Command("say This cafe? It never closes. The gaslights never go out. The night never ends.");
        mob.Command("say Vincent painted it this way — a place where people come when they have nowhere else to go.");
        mob.Command("emote glances at the slumped figures at the tables.", 2.0);
        mob.Command("say He said the red and green express the terrible passions of humanity. I just see a room that needs sweeping.", 3.5);
        return true;
    }

    if (question.indexOf("vincent") >= 0 || question.indexOf("painter") >= 0 || question.indexOf("artist") >= 0) {
        mob.Command("say The painter? Red beard, wild eyes, always covered in paint?");
        mob.Command("say He comes in here late at night. Drinks coffee — black, no sugar. Stares at the gaslight for hours.");
        mob.Command("say Then he goes home and paints what he saw. He is either a genius or a madman. Perhaps both.", 2.0);
        return true;
    }

    if (question.indexOf("figure") >= 0 || question.indexOf("people") >= 0 || question.indexOf("customer") >= 0) {
        mob.Command("say The regulars? They have been sitting there since the paint dried.");
        mob.Command("emote lowers his voice to a whisper.");
        mob.Command("say Between you and me, I do not think they are entirely real. But they keep me company.", 2.0);
        return true;
    }

    if (question.indexOf("color") >= 0 || question.indexOf("red") >= 0 || question.indexOf("green") >= 0 || question.indexOf("wall") >= 0) {
        mob.Command("say The colors? They give me a headache, if I am honest.");
        mob.Command("say Red walls, green ceiling, yellow floor. Who decorates like this?");
        mob.Command("say Vincent says the colors are fighting. I say the decorator was fighting with good taste.", 2.0);
        return true;
    }

    var defaults = [
        "say What can I get you? We have wine, absinthe, and coffee. Or you could just sit and stare at the walls like everyone else.",
        "say Ask me about the cafe, the drinks, or the painter who made this place famous. I have all night. Literally.",
        "say I pour drinks and listen. That is what bartenders do. What is on your mind?"
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

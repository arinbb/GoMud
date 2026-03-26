
// Myrna Minkoff - the Minx from New York

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("ignatius") >= 0 || question.indexOf("reilly") >= 0) {
        mob.Command("emote gestures emphatically with both hands.");
        mob.Command("say Ignatius! His problems are CLEARLY psychological and probably sexual!");
        mob.Command("say He hides in that room with his Big Chief tablet and his medieval philosophers and REFUSES to engage with the world!", 2.0);
        mob.Command("say I keep telling him — you need EXPERIENCE! You need to LIVE! But does he listen? NO.", 4.0);
        return true;
    }

    if (question.indexOf("protest") >= 0 || question.indexOf("march") >= 0 || question.indexOf("cause") >= 0) {
        mob.Command("emote waves her protest sign with renewed vigor.");
        mob.Command("say I protest EVERYTHING. War, injustice, bad art, worse politics!");
        mob.Command("say You cannot change the world by sitting in a room. You change it by MARCHING.", 2.0);
        mob.Command("say Ignatius thinks you change it by writing angry essays nobody reads. We disagree.", 4.0);
        return true;
    }

    if (question.indexOf("letter") >= 0 || question.indexOf("write") >= 0 || question.indexOf("mail") >= 0 || question.indexOf("correspond") >= 0) {
        mob.Command("say Ignatius and I exchange letters constantly. A war of ideologies fought through the mail.");
        mob.Command("say He writes me twelve-page screeds about Boethius and the decline of everything.", 2.0);
        mob.Command("say I write back telling him his worldview is a defense mechanism. He writes back calling me a minx.", 4.0);
        mob.Command("say It's the most honest relationship I've ever had.", 6.0);
        return true;
    }

    if (question.indexOf("new york") >= 0 || question.indexOf("city") >= 0) {
        mob.Command("say New York! Where REAL things happen! Not this swamp of nostalgia and chicory coffee!");
        mob.Command("say There are movements happening! Art! Revolution! Change!", 2.0);
        mob.Command("say Down here everyone just sits around eating Lucky Dogs and complaining about the heat.", 4.0);
        return true;
    }

    if (question.indexOf("sex") >= 0 || question.indexOf("freud") >= 0 || question.indexOf("psych") >= 0) {
        mob.Command("say I am a firm believer that most of society's problems stem from repression.");
        mob.Command("say Ignatius is EXHIBIT A. The man is a walking case study.", 2.0);
        mob.Command("say He channels everything into that valve of his instead of dealing with his actual feelings.", 4.0);
        return true;
    }

    var defaults = [
        "say Have you read any Marcuse? You should read Marcuse. Everyone should read Marcuse.",
        "say The personal is POLITICAL! Everything is connected!",
        "emote scribbles something on her protest sign and holds it up for inspection."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

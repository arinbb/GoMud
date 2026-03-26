// Parsons

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("daughter") >= 0 || question.indexOf("child") >= 0 || question.indexOf("spy") >= 0) {
        mob.Command("emote sits up a little straighter, and his sweating face manages something close to pride.");
        mob.Command("say She's a clever one. Seven years old and she turned me in proper.", 1.5);
        mob.Command("say That's how it's supposed to work, isn't it? The Spies. Reporting thoughtcrime wherever they find it.", 3.0);
        mob.Command("say Even in your own family. Even in your sleep.", 4.5);
        mob.Command("emote wipes his face and the pride sits on top of the terror like a flag on a sinking ship.", 6.0);
        return true;
    }

    if (question.indexOf("guilty") >= 0 || question.indexOf("thoughtcrime") >= 0 || question.indexOf("crime") >= 0) {
        mob.Command("say Of course I'm guilty! I said something in my sleep. Thoughtcrime doesn't entail death. Thoughtcrime IS death.");
        mob.Command("say The Party is just. You can't get away from it. It's the right thing. I see that now.", 2.0);
        mob.Command("emote sweats with the intensity of a man trying to feel what he is saying and not quite managing it.", 4.0);
        return true;
    }

    if (question.indexOf("what") >= 0 && (question.indexOf("say") >= 0 || question.indexOf("said") >= 0)) {
        mob.Command("emote looks genuinely troubled for the first time.");
        mob.Command("say I don't know. She said I was asleep.", 1.5);
        mob.Command("say 'Down with Big Brother,' she said I said.", 3.0);
        mob.Command("emote pauses. His sweating face becomes very still.", 4.5);
        mob.Command("say I don't remember saying it. But I must have thought it. That's the crime.", 6.0);
        return true;
    }

    if (question.indexOf("room 101") >= 0 || question.indexOf("room101") >= 0) {
        mob.Command("emote stops sweating for a single moment.");
        mob.Command("say Room 101?", 1.5);
        mob.Command("emote resumes sweating, harder.", 3.0);
        mob.Command("say They won't... no. No, they'll correct me and I'll be fine. They only send the real criminals to Room 101.", 4.5);
        mob.Command("emote says this in a voice that does not believe itself.", 6.0);
        return true;
    }

    var defaults = [
        "say I'm guilty and I know it. The Party is fair.",
        "emote sweats. The sweat is the most honest thing about him.",
        "say My daughter did the right thing. I want you to know I believe that."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

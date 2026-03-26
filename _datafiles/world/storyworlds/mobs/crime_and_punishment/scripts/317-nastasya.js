
// Nastasya - the servant girl, practical, kind

function onAsk(mob, room, eventDetails) {
    var question = eventDetails.askText.toLowerCase();

    if (question.indexOf("raskolnikov") >= 0 || question.indexOf("student") >= 0 || question.indexOf("young man") >= 0) {
        mob.Command("say Him! The young student. He worries me, honestly.");
        mob.Command("say He does not eat. He talks to himself. He goes out at strange hours and comes back strange.", 2.0);
        mob.Command("say I leave soup. Sometimes he eats it. Sometimes I find it cold on the step.", 3.5);
        return true;
    }

    if (question.indexOf("landlady") >= 0 || question.indexOf("rent") >= 0) {
        mob.Command("say The mistress says he owes three months. She wants him out.");
        mob.Command("say But she does not put him out, does she? Because she is softhearted really, though she will not admit it.", 2.0);
        mob.Command("emote sniffs with cheerful pragmatism.", 3.5);
        return true;
    }

    if (question.indexOf("building") >= 0 || question.indexOf("tenants") >= 0) {
        mob.Command("say This building! Every floor a different misery.");
        mob.Command("say Second floor: the family with too many children. Third floor: the old man who cries at night.", 2.0);
        mob.Command("say Fourth floor: him. And up top: nothing but heat and mice.", 4.0);
        return true;
    }

    if (question.indexOf("food") >= 0 || question.indexOf("eat") >= 0 || question.indexOf("soup") >= 0) {
        mob.Command("say I have soup. Cabbage soup, not fancy. You want some?");
        mob.Command("say A person must eat. Whatever else is happening, a person must eat. This is simple.", 2.0);
        return true;
    }

    var defaults = [
        "say I have work to do. Ask me quickly.",
        "emote tucks a stray hair behind her ear and looks at you with practical good humor.",
        "say I have seen stranger things in this building than you. Ask your question."
    ];
    var pick = Math.floor(Math.random() * defaults.length);

    return false;
}

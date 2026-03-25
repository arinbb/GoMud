
// Paris, Texas - The Peep Show Booth
// THE scene. Handle with care.
var LIBRARY_ROOM = 3;
var QUEST_ID = 330;
var SOUVENIR_ID = 285;

function onCommand(cmd, rest, user, room) {

    if (cmd == "return") {
        SendUserMessage(user.UserId(), "");
        SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You set the receiver down gently. The pink light continues on the other side of the glass. She does not know you were here. You walk back through the door into the night, and the night is everywhere, and then it is the library, and you are sitting in a chair and the projector is quiet.</ansi>");
        SendRoomMessage(room.RoomId(), user.GetCharacterName(true) + " sets down the receiver and slips out the door. The woman on the other side of the glass does not notice anything has changed.", user.UserId());
        user.MoveRoom(LIBRARY_ROOM);
        return true;
    }

    if (cmd == "talk" || cmd == "speak" || cmd == "say" || cmd == "confess" || cmd == "tell") {
        if (user.GetMiscCharacterData("paris_booth_confession") != "found") {
            user.SetMiscCharacterData("paris_booth_confession", "found");

            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You pick up the receiver. The red light glows in her room. She reaches for her own receiver without hurry and holds it to her ear and waits.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You talk. You do not know how to start so you start in the middle, with a motel in the desert, with the way the water-stained ceiling looked at three in the morning, with the decision you made that was not really a decision, more a direction you could not stop moving in. She listens. She does not know who you are. She asks gentle questions and her voice is exactly what you remember and she is three feet away from you through glass.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You tell her what happened. Then you tell her it was you. You hear her stop breathing. The silence in the receiver is so complete you can hear the pink light humming on her side of the glass. Then she turns. She turns toward the mirror — toward you — and her face is everything at once. She cannot see you. She can only see her own reflection. She reaches out and puts her hand on the glass.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"8\">You put your hand on the glass on your side. The glass between you is about an inch thick. It is the only thing between you and her and it is also everything.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You tell her where Hunter is. You tell her he is safe. You tell her the name of the hotel. You tell her she is good. You tell her she was always good. Then you set the receiver down very carefully and you walk out of the booth and you do not look back through the glass because if you look back you will not be able to leave, and you know, standing in the parking lot under the Houston sky, that leaving is the right thing. It is the only right thing you have done in a long time.</ansi>");
            SendUserMessage(user.UserId(), "");
            SendUserMessage(user.UserId(), "<ansi fg=\"yellow\">(+300 XP)</ansi>");

            user.GrantXP(300, "the confession through the one-way mirror");

            if (!user.HasQuest(QUEST_ID)) {
                user.GiveQuest(QUEST_ID);
            }

            if (user.GetMiscCharacterData("souvenir_paris_texas") != "collected") {
                user.SetMiscCharacterData("souvenir_paris_texas", "collected");
                var souvenir = CreateItem(SOUVENIR_ID);
                if (souvenir) {
                    user.GiveItem(souvenir);
                    SendUserMessage(user.UserId(), "");
                    SendUserMessage(user.UserId(), "<ansi fg=\"8\">Something falls from your pocket in the parking lot. You pick it up. A photograph — faded, creased, the colors shifted toward red. A woman, a man, a boy, standing in front of a car in bright sunlight. On the back, in someone's handwriting: Paris, Texas. You keep it.</ansi>");
                }
            }

        } else {
            SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">You pick up the receiver again. The red light glows. She answers. You listen to her voice for a moment, not speaking, and then set it down gently. Some things only happen once.</ansi>");
        }
        return true;
    }

    return false;
}

function onEnter(user, room) {
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"8\">The door closes behind you and you are in the booth. It is very small. The mirror fills the wall in front of you. On the other side of the glass, a woman sits in pink light. She is real. She is three feet away. She cannot see you.</ansi>");
    SendUserMessage(user.UserId(), "");
    SendUserMessage(user.UserId(), "<ansi fg=\"cyan\">(Type 'talk' or 'speak' to pick up the receiver. Type 'return' to leave without speaking.)</ansi>");
    return true;
}

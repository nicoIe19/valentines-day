let scenario = ['I love your eyes.', 'I love your voice.', 'I love you.', 'I love your lips.',
 'I love your height.', 'I love your personality.', 'I love how you look at me.', 
 'I love you how much you care about me.', 'I love your hands.', 'I love your chest.',
  'I love your arms.', 'I love that you care about our friends.', 
  'I love your laugh.', 'I love the way you hold my hand.', 'I love the way you hug me.',
   'I love the way you play soccer.', 'I love the way you smile.', 'I love the way you kiss me.',
    ' I love your hair.', 'I love how you look at me.', 'I love that you somehow manage to tolerate me.',
    'I love that I look up at you.', 'I love your little mustache.', 'I love the way you dance.', 
    'I love that youre so smart.', 'I love your manners.', 'I hope you love me as much as I love you.'
];

function generate() {
    const randomNumber = Math.floor(Math.random() * (scenario.length));
    let sentence = 'I just love everything about you, Ryan.';

    if (scenario.length > 0) {
       sentence = 
scenario[randomNumber];
       scenario = scenario.filter((e, i) => i !== randomNumber);
       console.log('length of remaining scenario items:', scenario.length);
    }

    document.getElementById("sentence").innerHTML = sentence;
}

generate();
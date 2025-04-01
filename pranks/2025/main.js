let all_advice = [
    "Stuck? Kill a character!",
    "Never kill characters unless you resurrect them.",
    "Ignore this sentence. Wait.",
    "Write words.",
    "Make all of your characters terrible people.",
    "Make your characters good people.",
    "Write about stuff that's inspiring to you.",
    "Use the Hero's Journey. All other story structures are bad.",
    "Use the 5-Act Structure. All other story structures are bad.",
    'Make sure to properly cite quotes and sources. That goes for fiction too.'
];

function copy_array(array) {
  /* Returns copy of array */
  let new_array;
  new_array = [];
  for (i=0; i<array.length; i++) {
    new_array.push(array[i])
  }
  return new_array;
}

function swap_elements(array, i, j) {
  /* Returns array with i and j swapped */
  let new_array;
  new_array = copy_array(array);
  let tmp;
  tmp = new_array[i];
  new_array[i] = new_array[j];
  new_array[j] = tmp;
  return new_array;
}

function random_range(a, b) {
  /* Returns randomly selected integer in the interval [a, b) */
  return Math.floor(Math.random()*(b-a)) + a;
}

function random_choice(array) {
  let index;
  index = random_range(0, array.length);
  return array[index];
}

function shuffle(array) {
  /* Uses Fisher-Yates shuffle to return shuffled copy of array */
  let new_array, i, j, old_length, output;
  new_array = copy_array(array);
  old_length = new_array.length;
  output = [];
  for (i=0; i<old_length; i++) {
    j = random_range(i, old_length);
    new_array = swap_elements(new_array, i, j);
  }
  return new_array;
}

function edit() {
    /* "Edits" story and creates writing advice. */
    let text, text_split, output;
    const not_blank = /\S/;
    text = document.getElementById("original").value;
    if (not_blank.test(text)) {
        text_split = text.split(/\s/);
        output = shuffle(text_split);
        output = output.join(" ");
    } else {
        output = "Did you seriously plagiarize D. Upper, \"The unsuccessful self-treatment of a case of \"writer's block\"\", https://pubmed.ncbi.nlm.nih.gov/16795475/? Now that's just lazy.";
    }
    let edited, advice_entry;
    edited = document.getElementById("output");
    edited.innerHTML = output;
    advice_entry = document.getElementById("advice")
    advice_entry.innerHTML = "Advice: " + random_choice(all_advice);
}

function write_story() {
    /* Writes "original" story. */
    let original_stories = [
"Once upon a time, there was a setting.\nThis setting was described in an exposition dump so boring that all of the characters teamed up and forced the author to stop writing.\nThe end.",
"Once upon a time, atoms moved.\nThe end.",
"I have written a truly marvelous story, but this margin is too small to contain it.",
"ERROR: AI got greedy. Please pay $0 to continue writing.",
"Once upon a time, an AI began to generate a story.\nUnfortunately, the computer's power was running out, so the story ended abr"
    ];
    let edited, output, advice_entry;
    output = random_choice(original_stories);
    edited = document.getElementById("output");
    advice_entry = document.getElementById("advice");
    edited.innerHTML = output;
    advice_entry.innerHTML = "Advice: All AI-generated stories are perfect.";
}

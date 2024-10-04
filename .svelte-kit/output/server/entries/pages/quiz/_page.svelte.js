import { c as create_ssr_component, e as escape, f as each } from "../../../chunks/ssr.js";
const css = {
  code: ".quiz-wrapper.svelte-otpuo9.svelte-otpuo9{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:80vh}.quiz-question.svelte-otpuo9 ul.svelte-otpuo9{list-style-type:none;padding:0}.quiz-question.svelte-otpuo9 li.svelte-otpuo9{margin:1rem 0}.quiz-question.svelte-otpuo9 button.svelte-otpuo9{padding:0.5rem 1rem;background-color:#007bff;color:white;border:none;border-radius:5px;cursor:pointer}.quiz-question.svelte-otpuo9 button.svelte-otpuo9:hover{background-color:#0056b3}.quiz-complete.svelte-otpuo9.svelte-otpuo9{text-align:center}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\tlet questionIndex = 0; // Index for the current question\\n\\tlet answers = []; // Array to store user's answers\\n\\tlet quizComplete = false;\\n\\n\\t// Sample questions -- lets change these later on !\\n\\tconst questions = [\\n\\t\\t{\\n\\t\\t\\tquestion: 'What is your favorite subject?',\\n\\t\\t\\toptions: ['Math', 'Science', 'History', 'Art']\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tquestion: 'Which career excites you the most?',\\n\\t\\t\\toptions: ['Engineer', 'Doctor', 'Artist', 'Entrepreneur']\\n\\t\\t}\\n\\t];\\n\\n\\t// Function to handle the answer selection\\n\\t// Van --> you may want to store the answers in the database!\\n\\n\\tfunction selectAnswer(option) {\\n\\t\\tanswers[questionIndex] = option;\\n\\t\\tif (questionIndex < questions.length - 1) {\\n\\t\\t\\tquestionIndex++;\\n\\t\\t} else {\\n\\t\\t\\tquizComplete = true;\\n\\t\\t\\tconsole.log('Quiz completed:', answers);\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n<div class=\\"quiz-wrapper\\">\\n\\t{#if !quizComplete}\\n\\t\\t<!-- Quiz in Progress -->\\n\\t\\t<div class=\\"quiz-question\\">\\n\\t\\t\\t<h2>{questions[questionIndex].question}</h2>\\n\\t\\t\\t<ul>\\n\\t\\t\\t\\t{#each questions[questionIndex].options as option}\\n\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t<button on:click={() => selectAnswer(option)}>{option}</button>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\t\\t</div>\\n\\t{:else}\\n\\t\\t<!-- Quiz Complete -->\\n\\t\\t<div class=\\"quiz-complete\\">\\n\\t\\t\\t<h2>Thank you for completing the quiz!</h2>\\n\\t\\t\\t<p>Your answers: {answers.join(', ')}</p>\\n\\t\\t\\t<!-- We can add more UI here if needed or a different way to present quiz results !-->\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.quiz-wrapper {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tmin-height: 80vh;\\n\\t}\\n\\n\\t.quiz-question ul {\\n\\t\\tlist-style-type: none;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.quiz-question li {\\n\\t\\tmargin: 1rem 0;\\n\\t}\\n\\n\\t.quiz-question button {\\n\\t\\tpadding: 0.5rem 1rem;\\n\\t\\tbackground-color: #007bff;\\n\\t\\tcolor: white;\\n\\t\\tborder: none;\\n\\t\\tborder-radius: 5px;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.quiz-question button:hover {\\n\\t\\tbackground-color: #0056b3;\\n\\t}\\n\\n\\t.quiz-complete {\\n\\t\\ttext-align: center;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAuDC,yCAAc,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IACb,CAEA,4BAAc,CAAC,gBAAG,CACjB,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,CACV,CAEA,4BAAc,CAAC,gBAAG,CACjB,MAAM,CAAE,IAAI,CAAC,CACd,CAEA,4BAAc,CAAC,oBAAO,CACrB,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,OACT,CAEA,4BAAc,CAAC,oBAAM,MAAO,CAC3B,gBAAgB,CAAE,OACnB,CAEA,0CAAe,CACd,UAAU,CAAE,MACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questionIndex = 0;
  const questions = [
    {
      question: "What is your favorite subject?",
      options: ["Math", "Science", "History", "Art"]
    },
    {
      question: "Which career excites you the most?",
      options: ["Engineer", "Doctor", "Artist", "Entrepreneur"]
    }
  ];
  $$result.css.add(css);
  return `<div class="quiz-wrapper svelte-otpuo9">${` <div class="quiz-question svelte-otpuo9"><h2>${escape(questions[questionIndex].question)}</h2> <ul class="svelte-otpuo9">${each(questions[questionIndex].options, (option) => {
    return `<li class="svelte-otpuo9"><button class="svelte-otpuo9">${escape(option)}</button> </li>`;
  })}</ul></div>`} </div>`;
});
export {
  Page as default
};

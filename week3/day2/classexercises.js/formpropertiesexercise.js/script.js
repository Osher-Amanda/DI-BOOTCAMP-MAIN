// ================================
// - Writes to BOTH the browser console and the page (<pre id="output">)
// - This lets you see results even if you don't open DevTools
// ================================
const out = (function () {
  const box = document.getElementById("output");
  return function log(message) {
    console.log(message);
    box.textContent += (box.textContent.endsWith('\n') ? '' : '\n') + message + '\n';
  };
})();

/*
  WHAT WE'RE DOING (the plan):

  1) Get the value of the 2nd <option>
  2) Add a new option "Work" at the END of the <select>
  3) Add a new option "Primary School" at the BEGINNING of the <select>
  4) Make "College" the selected option — show 3 different ways to do it
  5) Wire up the button so it alerts the currently selected choice
*/

function setupSelectExercise() {
  // STEP 0: Grab references to the elements we need
  // We need the <select> and the <button>.
  const select = document.getElementById("education");
  const button = document.getElementById("showChoice");

  // SAFETY NOTE:
  // 'select.options' is like an array of all <option> elements inside <select>.

  // -----------------------------------------
  // 1) Get the value of the 2nd <option>
  // -----------------------------------------
  // The options are 0-based (0 = first, 1 = second, ...).
  // Initially our <select> has:
  //   [0] High School (value="high-school")
  //   [1] University     (value="University")   ← THIS is the 2nd option
  //   [2] College  (value="College")
  const secondOption = select.options[1]; // 2nd option
  out(`1) 2nd option → text: "${secondOption.text}", value: "${secondOption.value}"`);

  // -----------------------------------------
  // 2) Add a new option "Work" at the END
  // -----------------------------------------
  // Quick, clean way to make <option>: new Option(text, value)
  const workOption = new Option("Work", "work");
  // 'select.add(option)' with one argument appends to the end
  select.add(workOption);
  out('2) Added new option at the END → "Work"');

  // -----------------------------------------
  // 3) Add a new option "Primary School" at the BEGINNING
  // -----------------------------------------
  const primaryOption = new Option("Primary School", "primary-school");
  // 'select.add(option, index)' inserts at a specific position.
  // We use index 0 to put it at the very beginning.
  select.add(primaryOption, 0);
  out('3) Added new option at the BEGINNING → "Primary School"');

  // Show the current list of option texts so you can see the result
  const labelsNow = Array.from(select.options).map(o => o.text).join(", ");
  out("   Options are now (left→right): " + labelsNow);
  // At this point, order should be:
  // [0] Primary School, [1] High School, [2] College, [3] University, [4] Work

  // -----------------------------------------
  // 4) Make "College" selected — THREE WAYS
  // -----------------------------------------

  // 4A) Using selectedIndex (we know College is now at index 2 after our inserts)
  select.selectedIndex = 2;
  out('4A) Selected "College" using: select.selectedIndex = 2');

  // 4B) Using option.selected = true
  //     (This finds the option with value="college" dynamically and selects it)
  const collegeOption = Array.from(select.options).find(opt => opt.value === "college");
  collegeOption.selected = true;
  out('4B) Selected "College" using: option.selected = true');

  // 4C) Using select.value
  //     (Set the select’s value to the value of the option we want)
  select.value = "college";
  out('4C) Selected "College" using: select.value = "college"');

  // After all three, "College" is definitely selected 😄

  // -----------------------------------------
  // 5) Button → alert the currently selected choice
  // -----------------------------------------
  // We add a "click" listener to the button.
  // When clicked, we look up the selected option and show its text in an alert box.
  button.addEventListener("click", () => {
    const selectedText = select.options[select.selectedIndex].text;
    alert("You selected: " + selectedText);
  });
  out('5) Click the "Show Selected" button → an alert will show the current choice');

  // (Optional) Also show what is selected right now:
  out(`   Currently selected → "${select.options[select.selectedIndex].text}"`);
}

// Run everything AFTER the HTML has loaded
document.addEventListener("DOMContentLoaded", setupSelectExercise);




// ================================
// Helper: simple logger for beginners
// - Writes to BOTH the browser console and the page (<pre id="output">)
// - This lets you see results even if you don't open DevTools
// ================================
const out = (function () {
  const box = document.getElementById("output");
  return function log(message) {
    console.log(message);
    box.textContent += (box.textContent.endsWith('\n') ? '' : '\n') + message + '\n';
  };
})();

/*
  WHAT WE'RE DOING (the plan):

  1) Get the value of the 2nd <option>
  2) Add a new option "Work" at the END of the <select>
  3) Add a new option "Primary School" at the BEGINNING of the <select>
  4) Make "College" the selected option — show 3 different ways to do it
  5) Wire up the button so it alerts the currently selected choice
*/

function setupSelectExercise() {
  // STEP 0: Grab references to the elements we need
  // We need the <select> and the <button>.
  const select = document.getElementById("education");
  const button = document.getElementById("showChoice");

  // SAFETY NOTE:
  // 'select.options' is like an array of all <option> elements inside <select>.

  // -----------------------------------------
  // 1) Get the value of the 2nd <option>
  // -----------------------------------------
  // The options are 0-based (0 = first, 1 = second, ...).
  // Initially our <select> has:
  //   [0] High School (value="high-school")
  //   [1] College     (value="college")   ← THIS is the 2nd option
  //   [2] University  (value="university")
  const secondOption = select.options[1]; // 2nd option
  out(`1) 2nd option → text: "${secondOption.text}", value: "${secondOption.value}"`);

  // -----------------------------------------
  // 2) Add a new option "Work" at the END
  // -----------------------------------------
  // Quick, clean way to make <option>: new Option(text, value)
  const workOption = new Option("Work", "work");
  // 'select.add(option)' with one argument appends to the end
  select.add(workOption);
  out('2) Added new option at the END → "Work"');

  // -----------------------------------------
  // 3) Add a new option "Primary School" at the BEGINNING
  // -----------------------------------------
  const primaryOption = new Option("Primary School", "primary-school");
  // 'select.add(option, index)' inserts at a specific position.
  // We use index 0 to put it at the very beginning.
  select.add(primaryOption, 0);
  out('3) Added new option at the BEGINNING → "Primary School"');

  // Show the current list of option texts so you can see the result
  const labelsNow = Array.from(select.options).map(o => o.text).join(", ");
  out("   Options are now (left→right): " + labelsNow);
  // At this point, order should be:
  // [0] Primary School, [1] High School, [2] College, [3] University, [4] Work

  // -----------------------------------------
  // 4) Make "College" selected — THREE WAYS
  // -----------------------------------------

  // 4A) Using selectedIndex (we know College is now at index 2 after our inserts)
  select.selectedIndex = 2;
  out('4A) Selected "College" using: select.selectedIndex = 2');

  // 4B) Using option.selected = true
  //     (This finds the option with value="college" dynamically and selects it)
  const collegeOption = Array.from(select.options).find(opt => opt.value === "college");
  collegeOption.selected = true;
  out('4B) Selected "College" using: option.selected = true');

  // 4C) Using select.value
  //     (Set the select’s value to the value of the option we want)
  select.value = "college";
  out('4C) Selected "College" using: select.value = "college"');

  // After all three, "College" is definitely selected 😄

  // -----------------------------------------
  // 5) Button → alert the currently selected choice
  // -----------------------------------------
  // We add a "click" listener to the button.
  // When clicked, we look up the selected option and show its text in an alert box.
  button.addEventListener("click", () => {
    const selectedText = select.options[select.selectedIndex].text;
    alert("You selected: " + selectedText);
  });
  out('5) Click the "Show Selected" button → an alert will show the current choice');

  // (Optional) Also show what is selected right now:
  out(`   Currently selected → "${select.options[select.selectedIndex].text}"`);
}

// Run everything AFTER the HTML has loaded
document.addEventListener("DOMContentLoaded", setupSelectExercise);

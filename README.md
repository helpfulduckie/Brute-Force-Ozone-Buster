# Brute-Force-Ozone-Buster

It won't stop the AI from trying to make everything smell like ozone, but it will keep you from being able to tell.

---

# Brute Force Ozone Buster 

V.1.0
by HelpfulDuckie (aka bluestar); vibe coded with Copilot

This is a simple brute-force approach to removing the word "ozone" from the AI's output. It first tries to remove the word entirely if it was paired with another scent (ex: "The room smelled of ozone and clean laundry" will become "The room smelled of clean laundry"). If the word appeared by itself, the script will replace it with a random acceptable scent from the ACCEPTABLE_REPLACEMENTS list (ex: "The room smelled of ozone" might become "The room smelled of acetone").

The hope is that the AI will pick up on the alterative word if it tries to reference scent again in the same scene (and maybe will remember the alternative the next time you are in that place?) the same way it remembers other details about the scene.

This script is written to be flexible enough to replace other (probably scent-related) words by adding additional strings (words in quotes) to the TARGET_WORDS list and to replace them with a variety of other alternatives by adding those alternatives to the ACCEPTABLE_REPLACEMENTS list. The more alternatives you add, the less likely it is that the same replacement will be repeated within close proximity to one another. 

The default list of replacement words are all words I would call "Industrial". They work ~okay. There are additional words I tried in scent_list.txt of different categories. I found them more jarring than seeing ozone generally, but your mileage may vary, feel free to add them to your personal list of ACCEPTABLE_REPLACEMENTS.

## Scenario Script Installation Guide

1. Use the [AI Dungeon website](https://aidungeon.com/) on PC (or view as desktop if mobile-only)
2. [Create a new scenario](https://help.aidungeon.com/faq/what-are-scenarios) or edit one of your existing scenarios
3. Open the `DETAILS` tab at the top while editing your scenario
4. Scroll down to `Scripting` and toggle ON → `Scripts Enabled`
5. Select `EDIT SCRIPTS`
6. Select the `Output` tab on the left
7. Delete all code within said tab
8. Copy and paste the following code into your empty `Output` tab:
```javascript
// Your "Output" tab should look like this
const modifier = (text) => {
  // Your other output modifier scripts go here
  text = ozoneBuster(text);
  // Your other output modifier scripts go here
  return {text};
};
modifier(text);
```
9. Select the `Library` tab on the left
10. Delete all code within said tab
11. Open my full Library code (hyperlink below) in a new browser tab
- [Library code](./src/library.js)
12. Copy my *full* code from the page above and paste into your empty `Library` tab
13. Optionally, add or remove scents from the `TARGET_WORDS` and `ACCEPTABLE_REPLACEMENTS` lists (fewer words is better in TARGET_WORDS, more is better in ACCEPTABLE_REPLACEMENTS, you need to have at least word in both)
14. Click the big yellow `SAVE` button in the top right corner
15. And you're done!

Keep in mind that any adventures played from your scenario will include Brute Force Ozone Buster (this also applies retroactively)

## Want to Help Improve the Script?
Please send me additional examples of ozone used in sentences by the AI, especially in cases were the current default list of "Industrial" replacement words don't work very well. You can send them to my email: helpfulduckie@gmail.com
Every additional example I get will help me find better patterns to do better replacements in a future version of this script.

### Credit: 
I stole the majority of LewdLeah's Scenario Script Installation Guide instructions without asking. Sorry and thank you.
/*
Brute Force Ozone Buster V.1.0
by HelpfulDuckie (aka bluestar); vibe-coded with Copilot

This is a simple brute-force approach to removing the word "ozone" 
from the AI's output. It first tries to remove the word entirely if 
it was paired with another scent (ex: "The room smelled of ozone 
and clean laundry" will become "The room smelled of clean laundry"). 
If the word appeared by itself, the script will replace it with a 
random acceptable scent from the ACCEPTABLE_REPLACEMENTS list (ex: 
"The room smelled of ozone" might become "The room smelled of 
strawberries").

The hope is that the AI will pick up on the alterative word if it 
tries to reference scent again in the same scene (and maybe will 
remember the alternative the next time you are in that place?) the 
same way it remembers other details about the scene.

This script is written to be flexible enough to replace other 
(probably scent-related) words by adding additional strings (words 
in quotes) to the TARGET_WORDS list and to replace them with a 
variety of other alternatives by adding those alternatives to 
the ACCEPTABLE_REPLACEMENTS list. The more alternatives you add, 
the less likely it is that the same replacement will be repeated 
within close proximity to one another. 
*/

function ozoneBuster(text)
{
    // List of words ozone buster will try to remove
    const TARGET_WORDS = ["ozone"];
    // List of words that ozone buster will try to replace the above words with
    const ACCEPTABLE_REPLACEMENTS = [
        "lightning",
        "sheet metal",
        "copper",
        "acetone",
        "chemicals",
        "chlorine",
        "resin",
        "concrete",
        "asphalt",
        "tar",
        "smoke",
        "burnt rubber",
        "charcoal",
        "gunpowder",
        "sulfur"
    ];

    const DEBUG = false; // Set to true to enable debug logging

    //Removes target entirely if it was paired with a second scent.
    function removeOzoneEntirely(text){
        const and = " and ";
        
        const forRemoval = [];
        for (const target of TARGET_WORDS) {
            forRemoval.push(and + target);
            forRemoval.push(target + and);
        }

        for (const scent of forRemoval) {
            const regex = new RegExp(escapeRegex(scent), 'gi');
            text = text.replace(regex, '');
        }
        return text;
    }

    // Replaces target with an acceptable scent if it was not paired with a second scent.
    function replaceOzoneWithAcceptableScent(text){
        for (const target of TARGET_WORDS) {
            const regex = new RegExp(escapeRegex(target), 'gi');
            const replacement = ACCEPTABLE_REPLACEMENTS[Math.floor(Math.random() * ACCEPTABLE_REPLACEMENTS.length)];
            text = text.replace(regex, replacement);
        }
        return text;
    }

    // Small helper function to escape special characters in the regex.
    // Probably overkill for this
    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    if (DEBUG) {
        if(text.match(new RegExp(TARGET_WORDS.map(s => escapeRegex(s)).join('|'), 'i'))) {
            console.log("Ozone Buster found a target word in the text. Original text:");
            console.log(text);
        }
    }

    text = removeOzoneEntirely(text);
    text = replaceOzoneWithAcceptableScent(text);

    return text;
}

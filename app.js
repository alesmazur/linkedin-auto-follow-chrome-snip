const text = "Follow";
const matches = [];
for (const button of document.querySelectorAll("button"))
    {  if(button.textContent.includes(text)) {
        matches.push(button)
    }    
    }

console.log(matches);

matches.forEach(el=>el.click())

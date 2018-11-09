let shadowstring = '';
for(let i=0;i<800;i++){
    shadowstring+= `${i}px ${i}px rgb(246,36,89),`;
}

shadowstring = shadowstring.substr(0, shadowstring.length-2);
document.getElementById("longshadow").setAttribute("style", "text-shadow: " + shadowstring);
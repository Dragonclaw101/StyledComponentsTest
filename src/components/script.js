function submit() {
    alert('Hello');
    return false;
}

console.log('Hello world');

const btn = document.getElementById("testButton");

btn.onclick(submit());
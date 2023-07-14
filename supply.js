const water = document.getElementById('water');
const water_consumption = document.getElementById('water-consumption');
const cost_of_water = document.getElementById('cost-of-water');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const a = document.getElementById('yes1');
const b = document.getElementById('no1');
const g = document.getElementById('yes12');
const h = document.getElementById('no12');
const l = document.getElementById('yes15');
const m = document.getElementById('no15');




a.addEventListener('click', () => {
    const if_yes=document.getElementById('if-yes');
    if_yes.innerHTML = '<ul><li>Water consumption by process : <input id="firstnameprocess" class="input" type="text" placeholder=" " /></li><li>Water consumption by domestic : <input id="firstnamedomestic" class="input" type="text" placeholder=" " /></li></ul>';

})

b.addEventListener('click', () => {
    const if_yes=document.getElementById('if-yes');
    if_yes.innerHTML = ' ';

})


g.addEventListener('click', () => {
    const if_yes=document.getElementById('if-yes2');
    if_yes.innerHTML = '<ul><li>Water consumption by process : <input id="firstnameprocess1" class="input" type="text" placeholder=" " /></li><li>Water consumption by domestic : <input id="firstnamedomestic1" class="input" type="text" placeholder=" " /></li></ul>';

})

h.addEventListener('click', () => {
    const if_yes=document.getElementById('if-yes2');
    if_yes.innerHTML = ' ';

})



l.addEventListener('click', () => {
    const if_yes=document.getElementById('if-yes3');
    if_yes.innerHTML = '<ul><li>Water consumption by process : <input id="firstnameprocess2" class="input" type="text" placeholder=" " /></li><li>Water consumption by domestic : <input id="firstnamedomestic2" class="input" type="text" placeholder=" " /></li></ul>';

})

m.addEventListener('click', () => {
    const if_yes=document.getElementById('if-yes3');
    if_yes.innerHTML = ' ';

})


form.addEventListener('submit', (e) => {
    let messages = []
    if(water.value === '' || water.value == null || Number.isInteger(water.value) == false) {
        messages.push('Quantity is required and it should be an integer')
    }
    if(cost_of_water.value === '' || cost_of_water.value == null || Number.isInteger(cost_of_water.value) == false) { 
        messages.push('Cost of water is required and it should be an integer')
    }
    if(water_consumption.value === '' || water_consumption.value == null || Number.isInteger(water_consumption.value) == false) {
        messages.push('Water consumption is required and it should be an integer')
    }
    if(messages.length > 0) {
    e.preventDefault();
    alert(messages.join(', '));
    }
})



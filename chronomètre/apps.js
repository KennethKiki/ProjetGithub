var sec = document.getElementById('sec')
var min = document.getElementById('min')
var hours = document.getElementById('hours')
function start() {
    let id = setInterval(() => {
        sec.value ++
        sec.value = sec.value
        if (sec.value == 60) {
            sec.value = 0
            min.value++
            min.value = min.value
            if (min.value == 60) {
                min.value = 0
                hours.value++
                hours.value = hours.value
                
            }
        }
    }, 1000);
        
}
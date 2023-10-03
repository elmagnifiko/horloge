let heu = document.getElementById('heu');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
            let day = new Date();
        let heure = day.getHours() * 30;
        let minutes = day.getMinutes() * 6;
        let secondes = day.getSeconds() * 6;

        heu.style.transform = `rotateZ(${heure + (minutes / 12)}deg)`;
        min.style.transform = `rotateZ(${minutes}deg)`;
        sec.style.transform = `rotateZ(${secondes}deg)`;
})
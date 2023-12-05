function update() {
    const barraRoja = document.querySelector('#barra-roja img');
    const porcentajeRojoFetch = fetch('./static/1.txt');
    const porcentajeAzulFetch = fetch('./static/2.txt');
    const totalFetch = fetch('./static/total.txt');

    Promise.all([porcentajeRojoFetch, porcentajeAzulFetch, totalFetch]).then(function(values) {
        const porcentajeRojoText = values[0].text();
        const porcentajeAzulText = values[1].text();
        const totalText = values[2].text();

        Promise.all([porcentajeRojoText, porcentajeAzulText, totalText]).then(function(values2) {
          const textRojo = document.querySelector('#porcentaje-rojo p');
          const textAzul = document.querySelector('#porcentaje-azul p');

            const porcentajeRojo = values2[0];
            const porcentajeAzul = values2[1];
            const total = values2[2];

            const porcentajeRojoInt = parseInt(porcentajeRojo);
            const porcentajeAzulInt = parseInt(porcentajeAzul);
            const totalInt = parseInt(total);

            const porcentajeRojoFinal = (porcentajeRojoInt * 100) / totalInt;
            const porcentajeAzulFinal = (porcentajeAzulInt * 100) / totalInt;
            barraRoja.style.width = `${porcentajeRojoFinal}%`;
            textRojo.innerHTML = `${Math.round(porcentajeRojoFinal)}<span>%</span>`;
            textAzul.innerHTML = `${Math.round(porcentajeAzulFinal)}<span>%</span>`;
        });
    });
}

setInterval(update, 1000);
function showInfo(plan) {
    let infoSection = document.getElementById('info-section');
    let message = '';

    switch(plan) {
        case 'familia':
            message = '¡Has seleccionado el Plan Familiar! Llámanos aquí para más información: (123) 456-7890.';
            break;
        case 'individual':
            message = '¡Has seleccionado el Plan Individual! Llámanos aquí para más información: (123) 456-7890.';
            break;
        case 'empresarial':
            message = '¡Has seleccionado el Plan Empresarial! Llámanos aquí para más información: (123) 456-7890.';
            break;
        default:
            message = 'Selecciona un plan para más información.';
    }

    infoSection.innerHTML = `<p>${message}</p>`;
}

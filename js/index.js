document.addEventListener('DOMContentLoaded', () => {
	const cuotas = {
		tres: '3 cuotas sin interés',
		seis: '6 cuotas sin interés',
		nueve: '9 cuotas sin interés',
		doce: '12 cuotas sin interés',
		dieciocho: '18 cuotas sin interés',
	};

	const descuentos = {
		lunes: '15% de descuento',
		viernes: '10% de descuento',
		martes: '10% de descuento',
		jueves: '15% de descuento',
		miércoles: '10% de descuento',
	};

	const modoContent = document.getElementById('modo-content');
	const naranjaContent = document.getElementById('naranja-content');
	const visaContent = document.getElementById('visa-content');
	const mastercardContent = document.getElementById('mastercard-content');

	const generateContent = (
		paymentMethod,
		cuotasArray,
		discountDay,
		discount
	) => `
        <strong>Si pagas con ${paymentMethod},</strong>
        te ofrecemos las siguientes financiaciones:
        <ul class="mt-2">
            ${cuotasArray.map((cuota) => `<li>${cuota}</li>`).join('')}
        </ul>
        Los días <strong>${discountDay}</strong> además tienes <strong>${discount}</strong>.
    `;

	modoContent.innerHTML = `
        <strong>Si pagas con Modo,</strong> te llevamos el producto sin cargo y puedes pagarlo hasta en <strong>${cuotas.dieciocho}!</strong>
        <p>Planes de financiación:</p>
        <ul>
            <li>${cuotas.tres}</li>
            <li>${cuotas.seis}</li>
            <li>${cuotas.nueve}</li>
            <li>${cuotas.doce}</li>
            <li>${cuotas.dieciocho}</li>
        </ul>
        Los días <strong>lunes</strong> además tienes <strong>${descuentos.lunes}</strong> y los días <strong>viernes</strong> tienes <strong>${descuentos.viernes}</strong>.
    `;

	naranjaContent.innerHTML = generateContent(
		'Tarjeta Naranja',
		[cuotas.tres, cuotas.seis],
		'martes',
		descuentos.martes
	);

	visaContent.innerHTML = generateContent(
		'Tarjeta Visa',
		[cuotas.tres, cuotas.seis, cuotas.nueve],
		'jueves',
		descuentos.jueves
	);

	mastercardContent.innerHTML = generateContent(
		'Tarjeta Mastercard',
		[cuotas.tres, cuotas.seis, cuotas.nueve, cuotas.doce],
		'miércoles',
		descuentos.miércoles
	);
});

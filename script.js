document.getElementById('generate-btn').addEventListener('click', function(){
    const text = document.getElementById('input-text').value;
    if (text.trim() === ''){
        alert('Por favor, digite um texto ou Url!');
        return;
    }

    //Limpar QR Code anterior
    document.getElementById('qrcode').innerHTML = '';


//Gera QrCode
    new QRCode(document.getElementById('qrcode'), {
        text: text,
        width: 256,
        height: 256
    });

});
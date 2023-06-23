document.querySelector("#arquivo").addEventListener('change', function () {
    var selecioneArquivoElement = document.querySelector('.selecione_arquivo');
    selecioneArquivoElement.textContent = this.files[0].name;
    selecioneArquivoElement.style.color = '#267957';
    selecioneArquivoElement.style.fontWeight = 'bold';
});

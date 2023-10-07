function translateText() {
    const sourceText = document.getElementById('sourceText').value;
    const targetLanguage = document.getElementById('targetLanguage').value;

    const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(sourceText)}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const translatedText = data[0][0][0];
        document.getElementById('translatedText').innerHTML = `${translatedText}`;
      })
      .catch(error => {
        console.error('Translation error:', error);
      });
}
function reset(){
    location.reload()
}
const sourceTextElement = document.getElementById('sourceText');
const targetLanguageElement = document.getElementById('targetLanguage');
sourceTextElement.addEventListener('input', translateText);
targetLanguageElement.addEventListener('input', translateText);

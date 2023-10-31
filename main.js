function wordAlter() {
    const words = ["moda...", "papelaria...", "telefonia...", "construção..."];
    const element = document.querySelector('.word-alter');
    let index = 0;
    let word = '';

    function wordUpdate() {
      word = words[index];
      element.textContent = word.substring(0, element.textContent.length + 1);

      if (element.textContent === word) {
        setTimeout(() => {
          if (element.textContent === word) {
            setTimeout(() => {
                element.textContent = '';
              index = (index + 1) % words.length;
              setTimeout(wordUpdate, 1000);
            }, 1000);
          }
        }, 3000);
      } else {
        setTimeout(wordUpdate, 100);
      }
    }

    wordUpdate();
  }
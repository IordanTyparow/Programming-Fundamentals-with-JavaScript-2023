function cutAndReverse(text) {
   let texts = text.split('').reverse().join('');

   let firstHalf = texts.substring(0, texts.length / 2);
   let secondHalf = texts.substring(texts.length / 2);

   console.log(secondHalf);
   console.log(firstHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
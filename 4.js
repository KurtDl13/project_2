let text = prompt("Введите Ваш текст", );

let array_text = text.split(" ");

array_text.sort(function(prev, next)
{
  return next.length - prev.length;
});

alert(`${array_text[0]}; ${array_text[1]}; ${array_text[2]}`);
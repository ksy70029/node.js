var name = 'egoing';
var letter = "dear " + name + "\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." + name + "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the egoing 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." + name ;

var letter = `dear ${name} 

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ${name} It has survived not only five centuries, but also the leap into electronic typesetting, ${1+1} remaining essentially unchanged. It was popularised in the egoing 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ${name}` ;
console.log(letter);

//줄바꿈하려면 \두번(나눠서) 써줘야 함 근데 이건 코드상에서만 실제로 보면 줄바꿈 안되어 있다. 그러면 실제로 줄바꿈 하려면 \앞에 \n 써줘야 함  

//literal : 정보를 표현하는 기호, 방법 
//var a = 1; 여기에서 1은 숫자1이라는 데이터를 표현하는 literal 
//var a = '1'; 여기에서 1은 문자1이라는 데이터를 표현하는 literal 

//저 코드를 템플릿으로 바꾸기 위해서는 특수한 기호 (`)를 사용해야 함 - 템플릿 리터럴의 시작과 끝을 나타내는 기호 
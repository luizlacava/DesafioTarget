1)	Observe o trecho de código abaixo: 
int INDICE = 13, SOMA = 0, K = 0; 
enquanto K < INDICE faça 
{
 K = K + 1; 
SOMA = SOMA + K;
 }
 imprimir(SOMA); 
Ao final do processamento, qual será o valor da variável SOMA? 

[Código da Soma][1]
[1]: [https://github.com/luizlacava/DesafioTarget/blob/main/soma.js]


2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 
IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

[Código Fibonacci][2]
[2]: [https://github.com/luizlacava/DesafioTarget/blob/main/fibonacci.js]


3) Descubra a lógica e complete o próximo elemento: 

a) 1, 3, 5, 7, ___ 9
b) 2, 4, 8, 16, 32, 64, ____ 128
c) 0, 1, 4, 9, 16, 25, 36, ____ 49
d) 4, 16, 36, 64, ____ 100
e) 1, 1, 2, 3, 5, 8, ____ 13
f) 2,10, 12, 16, 17, 18, 19, ____ 200


4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

- Ligo o interruptor 1 pelo tempo suficiente para esquentar a lâmpada e o desligo, ligo o interruptor 2 e vou até a sala 1.
- Se a lâmpada estiver acessa, pertence ao interruptor 2, se estiver desligada e quente pertence ao interruptor 1, se estiver desligada e fria pertence ao interruptor 3.
- Anoto qual o interruptor da sala 1 e desligo todos.
- Agora sabendo qual o interruptor da sala 1, ligo um dos outros dois interruptores e vou até a sala 2, para descobrir qual interruptor se refere a cada uma das duas salas restantes.


5) Escreva um programa que inverta os caracteres de um string. IMPORTANTE: 
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; 
b) Evite usar funções prontas, como, por exemplo, reverse;

[Código String][3]
[3]: [https://github.com/luizlacava/DesafioTarget/blob/main/string.js]

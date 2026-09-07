
//2)
const btCliquei = document.getElementById('btCliquei');
btCliquei.addEventListener('click', function() {
    console.log('Cliquei');
});

//5)
let nomeProduto = "Fone de ouvido";
let precoProduto = 89.90;
console.log(nomeProduto);
console.log(precoProduto);

//6)
let a = 10;
let b = "10";
let c = true ;
let d;
let e = null ;

console.log(typeof a);//number
console.log(typeof b);//string
console.log(typeof c);//boolean
console.log(typeof d);//undefined
console.log(typeof e);//object
//7)
const NOME_LOJA = "Mestre Gato";
//NOME_LOJA = "Sugar Bat"; Erro: script.js:25 Uncaught TypeError: Assignment to constant variable. at script.js:25:11
//O erro acontece pois uma variavel const não pode ser alterada depois que foi atribuida

//8)
//let 1produto = " Tenis "; //Erro: Uncaught SyntaxError: Unexpected number (at script.js:28:5)
//O erro ocorre pois ,em JavaScript, variaveis não podem possuir nomes que comecem com numeros

//9)
//let nomeProduto = Tenis; //Erro: Uncaught SyntaxError: Identifier 'nomeProduto' has already been declared (at script.js:31:5) | Cannot redeclare block-scoped variable 'nomeProduto'
//O erro ocore pois variaveis tipo string devem ser inicializadas com os caracteres entre aspas, o JavaScript identifica que ela seria incializada com um texto mas leva ao erro pois não foi atribuida corretamente

//10)
let estoque = 5;
if ( estoque = 0) {
console . log (" Sem estoque ") ;
}
console.log(estoque);
//No if, o operador = esta sendo utilizado como atribuição. Desta forma ele atribui um novo valor a variavel estoque, em vez de fazer a comparação. Deveria ser utilizado === (comparação estrita)

//11)
//console.log(PrecoProduto);//Erro: Uncaught ReferenceError: PrecoProduto is not defined
//O erro ocorre pois o JavaScript é Case Sensitive, a mudança de maiusculas e minusculas ira alterar a variavel que esta sendo referenciada

//12)
let quantidade = 2;
let valorTotal = quantidade*precoProduto;
console.log("Valor total da compra: "+valorTotal);

//13)
let precoPedido = 150.00;
let qtdeParcelas = 4;
let valorParcelas = precoPedido/qtdeParcelas;
let sobra = precoPedido%qtdeParcelas;
console.log("Valor de cada parcela: "+valorParcelas);
console.log("Valor que sobra: "+ sobra);

//14)
let lado = 6;
let area = lado **2;
console.log("Area do quadrado: "+area+"cm");

//15)
console . log (" Total : " + 10 + 5) ; //Como primeiro é encontrado uma String, o javascript irá converter todo o resto como string e concatenar
console . log (10 + 5) ;//Como apenas há numbers, primeiro ele realiza a operção matematica e converte para string para exibir no console

//16)
let estoque1 = 12;
estoque -= 3;
console.log("Estoque: "+estoque);
estoque -= 2;
console.log("Estoque: "+estoque);
estoque -= 4;
console.log("Estoque: "+estoque);

//17)
let pontos = 40;
pontos *= 2;
console.log(pontos);
pontos += 50;
console.log(pontos);

//18)
let precoProduto1 = 180.00;
precoProduto1 /= 2;
console.log("Metade do preco: "+precoProduto1);

//19)
console . log (5 == "5") ;//Compara se o valor é igual a 5 independente do tipo que ele possui
console . log (5 === "5") ;//Compara se o valor é igual a 5 apenas se for do tipo string

//20)
console . log (5 != "5") ;//Compara se o valor é diferente de 5 independente do tipo que ele possui
console . log (5 !== "5") ;//Compara se o valor é diferente de 5 apenas se for do tipo string

//21)
let estoque2 = 50;
console . log (estoque2 > 10) ;
console . log (estoque2 < 20) ;
console . log (estoque2 >= 30) ;
console . log (estoque2 <= 40) ;

//22)
let estoque3 =80;
if(estoque3 > 0){
    console.log("Produto disponivel");
}
else{
    console.log("Produto Indisponivel");
}

//23)
let precoProduto2 = 150;
if(precoProduto2 > 200){
    console.log("Frete gratis");
}
else if(precoProduto2 > 100 && precoProduto2 < 200){
    console.log("Frete com desconto");
}
else{
    console.log("Frete normal");
}

//24)
if(estoque3 > 0 && precoProduto2 < 100 ){
    console.log("Pode comprar com desconto");
}
else{
    console.log("Não pode comprar com desconto");
}

//25)
let cupomValido = true;
let clienteVip = false;
if(cupomValido == true || clienteVip == true){
    console.log("Desconto aplicado");
}

//26)
let temEstoque = false;
if(!temEstoque){
    console.log("Produto Indisponivel");
}

//27)
let categoria = "eletronico";
switch (categoria) {
  case "eletronico":
    console.log("Produtos eletrônicos que terão seus cabos roídos por ratos!");
    break;

  case "roupa":
    console.log("Confira as últimas tendências cheias de pelo de gato!");
    break;

  case "livro":
    console.log("Explore novas histórias e conheça nossas traças!");
    break;

  default:
    console.log("Categoria nao cadastrada");
    break;
}

//28)
console.log("Chatllut! Seja bem vindo à loja Mestre Gato! Confira nosssa nova coleção de inverno e aproveite as promoções. ");




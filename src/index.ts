import { Ingresso } from "./Classes/Exercicio_1/Ingresso";
import { Normal } from "./Classes/Exercicio_1/Normal";
import { VIP } from "./Classes/Exercicio_1/VIP";
import { Camarote } from "./Classes/Exercicio_1/Camarote";
import { Imovel } from "./Classes/Exercicio_2/Imovel";     
import { Novo } from "./Classes/Exercicio_2/Novo";
import { Velho } from "./Classes/Exercicio_2/Velho";
import { Animal } from "./Classes/Exercicio_3/Animal";  
import { Gato } from "./Classes/Exercicio_3/Gato";  
import { Cachorro } from "./Classes/Exercicio_3/Cachorro";  
import { Cavalo } from "./Classes/Exercicio_3/Cavalo";  
const ingresso = new Normal(100);
const ingressoVIP = new VIP(100, 50);
const ingressoCamarote = new Camarote(100, 500);
ingresso.imprimeValor();
ingressoVIP.imprimeValor();
ingressoCamarote.imprimeValor();
const casaNova = new Novo("Rua Andradas ,100 Bairro: Centro Porto Alegre/RS", 155000, 10000);
casaNova.imprimirValor();
const casaVelha = new Velho("Rua Alcides Cruz ,100 Bairro: Aberta dos Morros Porto Alegre/RS", 159000, 10000);
casaVelha.imprimirValor();
const cachorro = new Cachorro("Rex", "Marrom", 1.5);
const cavalo = new Cavalo("Pé de Pano", "Branco", 2); 
const gato = new Gato("Mingau", "Preto", 0.5);
cachorro.latir();
cavalo.correr();
gato.miar();  




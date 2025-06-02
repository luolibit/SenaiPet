console.log("Bem-vindo ao sistema de gerenciamento de pets!");
// passo 1 = cadastro pets
function Pet(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;

    this.saudacao = function(){
        return "Oi, eu sou " + this.nome + " e sou um(a) " + this.especie + ".";
    }

    this.idadeHumana = function(){
        if(this.especie.toLowerCase() === "cachorro") {
            return this.idade * 7;
        } 
        else if (this.especie.toLowerCase() === "gato") {
            return this.idade * 6;
        } 
        else {
            return this.idade * 5;
        }
    }
}

const meusPets = [
    new Pet("Rex", "Cachorro", 5),
    new Pet("Mimi", "Gato", 2),
    new Pet("Pingo", "Coelho", 3),
];

const listarPets = () => {
    for (let pet of meusPets) {
        console.log(`Nome: ${pet.nome}, Espécie: ${pet.especie}, Idade: ${pet.idade} anos`);
    }
}

const buscarPetPorNome = function(nome) {
    const petEncontrado = meusPets.find(pet => pet.nome.toLowerCase() === nome.toLowerCase());
    if (petEncontrado) {
        console.log(`Pet encontrado: ${petEncontrado.nome}, Espécie: ${petEncontrado.especie}, Idade: ${petEncontrado.idade} anos`);
    } else {
        console.log('Pet não encontrado.');
    }
}

function executarAcaoNosPets(acao) {
    for (let pet of meusPets) {
        acao(pet);
    }
}

function executar() {
    listarPets();

    buscarPetPorNome("Rex");
    buscarPetPorNome("Luna");

    executarAcaoNosPets((pet) => console.log(pet.saudacao()));

    executarAcaoNosPets((pet) => {
        console.log(`Idade humana de ${pet.nome}: ${pet.idadeHumana()} anos`);
    });
}

executar();
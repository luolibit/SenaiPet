console.log("Bem-vindo ao sistema de gerenciamento de pets!");

//Objeto construtor Pet
function Pet(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;

    // Método para falar (usa 'this')
    this.falar = function(){
        return "Oi, eu sou " + this.nome + " e sou um(a) " + this.especie + ".";
    }

    // Método para calcular idade humana (usa 'this')
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

// Array de pets
const meusPets = [
    new Pet("Rex", "Cachorro", 5),
    new Pet("Mimi", "Gato", 2),
    new Pet("Pingo", "Coelho", 3),
];

//Arrow function para listar os pets
const listarPets = () => {
    for (let pet of meusPets) {
        console.log(`Nome: ${pet.nome}, Espécie: ${pet.especie}, Idade: ${pet.idade} anos`);
    }
}

//Função anônima para buscar pet por nome
const buscarPetPorNome = function(nome) {
    const petEncontrado = meusPets.find(pet => pet.nome.toLowerCase() === nome.toLowerCase());
    if (petEncontrado) {
        console.log(`Pet encontrado: ${petEncontrado.nome}, Espécie: ${petEncontrado.especie}, Idade: ${petEncontrado.idade} anos`);
    } else {
        console.log('Pet não encontrado.');
    }
}

//Função de ordem superior
//Recebe uma função como parâmetro e executa essa função para cada pet
function executarAcaoNosPets(acao) {
    for (let pet of meusPets) {
        acao(pet);
    }
}

const removerPetPorNome = (nome) => {
    const petsFiltrados = meusPets.filter(pet => pet.nome.toLowerCase() !== nome.toLowerCase());
    
    if (petsFiltrados.length === meusPets.length) {
        console.log(`Nenhum pet com o nome '${nome}' foi encontrado para remoção.`);
    } else {
        meusPets.length = 0; // Limpa o array original
        petsFiltrados.forEach(pet => meusPets.push(pet)); // Adiciona os pets filtrados de volta
        console.log(`Pet '${nome}' removido com sucesso.`);
    }
};

//Função principal que executa todas as ações
function executar() {
    listarPets();

    buscarPetPorNome("Rex");
    buscarPetPorNome("Luna");

    //Arrow function passada para função de ordem superior
    executarAcaoNosPets((pet) => console.log(pet.falar()));

    //Arrow function que imprime idade humana
    executarAcaoNosPets((pet) => {
        console.log(`Idade humana de ${pet.nome}: ${pet.idadeHumana()} anos`);
    });

    //Remover pet
    removerPetPorNome("Mimi");

    console.log("Lista de pets após remoção:");
    listarPets();
}

executar(); // executa o sistema
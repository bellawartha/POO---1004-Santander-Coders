// **Exercícios Básicos:**
// 1. Crie uma classe chamada `Person` com propriedades `name` e `age`. Instancie alguns objetos dessa classe.

// 2. Adicione um método à classe `Person` que imprime uma saudação com o nome da pessoa.

function person() {
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHi() {
            console.log(`Olá, ${this.name}`)
        }
    }

    let p = new Person('José', 16);

    console.log(p);
    p.sayHi();
};

// 3. Crie uma classe `Rectangle` com propriedades `width` e `height`. Adicione um método que calcula a área do retângulo.

function rectangle() {
    class Rectangle {
        height: number;
        width: number;

        constructor(height: number, width: number) {
            this.height = height;
            this.width = width;
        };

        calcArea() {
            let area: number = this.height * this.width;

            console.log(`A área desse retângulo é de ${area}m²`);
        };
    };

    let retangulo = new Rectangle(2, 4);

    retangulo.calcArea();
};

// 4. Crie uma classe `Circle` com propriedade `radius` e um método que calcula a área do círculo.

function circle() {
    class Circle {
        radius: number;

        constructor(radius: number) {
            this.radius = radius;
        };

        calcArea() {
            let area: number = (this.radius ** 2) * 3.14;
            console.log(area);
        };
    };

    let circle = new Circle(3);

    circle.calcArea();
};


// 5. Crie uma classe `Car` com propriedades `make`, `model` e `year`. Crie um método que retorna a descrição do carro.

function car() {
    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        };

        description() {
            console.log(`O carro é da marca ${this.make}, modelo ${this.model} do ano ${this.year}`);
        };

    };

    let car = new Car('Honda', 'Civic', 2014);

    car.description();

};


// 6. Crie uma classe `Student` com propriedades `name` e `grades` (um array). Adicione um método que calcula a média das notas.

function student() {
    class Student {
        name: string;
        grades: number[];

        constructor(name: string, grades: number[]) {
            this.name = name;
            this.grades = grades
        }

        media() {
            let notas = this.grades.reduce((acumulador, nota) => acumulador + nota);
            let media = notas / this.grades.length;

            console.log(notas)
            console.log(`A média das notas de ${this.name} é de ${media}`);
        }
    }

    let estudante = new Student('João', [9, 8, 5, 6]);
    estudante.media();
};

// 7. Crie uma classe `BankAccount` com propriedades `balance` e `owner`. Adicione métodos para depositar e sacar dinheiro.

function bankAccount() {

    class BankAccount {
        balance: number;
        owner: string;

        constructor(balance: number, owner: string) {
            this.balance = balance;
            this.owner = owner;
        };

        deposito(cash: number) {
            this.balance += cash;
            console.log(`Saldo da conta: ${this.balance}`);
        };

        saque(cash: number) {
            this.balance -= cash;
            console.log(`Saldo da conta: ${this.balance}`);
        };

    };

    let conta = new BankAccount(1000, 'Jubileu');
    conta.deposito(500);
    conta.saque(700);
};

// 8. Crie uma classe `Book` com propriedades `title`, `author` e `year`. Crie um método que retorna os detalhes do livro.

function book() {
    class Book {
        title: string;
        author: string;
        year: number;

        constructor(title: string, author: string, year: number) {
            this.title = title;
            this.author = author;
            this.year = year;
        };

        description() {
            console.log(`Título: ${this.title} Autor: ${this.author} Ano: ${this.year}`)
        }
    }

    let book = new Book('Nós', 'Evgeni Zamiatin', 1924);
    book.description();
};


// 9. Crie uma classe `Product` com propriedades `name`, `price` e `quantity`. Adicione métodos para calcular o valor total e exibir os detalhes.

function product() {
    class Product {
        name: string;
        price: number;
        quantity: number;

        constructor(name: string, price: number, quantity: number) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }

        calcTotal() {
            let total = this.price * this.quantity;
            console.log(`O valor total de ${this.quantity} ${this.name} é de ${total}`);
        };
    };

    let product = new Product('Notebook', 3000, 2);
    product.calcTotal();
};


// 10. Crie uma classe `Employee` com propriedades `name`, `role` e `salary`. Adicione um método que calcula um aumento de salário com base em uma porcentagem.

function employee() {
    class Employee {
        private name: string;
        private role: string;
        private salary: number;

        constructor(name: string, role: string, salary: number) {
            this.name = name;
            this.role = role;
            this.salary = salary;
        };

        jobPromotion() {
            let salaryIncrease = this.salary + (this.salary * 0.1);
            console.log(`O valor do salário de ${this.name} com aumento é de ${salaryIncrease}`);
        };
    };

    let employee = new Employee('Maria', 'Desenvolvedora', 5000);
    employee.jobPromotion();
};

// **Exercícios Intermediários:**

// 11. Crie uma classe `Bank` que contém uma coleção de contas bancárias. Adicione métodos para adicionar contas, fazer transferências e calcular o saldo total do banco.

function bank() {

    class Titular {
        nome: string;
        id: number;

        constructor(nome: string, id: number) {
            this.nome = nome;
            this.id = id;
        };
    };

    class Conta {
        private titular: Titular;
        private saldo: number;

        private numero: number;

        constructor(titular: Titular, saldo: number, numero: number) {
            this.titular = titular;
            this.saldo = saldo;
            this.numero = numero;
        };
        setSaldo(saldo: number) {
            this.saldo = saldo;
        };

        getSaldo() {
            return this.saldo;
        };

        getNumero() {
            return this.numero;
        };

        getTitular() {
            return this.titular;
        };
    };

    class Bank {
        private contasBancarias: Conta[] = [];

        add(conta: Conta): void {
            this.contasBancarias.push(conta);
        };

        fazerTransferencia (valor:number, contaDestino:number, contaOrigem:number) {
            
        }

    };

    const titular1 = new Titular("Marcela", 1234);
    const titular2 = new Titular("Kaique", 4567);
    const titular3 = new Titular("Patricia", 8934);

    const conta1 = new Conta(titular1, 500, 4321);
    const conta2 = new Conta(titular2, 200, 8976);
    const conta3 = new Conta(titular3, 1000, 7623);

    let bank = new Bank();
    bank.add(conta1);
    bank.add(conta2);
    bank.add(conta3);

console.log(bank);
};


// 12. Crie uma classe `Shape` com método `calculateArea()`. Crie subclasses `Square`, `Triangle` e `Pentagon` que implementam esse método.



// 13. Crie uma classe `Playlist` que contém objetos da classe `Song`. Adicione métodos para adicionar músicas, remover músicas e calcular a duração total da playlist.



// 14. Crie uma classe `Person` com propriedade `address`. Crie uma classe `Address` separada e associe-a à classe `Person`.



// 15. Crie uma hierarquia de classes para representar diferentes tipos de veículos. Cada classe deve ter métodos específicos, como `startEngine()` e `stopEngine()`.



// 16. Crie uma classe `Bank` que contém uma coleção de contas bancárias (classe `BankAccount`). Adicione métodos para calcular o saldo médio e encontrar a conta com o saldo mais alto.



// 17. Crie uma classe `Animal` com métodos `eat()` e `makeSound()`. Crie subclasses como `Dog`, `Cat` e `Bird` com implementações específicas.



// 18. Crie uma classe `Shape` com método `draw()`. Crie subclasses como `Circle`, `Square` e `Triangle` com implementações de desenho.



// 19. Crie uma classe `Company` com propriedades `name` e `employees`. Adicione métodos para adicionar e remover funcionários, e calcular a folha de pagamento.

function company() {

    class Employee {
        name: string;
        id: number;
        salary: number;
        job: string;


        constructor(name: string, id: number, salary: number, job: string) {
            this.name = name;
            this.id = id;
            this.salary = salary;
            this.job = job;
        };
    };
    class Company {
        employees: Employee[];


        addEmployee(employee: Employee) {
            this.employees.push(employee);
            console.log(`${employee.name} foi adicionada como funcionária da empresa`)
        };

        removeEmployee(id: number) {
            for (let employee of this.employees) {
                if (employee.id == id) {
                    const index = this.employees.indexOf(employee);
                    if (index > -1) {
                        this.employees.splice(index, 1);
                        console.log(`${employee.name} foi removida como funcionária da empresa`);
                    };
                };
            };
        };

        folhaPagamento() {
            let total: number = 0;
            for (let employee of this.employees) {
                console.log(`O salário de ${employee.name} é de ${employee.salary}`);
                total += employee.salary;
            };

            console.log(`O total a ser pago para os funcionários é de ${total}`);
        };
    };

    let employee1 = new Employee('Amanda', 1234, 2500, 'assistente adminsitrativa');
    let employee2 = new Employee('Marina', 5678, 5000, 'desenvolvedora');
    let employee3 = new Employee('Amelia', 8912, 8000, 'gestora');

    let company = new Company();

    company.addEmployee(employee1);
    company.addEmployee(employee2);
    company.addEmployee(employee3);
    company.removeEmployee(employee2.id);

    company.folhaPagamento();

};


// 20. Crie uma classe `Game` com propriedades `name` e `players`. Adicione métodos para adicionar e remover jogadores, e determinar se o jogo está ativo.


// **Exercícios Avançados:**
// 21. Crie uma classe `Bank` com um método para simular uma transação bancária que envolve várias contas, garantindo consistência.


// 22. Implemente um sistema de herança múltipla usando interfaces para representar diferentes habilidades que um personagem de jogo pode ter.


// 23. Crie uma classe `Database` que permite operações de CRUD (criar, ler, atualizar e excluir) em objetos que implementam uma interface específica.


// 24. Implemente um padrão de projeto Singleton para uma classe `Logger` que registra informações em todo o aplicativo.


// 25. Crie uma classe `StateMachine` que permite definir estados e transições, útil para modelar comportamentos complexos.


// 26. Crie uma classe `EventEmitter` que permite registrar ouvintes para eventos e emitir eventos para notificar os ouvintes.


// 27. Implemente uma classe `Cache` que armazena resultados de funções para entradas específicas, melhorando o desempenho.


// 28. Crie uma classe `ShapeFactory` que gera objetos `Shape` com base em parâmetros fornecidos.


// 29. Implemente um mecanismo de observação (Observer Pattern) onde um objeto observável notifica seus observadores sobre mudanças.


// 30. Crie uma classe `DependencyInjectionContainer` para gerenciar a injeção de dependência em um aplicativo TypeScript.
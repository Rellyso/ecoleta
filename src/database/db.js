// importar a dependencia do sqLite3

const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operações no de banco de dados

// const db = {
// propriedade: "valor"

// }

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db // resposta para um require

// utilizar o objeto de banco de dados, para nossas operações

db.serialize(() => {
//     // com comandos sql, eu vou:

//     // 1. criar uma tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT, 
//     //         items TEXT
//     //     );

//     // `)

//     // // 2. inserir dados na tabela 
//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);
//     // `

//     // const values = [
//     //     "https://images.unsplash.com/photo-1533626904905-cc52fd99285e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     //     "Pappersider",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Número 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Resíduos Eltrônicos, Lâmpadas"
//     // ]

//     // function afterInsertData(err) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso.")
//     //     console.log(this)
//     // }

//     // db.run(query, values, afterInsertData)

//     // 3. consultar os dados da tabela

// db.all(`SELECT name FROM places`, function(err, rows) {
//     if (err) {
//         return console.log(err)
//     }

//     console.log("Aqui estão os seus registros.")
//     console.log(rows)
// } )


    // 4. deletar um dado da tabela

// db.run(`DELETE FROM places WHERE id = ?`, [11], function(err) {
//     if (err) {
//         return console.log(err)
//     }
    
//     console.log("Registro deletado com sucesso!")
// })
})


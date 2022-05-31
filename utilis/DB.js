import * as SQLite from 'expo-sqlite';


const database = SQLite.openDatabase('apnidukaan.db');

export function init(){

    const promise = new Promise((resolve,reject) => {
        database.transaction((tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS godown (
                id TEXT PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                stock INTEGER NOT NULL,
                timestamp INTEGER NOT NULL,
            );
            CREATE TABLE IF NOT EXISTS transactions (
                id INT PRIMARY KEY NOT NULL,
                quantity INTEGER NOT NULL,
                timestamp INTEGER NOT NULL,
                itemid TEXT NOT NULL
                CONSTRAINT itemid
                    FOREIGN KEY (itemid)
                    REFERENCES godown(id)
            );
            `,
            [],
            () => {
                resolve();
            },
            (_,error) => {
                reject(error);
            }
            );
        });
    })

}
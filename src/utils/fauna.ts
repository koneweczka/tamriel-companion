import { Client, fql } from 'fauna';
import antiquitiesMock from '../sources/antiquities.json';

const client = new Client({
    secret: import.meta.env.VITE_FAUNA_SECRET || '',
});

export async function createCollection(name: string) {
    const collectionExists = await client.query(fql`Database.byName(${name}).exists()`)

    if (collectionExists) {
        console.log(`Collection ${name} already exists`);
    }

    const query = fql`
    Collection.create({
      name: ${name},
    })
  `;

    client.query(query).then((response) => console.log(response));
}

// TODO: Add Uuid option and cached databased asked locally.
export function createAntiquities() {
    for (const antiquity of antiquitiesMock) {
        try {
            const query = fql`Antiquities.create(${antiquity})`;

            client.query(query).then((response) => console.log(response));
        } catch (error) {
            console.error(error);
        }

    }
}
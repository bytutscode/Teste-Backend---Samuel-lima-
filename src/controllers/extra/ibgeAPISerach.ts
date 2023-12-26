import axios from "axios";
import { Request, Response } from "express";
import Municipality from "../../models/Municipality";

export const getMunicipalities = async (req: Request, res: Response) => {

    try {
        const hasMunicipalities = await Municipality.findAll()

        if (hasMunicipalities.length <= 0) {

            const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios';
            const { data: municipalities } = await axios.get(url);

            for (let municipality of municipalities) {
                await Municipality.create({ id: municipality.id, name: municipality.nome })
            }
        }

        const municipalities = await Municipality.findAll();
        return res.status(200).json(municipalities)
    } catch (error) {
        return res.status(500).json({ message: 'There was an internal error during your request' });
    }
}
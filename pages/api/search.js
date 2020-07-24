import { db } from "../../src/api/db";
import { NextApiResponse, NextApiRequest } from "next";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  console.log(req.query);

  res.send("hola" + req.query.word);
};

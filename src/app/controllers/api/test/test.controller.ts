
import { Request, Response } from "express";

export let test = (req: Request, res: Response, next: any) => {
    res.setHeader('Content-Type', 'application/json');

    res.json({
        message: 'Hello World 3!'
    });
}

export let test2 = (req: Request, res: Response, next: any) => {
    res.setHeader('Content-Type', 'application/json');

    res.json({
        message: 'Hello World 4!'
    });
}

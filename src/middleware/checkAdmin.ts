const isAdmin: boolean = true;

export const checkAdmin = (req: any, res: any, next: any) => {
  if (isAdmin) {
    return next();
  } else {
    return res
      .status(401)
      .json({ error: "No estás autorizado a realizar esta acción" });
  }
};

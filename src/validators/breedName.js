const breedName = breed => {
    if (typeof breed === "string") {
        return true;
    } else if (typeof breed === "object") {
        const { en, ptBr } = breed;
        return typeof en === "string" && typeof ptBr === "string";
    }
    return false;
};

export default breedName;
export const validate = (value: string): boolean => {
    const regexp = /[^\d\w\s&]/gi;
    const matched = value.match(regexp);
    
    if (matched) return false;
    return true;
}
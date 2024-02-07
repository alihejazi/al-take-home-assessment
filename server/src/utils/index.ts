

class Utils {
    // this helper (onlyContainsNumbers) should even reject floats/doubles
    private onlyContainsNumbers = (str: string) => /^\d+$/.test(str);
    private isNumber = (str: string) => ! isNaN(Number(str)) && this.onlyContainsNumbers(str);

    validateQuantities = (quantities: string): boolean => {
        const splitted = quantities.split(',')
        for (let i = 0; i < splitted.length; i++) {
            const number = splitted[i];
            if (!this.isNumber(number.trim())) {
            return false;
            }
        }
        return true;
    }
}

export default Utils;
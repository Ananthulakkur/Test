export const formatNumber = (number, toLocaleString) => {
    // ensure correct value is passed
    if(number !== 0 && !number) return;

    // use built-in javascript function if specified
    if (toLocaleString) {
        return number.toLocaleString();
    }

    // use custom format otherwise
    const billion = 1000000000;
    const million = 1000000;
    const thousand = 1000;
    if(number >= billion){
        number = this.formatDecimal(number / billion, 2);
        return number + " BN";
    }else if(number >= (10 * million) ){
        number = this.formatDecimal(number / million, 2);
        return number + " MN";
    }else if(number >= million ){
        return number.toString().replace(/(\d{1,3})(\d{3})(\d{3})(\.\d+)?/, "$1,$2,$3");
    }else if(number >= thousand){
        return number.toString().replace(/(\d{1,3})(\d{3})(\.\d+)?/, "$1,$2");
    }else{
        return Math.round(number);
    }
}
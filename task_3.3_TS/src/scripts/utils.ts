function isEmptyOrWhitespaceOnly(str : string){
    str = str.replace(/(<\/?[^>]+(>|$)|&nbsp;|\s)/g, "")
    return str === '' || str.trim().length === 0
}
export {isEmptyOrWhitespaceOnly}
function isEmptyOrWhitespaceOnly(str : string){
    str = str.replace(/(<\/?[^>]+(>|$)|&nbsp;|\s)/g, "")
    console.log('l' + str.toString() + 'k')
    return str == '' || str.trim().length === 0
}
export {isEmptyOrWhitespaceOnly}
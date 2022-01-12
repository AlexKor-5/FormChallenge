const phoneNumberMask = obj => {
    let i = -1
    let resMask = ''

    const change = (mask, phoneNumber) => {
        if (i > phoneNumber.length) return
        i++
        resMask = mask.toLowerCase().replace(/x/i, phoneNumber[i] || 'x')
        change(resMask, phoneNumber)
    }
    change(obj.mask, obj.phone)
    return obj.visible
        ? resMask
        : resMask
              .split('')
              .filter(s => s !== 'x')
              .join('')
}
export default phoneNumberMask


export function yesChecker(userInput){
    const inputCapitalized = userInput.toUpperCase();
    return inputCapitalized.charAt(0) === 'Y';
}